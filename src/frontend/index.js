import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/index';
import App from './routes/App';

import './reset.scss';

const history = createBrowserHistory();
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
