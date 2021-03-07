import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { rootReducer } from '../reducers/index';

const history = createBrowserHistory();
const store = createStore(rootReducer, applyMiddleware(thunk));

const ProviderMock = props => (
  <Provider store={store}>
    <Router history={history}>{props.children}</Router>
  </Provider>
);

export default ProviderMock;
