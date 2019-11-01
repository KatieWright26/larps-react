import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import produce from 'immer';
import App from './components/app';

const initialState = {
  user: { id: 1, name: 'Katie', larpIds: [1] },
  larps: [
    {
      id: 1,
      name: 'star trek in the park',
      ownerId: 1,
      characterIds: [1, 2, 3],
    },
    { id: 3, name: 'spongebob', ownerId: 2, characterIds: [5, 7, 9] },
  ],
  characters: [
    { id: 1, name: 'Scotty' },
    { id: 2, name: 'Spok' },
    { id: 3, name: 'Captain Sleaze' },
  ],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DELETE_LARP':
      return produce(state, draftState => {
        draftState.larps = draftState.larps.filter(
          l => l.id !== action.payload
        );
      });
    default:
      return state;
  }
}

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App name="larps" />,
  </Provider>,
  document.querySelector('main')
);

console.log('welcome to larps');
