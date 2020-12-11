/* eslint-disable linebreak-style */

import CONFIG from '../../globals/config';

const categoryTemplate = (restaurant) => `
                                    <div class="list-kategori d-inline-block">${restaurant.name}</div>
`;

const foodsTemplate = (food) => `
                                <tr> <td>&#9900; ${food.name}</td> </tr>
`;

const reviewTemplate = (review) => `
                                <div class="list-review">
                                    <p class="nama-review">${review.name}</p>
                                    <p class="detail-desc">${review.review}</p>
                                    <p class="waktu-review"><i class="far fa-clock"></i> ${review.date}</p>
                                </div>
`;

const detailTemplate = (restaurant, kategori, foods, drinks) => `
                                <div class="detail m-auto">
                                    <div class="restaurant-photo t-center">
                                        <div class="detail-photo">
                                            <img src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" crossorigin="anonymous">
                                            <div class="detail-rate">
                                                &#9733; ${restaurant.rating}
                                            </div>
                                            <div class="detail-address white-text">
                                                <p><i class="fas fa-map-marker-alt"></i> &nbsp;${restaurant.address}, ${restaurant.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="info-restaurant white-text">
                                        <h1 class="detail-rest-name">${restaurant.name}</h1>
                                        <div class="kategori">
                                            ${kategori}
                                        </div>
                                        <p class="detail-desc">
                                        ${restaurant.description} </p>
                                    </div>
                                    <div class="foods-menu menus white-text">
                                        <table cellpadding="8">
                                            <tr> <td><h1 class="title-menu"><i class="fas fa-hamburger"></i> Food Menus<h1></td> </tr>
                                            ${foods}
                                        </table>
                                    </div>
                                    <div class="drinks-menu menus white-text">
                                        <table cellpadding="8">
                                            <tr> <td><h1 class="title-menu"><i class="fas fa-coffee"></i> Drink Menus<h1></td> </tr>
                                            ${drinks}
                                        </table>
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

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" class="btn-like" id="likeButton">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" class="btn-like" id="likeButton">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  detailTemplate,
  moreInfo,
  categoryTemplate,
  foodsTemplate,
  reviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
