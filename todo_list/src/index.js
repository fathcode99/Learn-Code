import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'

// set up Redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducer from './redux/reducers'

let globalState = createStore(allReducer)

ReactDOM.render(
  <Provider store={globalState}>
    <App />
  </Provider>,
  document.getElementById('root')
)