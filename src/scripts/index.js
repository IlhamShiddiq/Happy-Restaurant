/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import 'regenerator-runtime';

// JS
import get from './getData.js';
import getInfo from './getInfo.js';
import App from './views/app';

// CSS
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/mobile-navigation.css';
import '../styles/font.css';

const app = new App({
    button: document.querySelector('#hamburger'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('#main-content'),
    overlay: document.querySelector('#overlay'),
    close: document.querySelector('#close'),
    body: document.querySelector('body'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
});

// get();
// getInfo();
console.log('Hello Coders! :)');
