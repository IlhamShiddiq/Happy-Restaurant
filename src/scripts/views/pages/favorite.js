/* eslint-disable linebreak-style */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable indent */

import FavoriteRestaurantIdb from '../../data/database';
import { restaurantTemplate } from '../../views/templates/template-creator';

const Favorite = {
    async render() {
        return `
            <div class="content m-auto" id="content">
                
            </div>
        `;
    },

    async afterRender() {
        const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
        const contentContainer = document.querySelector('#content');
        restaurant.forEach((item) => {
            contentContainer.innerHTML += restaurantTemplate(item);
        });
    },
};

export default Favorite;
