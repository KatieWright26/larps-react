import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import reducer from './reducer';
import { requestLarpsFromDb } from './actionCreators';

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <BrowserRouter>
      <App name="larps" />
    </BrowserRouter>
  </Provider>,
  document.querySelector('main')
);

store.dispatch(requestLarpsFromDb());

console.log('welcome to larps');
