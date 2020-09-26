/* eslint-disable no-console */
/* eslint-disable import/extensions */

import 'regenerator-runtime'; /* for async await transpile */

// JS
import get from './getData.js';
import getInfo from './getInfo.js';
import './action.js';

// CSS
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/mobile-navigation.css';
import '../styles/font.css';

get();
getInfo();
console.log('Hello Coders! :)');
