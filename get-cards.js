const request = require('request');
const cheerio = require('cheerio');

const getCardRows = $ => $('.card-row');

const getCardName = $ => $.find('.card-name').text();

const getCardSet = $ => $.find('.card-expansion').text();

const getCardTypes = $ => $.find('.card-type').text().split(' - ');

request('http://dominion.diehrstraits.com/?set=All&f=list', function(error, response, body) {
  const $ = cheerio.load(body);

  const cards = [];

  getCardRows($).each(function(){
    const row = $(this);
    cards.push({
      name: getCardName(row),
      set: getCardSet(row),
      type: getCardTypes(row)
    });
  });

  console.log(JSON.stringify(cards, true, 2));
});
