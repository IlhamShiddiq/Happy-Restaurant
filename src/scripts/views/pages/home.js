/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable indent */

import RestaurantsSource from '../../data/restaurants-source';
import { restaurantTemplate, moreInfo } from '../templates/template-creator';
import info from '../../../more-data.json';

const Home = {
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
            <div class="sub-hero">
                <div class="sub-hero-img m-auto" id="sub-hero-img">
                    
                </div>
            </div>
            <div class="content m-auto" id="content">
                
            </div>
            <div class="button-review text-center">
                <a class="btn-review" href="#/add-review">Add Review</a>
            </div>
            <div class="imgs">
                <div class="sub-imgs m-auto"></div>
                <div class="note white-text m-auto t-center"><span class="quote">"</span> Invariably the food is tasty and well prepared. The fare is appropriate for the price point and market it’s aimed at. It’s essential that patrons feel they’ve had a good, enjoyable meal. <span class="quote">"</span></div>
            </div>
        `;
    },

    async afterRender() {
        const wrap = document.querySelector('#sub-hero-img');
        const infonya = info.info;
        const listContainer = document.querySelector('#content');
        const loadContainer = document.querySelector('.load-indicator');

        const lists = await RestaurantsSource.ListRestaurants();
        console.log(lists);

        infonya.forEach((infoMore) => {
            wrap.innerHTML += moreInfo(infoMore);
        });
        lists.forEach((list) => {
            listContainer.innerHTML += restaurantTemplate(list);
        });
        loadContainer.innerHTML = '';
    },
};

export default Home;
