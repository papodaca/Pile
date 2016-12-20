import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import '@blueprintjs/core/dist/blueprint.css';

import configureStore from './store/configureStore';
import routes from './routes';
import html from 'file?name=Admin/[name].[ext]!./index.html';
import './app.css';

const mountNode = document.getElementById('app');
const store = configureStore();

render((
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
), mountNode);
