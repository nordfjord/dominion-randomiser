const remove = ['Secret Chamber', 'Great Hall', 'Coppersmith', 'Scout', 'Saboteur', 'Tribute', 'Chancellor', 'Woodcutter', 'Feast', 'Spy', 'Thief', 'Adventurer'];
const cards = require('./src/cards.json');

const without_removed = cards.filter(card => {
  return remove.indexOf(card.name) === -1 && remove_sets.indexOf(card.set) !== -1;
});

const toAdd = [{
  name: 'Lurker',
  type: ['Action'],
  cost: 2,
  description: '+1 Action<br>Choose one: Trash an Action card from the Supply, or gain an Action card from the trash.',
}, {
  name: 'Diplomat',
  type: ['Action', 'Reaction'],
  cost: 4,
  description: '+2 Cards<br>If you have 5 or fewer cards in hand (after drawing), +2 Actions.<br><hr class="border-bottom"><br>When another player plays an Attack card, you may first reveal this from a hand of 5 or more cards, to draw 2 cards then discard 3.'
}, {
  name: 'Mill',
  type: ['Action', 'Victory'],
  cost: 4,
  description: '+1 Card, +1 Action.<br>You may discard 2 cards, for +2.'
}, {
  name: 'Secret Passage',
  type: ['Action'],
  cost: 4,
  description: '+2 Cards +1 Action<br>Take a card from your hand and put it anywhere in your deck.',
}, {
  name: 'Courtier',
  type: ['Action'],
  cost: 5,
  description: 'Reveal a card from your hand. For each type it has (Action, Attack, etc.), choose one: +1 Action; or +1 Buy; or +Coin3.png; or gain a Gold. The choices must be different.'
}, {
  name: 'Patrol',
  type: ['Action'],
  cost: 5,
  description: '+3 Cards. Reveal the top 4 cards of your deck. Put the Victory cards and Curses into your hand. Put the rest back in any order.'
}, {
  name: 'Replace',
  type: ['Action'],
  cost: 5,
  description: 'Trash a card from your hand. Gain a card costing up to Coin2.png more than it. If the gained card is an Action or Treasure, put it onto your deck; if it\'s a Victory card, each other player gains a Curse.'
}].map(d => {
  d.set = 'Intrigue';
  return d;
});

console.log(JSON.stringify(without_removed.concat(toAdd), true, 2));
