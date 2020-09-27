/* eslint-disable linebreak-style */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-console */
/* eslint-disable indent */

import UrlParser from '../../routes/url-parser';
import RestaurantsSource from '../../data/restaurants-source';

const Detail = {
    async render() {
        return `
            <div class="detail m-auto">
                <div class="restaurant-photo t-center">
                    <div class="detail-photo">
                        <img src="images/heros/hero-image_1.jpg">
                        <div class="detail-rate">
                            &#9733; 4,3
                        </div>
                        <div class="detail-address white-text">
                            <p><i class="fas fa-map-marker-alt"></i> &nbsp;Ini alamatnya ada dimana</p>
                        </div>
                    </div>
                </div>
                <div class="info-restaurant white-text">
                    <h1 class="detail-rest-name">Nama Restoran</h1>
                    <div class="kategori">
                        <div class="list-kategori d-inline-block">Jawa</div>
                        <div class="list-kategori d-inline-block">Sup</div>
                    </div>
                    <p class="detail-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad id sed ratione vel omnis suscipit quibusdam aut repellat? Veniam quia recusandae omnis minima numquam, architecto neque cumque facilis corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ad id sed ratione vel omnis suscipit quibusdam aut repellat? Veniam quia recusandae omnis minima numquam, architecto neque cumque facilis corporis. </p>
                </div>
                <div class="foods-menu menus white-text">
                    <table cellpadding="8">
                        <tr> <td><h1 class="title-menu"><i class="fas fa-hamburger"></i> Food Menus<h1></td> </tr>
                        <tr> <td>&#9900; Food Menus</td> </tr>
                        <tr> <td>&#9900; Food Menus</td> </tr>
                        <tr> <td>&#9900; Food Menus</td> </tr>
                        <tr> <td>&#9900; Food Menus</td> </tr>
                        <tr> <td>&#9900; Food Menus</td> </tr>
                    </table>
                </div>
                <div class="drinks-menu menus white-text">
                    <table cellpadding="8">
                        <tr> <td><h1 class="title-menu"><i class="fas fa-coffee"></i> Drink Menus<h1></td> </tr>
                        <tr> <td>&#9900; Drink Menus</td> </tr>
                        <tr> <td>&#9900; Drink Menus</td> </tr>
                        <tr> <td>&#9900; Drink Menus</td> </tr>
                        <tr> <td>&#9900; Drink Menus</td> </tr>
                        <tr> <td>&#9900; Drink Menus</td> </tr>
                    </table>
                </div>
            </div>
            <div class="detail-reviews white-text">
                <h1 class="t-center title-review">Apa Kata Orang?</h1>
                <div class="button-review text-center">
                    <a class="btn-review" href="#/add-review">Add Review</a>
                </div>
                <div class="list-review">
                    <p class="nama-review">Nama Orang</p>
                    <p class="detail-desc">Apa cenah Apa cenah Apa cenah Apa cenah</p>
                    <p class="waktu-review"><i class="far fa-clock"></i> 27 September 2020</p>
                </div>
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
