/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-console */
/* eslint-disable indent */

import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import { detailTemplate, categoryTemplate, foodsTemplate, reviewTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
            <div class="detail-container">
                
            </div>
            <div class="detail-reviews white-text">
                <h1 class="t-center title-review">Apa Kata Orang?</h1>
                <div class="button-review text-center">
                    <a class="btn-review" href="#/add-review">Add Review</a>
                </div>
                <div id="review-list">
                    
                </div>
            </div>
            
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantsSource.detailRestaurant(url.id);

        const detailContainer = document.querySelector('.detail-container');
        const reviewContainer = document.querySelector('#review-list');

        let category = '';
        let foods = '';
        let drinks = '';
        console.log(restaurant.restaurant);

        restaurant.restaurant.categories.forEach((categori) => {
            category += categoryTemplate(categori);
        });
        restaurant.restaurant.menus.foods.forEach((food) => {
            foods += foodsTemplate(food);
        });
        restaurant.restaurant.menus.drinks.forEach((drink) => {
            drinks += foodsTemplate(drink);
        });
        restaurant.restaurant.consumerReviews.forEach((review) => {
            reviewContainer.innerHTML += reviewTemplate(review);
        });

        detailContainer.innerHTML = detailTemplate(restaurant.restaurant, category, foods, drinks);
    },
};

export default Detail;
