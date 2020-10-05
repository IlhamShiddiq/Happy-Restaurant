/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */

import CONFIG from '../../globals/config';

class Card extends HTMLElement {
  set data(data) {
    this._data = data;
    this.render();
  }

  set descLimited(descLimited) {
    this._descLimited = descLimited;
  }

  render() {
    this.innerHTML = `
            <div class="item">
                <h1 class="rest-name t-center">${this._data.name}</h1>
                <div class="info-item">
                    <div class="img-item">
                        <img src="${CONFIG.BASE_IMAGE_URL + this._data.pictureId}" alt="${this._data.name}" crossorigin="anonymous">
                        <div class="city white-text">Kota ${this._data.city}</div>
                    </div>
                    <p class="desc">${this._descLimited} ...</p>
                </div>
                <h1 class="rating t-center">&#9733; ${this._data.rating}</h1>
                <div class="t-center">
                    <a href="#/detail/${this._data.id}" class="detail-btn">DETAIL</a>
                </div>
            </div>
        `;
  }
}

customElements.define('card-item', Card);
