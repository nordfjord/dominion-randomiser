// @flow
const m = require('mithril');
const f = require('flyd');

require('ace-css/css/ace.min.css')
require('./index.css')

type Card = {
  set: string,
  name: string,
  type: Array<string>
}

const cards: Array<Card> = require('./cards.json');

const expansions: Array<string> = [...new Set(cards.map(d => d.set))];

const stored_expansions = (localStorage.getItem('expansions') || 'Base').split(',');

const filtered_expansions = f.stream(stored_expansions);

f.on(expansions => localStorage.setItem('expansions', expansions.join(',')), filtered_expansions)

const filtered_cards = filtered_expansions.map(sets => {
  return cards.filter(card => ~sets.indexOf(card.set));
});


const gen_random_indexes = (size: number, from: number, to: number) => {
  const res = [];
  const range = to - from;
  if (range < size) size = range;
  for (let i = 0; i < size; ++i) {
    let idx = from + Math.round(Math.random() * range);
     while(res.indexOf(idx) > -1) {
       idx = from + Math.round(Math.random() * range);
     }
    res.push(idx);
  }
  return res;
}

const selected_cards = filtered_cards.map(cards => {
  return gen_random_indexes(10, 0, cards.length).map(idx => cards[idx]).sort((a,b)=> {
    return a.cost - b.cost;
  });
})


const MainFilters = {
  filtered_cards,
  expansions: filtered_expansions,
}

const Filters = {
  view() {
    return m('.flex.items-center.justify-center.flex-wrap', [
      expansions.map(set => m('', m('label', [
        set,
        m('input[type=checkbox]', {
          checked: !!~filtered_expansions().indexOf(set),
          onchange: m.withAttr('checked', checked => {
            if (checked) {
              filtered_expansions(filtered_expansions().concat([set]));
            } else {
              filtered_expansions(filtered_expansions().filter(d => d !== set));
            }
          })
        })
      ])))
    ])
  }
}

const Cards = {
  view() {
    return m('.flex.items-center.justify-center', m('.overflow-scroll.fit', m('table.table-light', [
      m('thead', m('tr.border-bottom', [m('th.p1', 'Card'), m('th.p1', 'Set'), m('th.p1.cost', 'Cost')])),
      m('tbody', selected_cards().map(card => card && m(`tr.card-row.${card.type.join('.')}`, [
        m('td.p1.name', card.name),
        m('td.p1.set', card.set),
        m('td.p1.cost', card.cost),
        // m('td.p1', card.type.join(', ')),
        // m('td.p1', m.trust(card.description)),
      ])))
    ])))
  }
}

const main = {
  view() {
    return m('.dominion-randomizer.container', [
      m('h1.h1.center', 'Dominion Randomizer'),
      m(Filters),
      m('hr.border-bottom'),
      m(Cards)
    ])
  }
}

m.mount(document.body, main);
