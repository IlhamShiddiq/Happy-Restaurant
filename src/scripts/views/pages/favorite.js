/* eslint-disable linebreak-style */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable indent */

import FavoriteRestaurantIdb from '../../data/database';
import { restaurantTemplate } from '../../views/templates/template-creator';

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
            
            </div>
        `;
    },

    async afterRender() {
        const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
        const contentContainer = document.querySelector('#content');
        const loadContainer = document.querySelector('.load-indicator');

        restaurant.forEach((item) => {
            contentContainer.innerHTML += restaurantTemplate(item);
        });
        loadContainer.innerHTML = '';
    },
};

export default Favorite;
