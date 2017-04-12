import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import playerStore from './reducers/streamStore'
import App from './App';
import './style/index.css';

let store = createStore(playerStore);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)