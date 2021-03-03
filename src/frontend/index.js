import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './routes/App';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/index';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';

import { createStore, applyMiddleware } from 'redux';

import './reset.scss';

const history = createBrowserHistory();
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
