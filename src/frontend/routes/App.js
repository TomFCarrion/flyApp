import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppWrapper from '../components/AppWrapper';
import ResultWrapper from '../components/Result/ResultWrapper';

const App = () => (
  <BrowserRouter>
    <Route exact path='/' component={AppWrapper} />
    <Route exact path='/result' component={ResultWrapper} />
  </BrowserRouter>

);
export default App;
