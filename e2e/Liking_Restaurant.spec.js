/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.seeElement('#content');
  I.see('Tidak ada daftar', '.no-entry');
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.see('Tidak ada daftar', '.no-entry');

  I.amOnPage('/');
  I.seeElement('.item a.detail-btn');
  I.seeElement('.item h1.rest-name');
  const firstRestaurant = locate('.item a.detail-btn').first();
  const firstRestaurantNameContainer = locate('.item h1.rest-name').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurantNameContainer);
  I.click(firstRestaurant);

  I.seeElement('button[aria-label="like this restaurant"]');
  const likedRestaurantName = await I.grabTextFrom('h1.detail-rest-name');
  I.click('button[aria-label="like this restaurant"]');

  I.amOnPage('/#/favorite');
  I.seeElement('.item');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Cancel liking that restaurant', async ({ I }) => {
  I.see('Tidak ada daftar', '.no-entry');

  I.amOnPage('/');
  I.seeElement('.item a.detail-btn');
  const firstRestaurant = locate('.item a.detail-btn').first();
  I.click(firstRestaurant);

  I.seeElement('button[aria-label="like this restaurant"]');
  I.click('button[aria-label="like this restaurant"]');

  I.seeElement('button[aria-label="unlike this restaurant"]');
  I.click('button[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.see('Tidak ada daftar', '.no-entry');
});

Scenario('Add customer reviews', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.item a.detail-btn');
  const firstRestaurant = locate('.item a.detail-btn').first();
  I.click(firstRestaurant);

  I.seeElement('input#name');
  I.seeElement('textarea#review');
  I.seeElement('button#btn-add-review');
  I.fillField('input#name', 'Ilham');
  I.fillField('textarea#review', 'Sehat Top Mantap');
  I.click('button#btn-add-review');

  I.seeElement('.list-review');
});
