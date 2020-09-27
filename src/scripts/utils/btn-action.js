/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable no-console */

import $ from 'jquery';

let btn = document.getElementById('btn-top');
let nav = document.getElementById('drawer');

window.addEventListener('scroll', () => {
  let vertical = window.scrollY;

  if (vertical < 250) {
    btn.classList.remove('show-btn');
    btn.classList.add('hide-btn');
    nav.classList.remove('show-nav');
    nav.classList.add('hide-nav');
  } else {
    btn.classList.add('show-btn');
    btn.classList.remove('hide-btn');
    nav.classList.add('show-nav');
    nav.classList.remove('hide-nav');
  }
});

btn.addEventListener('click', () => {
  $('html, body').animate({ scrollTop: 0 }, 800);
});
