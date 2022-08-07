import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'

// set up Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import allReducer from './redux/reducers'
import ReduxThunk from 'redux-thunk'

let globalState = createStore(allReducer, applyMiddleware(ReduxThunk))

ReactDOM.render(
  <Provider store={globalState}>
    <App />
  </Provider>,
  document.getElementById('root')
)