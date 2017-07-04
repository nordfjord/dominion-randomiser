const request = require('request');
const cheerio = require('cheerio');

const getCardRows = $ => $('.card-row');

const getCardName = $ => $.find('.card-name').text();

const getCardSet = $ => {
    const set = $.find('.card-expansion').text();

    if (set === '2nd') {
      return 'Base';
    }

    return set;
}

const getCardTypes = $ => $.find('.card-type').text().split(' - ');
const getCardCost = $ => +$.find('.card-cost').text().replace('$', '');

const getCardDescription = $ => $.find('.card-rules').html();

request('http://dominion.diehrstraits.com/?set=All&f=list', function(error, response, body) {
  const $ = cheerio.load(body);

  const cards = [];

  getCardRows($).each(function(){
    const row = $(this);
    cards.push({
      name: getCardName(row),
      set: getCardSet(row),
      type: getCardTypes(row),
      cost: getCardCost(row),
      description: getCardDescription(row)
    });
  });

  console.log(JSON.stringify(cards, true, 2));
});
