import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import request from 'request';
import thunk from 'redux-thunk';
import App from './components/app';
import reducer from './reducer';
import { requestLarpsFromDb } from './actionCreators';

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App name="larps" />,
  </Provider>,
  document.querySelector('main')
);

store.dispatch(requestLarpsFromDb());

console.log('welcome to larps');
