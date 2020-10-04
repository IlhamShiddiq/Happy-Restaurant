/* eslint-disable import/first */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable import/extensions */

import 'regenerator-runtime';

// JS
import swRegister from './service-worker/sw-register';
import App from './views/app';
import './utils/btn-action';

// CSS
import '../styles/main.css';
import '../styles/mobile-navigation.css';
import '../styles/font.css';
import '../styles/load-indicator.css';
import '../styles/input.css';
import '../styles/responsive.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const app = new App({
    item: [document.querySelector('#nav-item-1'), document.querySelector('#nav-item-2'), document.querySelector('#nav-item-3')],
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
    swRegister();
});

console.log('Hello Coders! :)');
