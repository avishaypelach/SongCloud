import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';

import './assets/styles/main.scss';

import ReactDOM from 'react-dom';
import React from 'react';

import Routes from './components/routes/Routes';
import store from './store'

import {Provider} from 'react-redux';


// function GetXhr() {
//
//   const xhr = new XMLHttpRequest();
//
//   xhr.open('GET', 'http://localhost:3000/test');
//
//   xhr.send();
//
//   xhr.addEventListener('load', (e) => {
//     console.info(e.target.responseText);
//   });
//
// }
//
// GetXhr();

function renderApp() {
  ReactDOM.render(
    <Provider store={ store }>
      <Routes />
    </Provider>,
    document.querySelector('#root')
  );
}

renderApp();


