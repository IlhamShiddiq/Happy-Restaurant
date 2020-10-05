/* eslint-disable linebreak-style */
/* eslint-disable no-console */

import API_ENDPOINT from '../globals/api-endpoints';

class RestaurantsSource {
  static async ListRestaurants() {
    const lists = await fetch(API_ENDPOINT.LIST)
      .then((response) => response.json())
      .then((responseJson) => responseJson.restaurants)
      .catch((error) => {
        console.log(error);
      });

    return lists;
  }

  static async detailRestaurant(id) {
    const resp = await fetch(API_ENDPOINT.DETAIL(id))
      .then((response) => response.json())
      .then((responseJson) => responseJson.restaurant)
      .catch((error) => {
        console.log(error);
      });

    return resp;
  }
}

export default RestaurantsSource;
