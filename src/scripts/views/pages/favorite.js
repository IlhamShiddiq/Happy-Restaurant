/* eslint-disable linebreak-style */

import FavoriteRestaurantIdb from '../../data/database';

const Favorite = {
  async render() {
    return `
            <div class="load-container">
                <div class="load-indicator">
                    <div class="load-item" id="load-1"></div>
                    <div class="load-item" id="load-2"></div>
                    <div class="load-item" id="load-3"></div>
                    <div class="load-item" id="load-4"></div>
                </div>
            </div>
            <div class="content m-auto" id="content">
                <p class="no-entry">Tidak ada daftar</p>
            </div>
        `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const contentContainer = document.querySelector('#content');
    const loadContainer = document.querySelector('.load-indicator');
    const ttileHero = document.querySelector('#title-hero');

    ttileHero.innerHTML = 'Favorite Restaurant';

    if (restaurant.length !== 0) {
      contentContainer.innerHTML = '';
      restaurant.forEach((listRest) => {
        const desc = listRest.description;
        const descLimited = desc.substr(0, 200);

        const listItem = document.createElement('card-item');
        listItem.descLimited = descLimited;
        listItem.data = listRest;

        contentContainer.appendChild(listItem);
      });
    }
    loadContainer.innerHTML = '';
  },
};

export default Favorite;
