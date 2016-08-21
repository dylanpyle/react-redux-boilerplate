import React from 'react';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import AppContainer from './pages/app';
import CountryListPage from './pages/country-list';
import CountryPage from './pages/country';

export default (
  <Router history={browserHistory}>
    <Route component={AppContainer} path='/'>
      <IndexRoute component={CountryListPage} />
      <Route component={CountryPage} path='countries/:countryCode' />
    </Route>
  </Router>
);
