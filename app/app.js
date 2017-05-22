import 'normalize.css/normalize.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'font-awesome/css/font-awesome.css';

import './assets/styles/main.scss';

import ReactDOM from 'react-dom';
import React from 'react';

import Routes from './components/routes/Routes';
import store from './store'

import {Provider} from 'react-redux';


// function readData() {
//   console.info('read data');
//   const xhr = new XMLHttpRequest();
//
//   xhr.open('GET', 'http://localhost:3000/playlists');
//   xhr.addEventListener('load', () => {
//     document.querySelector('#root').textContent = '';
//     const playlists = JSON.parse(xhr.responseText);
//
//     for (const playlist of playlists) {
//       const d = document.createElement('div');
//
//       d.textContent = playlist.title;
//
//       document.querySelector('#root').appendChild(d);
//     }
//
//     setTimeout(readData, 3000);
//   });
//   xhr.addEventListener('error', () => {
//     alert('problem!');
//   });
//   xhr.send();
//
// }
// readData();

function renderApp() {
  ReactDOM.render(
    <Provider store={ store }>
      <Routes />
    </Provider>,
    document.querySelector('#root')
  );
}

renderApp();


