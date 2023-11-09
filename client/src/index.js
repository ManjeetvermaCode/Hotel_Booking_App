import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'

// 1. import from react-redux and redux

import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import { rootReducer } from './reducers/combineReducer';

// 2. create user reducer function 


// 3. combine multiple reducers

// 4. create redux store
const store=configureStore({
  reducer:{
    rootReducer,
    composeWithDevTools
  }
  // composeWithDevTools()
})

// 5. provide redux store to entire app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
