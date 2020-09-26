/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable indent */

import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';

const Detail = {
    async render() {
        return `
            <div class="content m-auto">
                AAA
            </div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantsSource.detailRestaurant(url.id);
        console.log(restaurant.restaurant);
    },
};

export default Detail;
