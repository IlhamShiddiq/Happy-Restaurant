/* eslint-disable linebreak-style */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable quote-props */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable no-console */

import CONFIG from './../globals/config';
import Detail from './../views/pages/detail';

const addReview = async (data) => {
    const datas = {
        'id': data.id,
        'name': data.name,
        'review': data.review,
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': '12345',
        },
        body: JSON.stringify(datas),
    };

    await fetch(CONFIG.URL_ADD_REVIEW, options)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson.message);
        Detail.renderAfterAddReview();
    })
    .catch((error) => {
        console.log(error);
    });
};

export default addReview;
