/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import Home from '../views/pages/home';
import AddReview from '../views/pages/add-review';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': Home,
  '/add-review': AddReview,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/about-us': AboutUs,
};

export default routes;
