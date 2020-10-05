/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import RestaurantsSource from '../../data/restaurants-source';
import { moreInfo } from '../templates/template-creator';
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
            <div class="imgs">
                <div class="sub-imgs m-auto"></div>
                <div class="note white-text m-auto t-center"><span class="quote">"</span> Invariably the food is tasty and well prepared. The fare is appropriate for the price point and market it’s aimed at. It’s essential that patrons feel they’ve had a good, enjoyable meal. <span class="quote">"</span></div>
            </div>
        `;
  },

  async afterRender() {
    const loadContainer = document.querySelector('.load-indicator');
    const wrap = document.querySelector('#sub-hero-img');

    const lists = await RestaurantsSource.ListRestaurants();

    if (lists) {
      this.successRequest(lists, loadContainer, wrap);
    } else {
      this.failedRequest(loadContainer, wrap);
    }
  },

  async successRequest(list, loadCon, wrapCon) {
    const infonya = info.info;
    const lists = list;
    const loadContainer = loadCon;
    const wrap = wrapCon;
    const listContainer = document.querySelector('#content');
    const ttileHero = document.querySelector('#title-hero');

    ttileHero.innerHTML = 'Most Wonderful Restaurant';

    infonya.forEach((infoMore) => {
      wrap.innerHTML += moreInfo(infoMore);
    });
    lists.forEach((listRest) => {
      const desc = listRest.description;
      const descLimited = desc.substr(0, 200);
      console.log(descLimited);

      const listItem = document.createElement('card-item');
      listItem.descLimited = descLimited;
      listItem.data = listRest;

      listContainer.appendChild(listItem);
    });
    loadContainer.innerHTML = '';
  },

  async failedRequest(loadCon, wrapCon) {
    const loadContainer = loadCon;
    const wrap = wrapCon;

    loadContainer.innerHTML = '';
    wrap.innerHTML = '<p class="no-entry">Maaf, request tidak dapat dijalankan karena terdapat kesalahan.</p>';
  },
};

export default Home;
