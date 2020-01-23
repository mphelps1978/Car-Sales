import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { reducers } from './reducers/';

const store = createStore(reducers, applyMiddleware(logger));
// console.log(store);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, rootElement);
