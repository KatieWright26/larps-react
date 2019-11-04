const tape = require('tape');
const { createStore } = require('redux');
const reducer = require('../reducer');

const initialState = {
  larps: [
    {
      id: 1,
      name: 'MiddleEarthe',
      ownerId: 1,
      characters: [
        { id: 1, name: 'Samwise Gamgree' },
        { id: 2, name: 'Peregrin Took' },
        { id: 3, name: 'Meriadoc Brandybuck' },
      ],
    },
    {
      id: 3,
      name: "Elves 'n' Things",
      ownerId: 1,
      characters: [
        { id: 4, name: 'Galadriel' },
        { id: 5, name: 'Elrond' },
        { id: 6, name: 'Éowyn' },
        { id: 5, name: 'Arwen' },
      ],
    },
  ],
};

tape('Delete a LARP', function(test) {
  const store = createStore(reducer, initialState);

  store.dispatch({ type: 'DELETE_LARP', payload: 1 });

  const actual = store.getState().larps;

  const expected = [
    {
      id: 3,
      name: "Elves 'n' Things",
      ownerId: 1,
      characters: [
        { id: 4, name: 'Galadriel' },
        { id: 5, name: 'Elrond' },
        { id: 6, name: 'Éowyn' },
        { id: 5, name: 'Arwen' },
      ],
    },
  ];

  test.deepEqual(actual, expected, 'LARP successfully deleted');
  test.end();
});

tape('Delete a Character', function(test) {
  const store = createStore(reducer, initialState);

  store.dispatch({ type: 'DELETE_CHARACTER', payload: 4 });

  const actual = store.getState().larps[1].characters;

  const expected = [
    { id: 5, name: 'Elrond' },
    { id: 6, name: 'Éowyn' },
    { id: 5, name: 'Arwen' },
  ];

  test.deepEqual(actual, expected, 'Character successfully deleted');
  test.end();
});

tape('Create a LARP', function(test) {
  const store = createStore(reducer, initialState);

  store.dispatch({ type: 'CREATE_LARP', payload: { name: 'Katie' } });

  const actual = store.getState().larps;

  const expected = [
    {
      id: 1,
      name: 'MiddleEarthe',
      ownerId: 1,
      characters: [
        { id: 1, name: 'Samwise Gamgree' },
        { id: 2, name: 'Peregrin Took' },
        { id: 3, name: 'Meriadoc Brandybuck' },
      ],
    },
    {
      id: 3,
      name: "Elves 'n' Things",
      ownerId: 1,
      characters: [
        { id: 4, name: 'Galadriel' },
        { id: 5, name: 'Elrond' },
        { id: 6, name: 'Éowyn' },
        { id: 5, name: 'Arwen' },
      ],
    },
    {
      name: 'Katie',
    },
  ];

  test.deepEqual(actual, expected, 'LARP created');
  test.end();
});

tape('Create a Character', function(test) {
  const store = createStore(reducer, initialState);

  store.dispatch({
    type: 'CREATE_CHARACTER',
    payload: { name: 'Katie', larp: 3 },
  });

  const actual = store.getState().larps[1];

  const expected = {
    id: 3,
    name: "Elves 'n' Things",
    ownerId: 1,
    characters: [
      { id: 4, name: 'Galadriel' },
      { id: 5, name: 'Elrond' },
      { id: 6, name: 'Éowyn' },
      { id: 5, name: 'Arwen' },
      { name: 'Katie' },
    ],
  };
  test.deepEqual(actual, expected, 'Character created');
  test.end();
});
