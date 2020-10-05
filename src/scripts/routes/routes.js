/* eslint-disable linebreak-style */

import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/about-us': AboutUs,
};

export default routes;
