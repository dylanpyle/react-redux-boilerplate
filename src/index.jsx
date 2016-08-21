import 'babel-polyfill';

import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import configureStore from './services/configure-store';

import './css/base.css';
import routes from './routes';

const store = configureStore();

render(
  <Provider store={store}>
    {routes}
  </Provider>
  ,
  document.querySelector('.app-root')
);
