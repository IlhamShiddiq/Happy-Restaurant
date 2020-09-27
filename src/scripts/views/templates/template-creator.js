/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable no-use-before-define */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

import CONFIG from '../../globals/config';

const detailTemplate = (restaurant) => `
  <h1>ILHAM</h1>
`;

const restaurantTemplate = (restaurant) => {
    let desc = restaurant.description;
    let descLimited = desc.substr(0, 200);
    return item(restaurant, descLimited);
};

const item = (restaurant, descLimited) => `
    <div class="item">
        <h1 class="rest-name t-center">${restaurant.name}</h1>
        <div class="info-item">
            <div class="img-item">
                <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
                <div class="city white-text">Kota ${restaurant.city}</div>
            </div>
            <p class="desc">${descLimited} ...</p>
        </div>
        <h1 class="rating t-center">&#9733; ${restaurant.rating}</h1>
        <div class="t-center">
            <a href="#/detail/${restaurant.id}" class="detail-btn">Detail</a>
        </div>
    </div>
`;

const moreInfo = (info) => `
                <div class="img-sub-hero">
                    <div class="img-hero-item m-auto" id="i-hero-2">
                        <img src="images/info/${info.img}" alt="${info.name}">
                    </div>
                    <h1 class="white-text t-center">${info.name}</h1>
                    <p class="white-text">${info.desc}</p>
                </div>
`;

export { detailTemplate, restaurantTemplate, moreInfo };
