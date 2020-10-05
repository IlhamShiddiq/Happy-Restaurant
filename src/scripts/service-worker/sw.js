/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */

import CONFIG from '../globals/config';

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, StaleWhileRevalidate } = workbox.strategies;
const { ExpirationPlugin } = workbox.expiration;
const { precacheAndRoute } = workbox.precaching;
const { setCacheNameDetails, skipWaiting, clientsClaim } = workbox.core;

// Skipping default service worker lifecycle
skipWaiting();
clientsClaim();

// App Shell cache
setCacheNameDetails(CONFIG.CACHE_NAME);
precacheAndRoute(self.__WB_MANIFEST, {
  ignoreUrlParametersMatching: [/.*/],
});

// Image cache
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'image-cache',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 7 * 24 * 60 * 60,
      }),
    ],
  }),
);

// API data cache
registerRoute(
  ({ url }) => url.origin,
  new StaleWhileRevalidate({
    cacheName: 'cache',
  }),
);
