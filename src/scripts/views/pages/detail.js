/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable object-shorthand */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-console */
/* eslint-disable indent */

import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';
import { detailTemplate, categoryTemplate, foodsTemplate, reviewTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import addReview from './../../utils/add-review';

const Detail = {
    async render() {
        return `
            <div class="detail-container">
                <div class="load-indicator">
                    <div class="load-item" id="load-1"></div>
                    <div class="load-item" id="load-2"></div>
                    <div class="load-item" id="load-3"></div>
                    <div class="load-item" id="load-4"></div>
                </div>
            </div>
            <div class="content-add-review m-auto">
                <div class="form-wrapper">
                    <div class="title-add-review">
                        <h1>Add Review</h1>
                    </div>
                    <form>
                        <div cLass="form-group">
                            <input type="text" class="input" id="name" placeholder="Input name.." autocomplete="off">
                        </div>
                        <div cLass="form-group">
                            <div class="label">
                                <label>Review</label>
                            </div>
                            <textarea class="input" id="review" rows="3" autocomplete="off"></textarea>
                        </div>
                        <div cLass="form-group review-btn">
                            <div class="line-button">
                                <button class="btn-review" id="btn-add-review">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="detail-reviews white-text">
                <h1 class="t-center title-review">Apa Kata Orang?</h1>
                <div id="review-list">
                    
                </div>
            </div>
            <div id="likeButtonContainer"></div>
            
        `;
    },

    async renderAfterAddReview() {
        const reviewContainer = document.querySelector('#review-list');
        reviewContainer.innerHTML = '';
        this.afterRender();
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantsSource.detailRestaurant(url.id);

        const detailContainer = document.querySelector('.detail-container');
        const reviewContainer = document.querySelector('#review-list');
        const btnReview = document.querySelector('#btn-add-review');

        let category = '';
        let foods = '';
        let drinks = '';
        console.log(restaurant.restaurant);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: restaurant.restaurant.id,
                pictureId: restaurant.restaurant.pictureId,
                name: restaurant.restaurant.name,
                categories: restaurant.restaurant.categories,
                description: restaurant.restaurant.description,
                menus: restaurant.restaurant.menus,
                consumerReviews: restaurant.restaurant.consumerReviews,
                city: restaurant.restaurant.city,
                rating: restaurant.restaurant.rating,
            },
        });

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

        btnReview.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const reviewUser = document.getElementById('review').value;

            addReview({ id: restaurant.restaurant.id, name: name, review: reviewUser });
        });
    },
};

export default Detail;
