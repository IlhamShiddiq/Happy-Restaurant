/* eslint-disable comma-dangle */
/* eslint-disable import/no-extraneous-dependencies */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader?url=false',
          },
        ],
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
        {
          from: path.resolve(__dirname, 'src/font/'),
          to: path.resolve(__dirname, 'dist/font/'),
        },
      ],
    }),
    new WebpackPwaManifest({
      name: 'HappyRestaurant - Restaurant Catalogue',
      short_name: 'HappyRestaurant',
      description: 'All about great restaurants',
      start_url: '/index.html',
      display: 'standalone',
      background_color: '#ffffff',
      crossorigin: 'use-credentials',
      theme_color: '#d84315',
      icons: [
        {
          src: path.resolve('src/public/images/happy-restaurant.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('icons', 'android')
        },
      ]
    }),
    new ServiceWorkerWebpackPlugin({
      entry: path.resolve(__dirname, 'src/scripts/service-worker/sw.js'),
    }),
    new InjectManifest({
      swSrc: './src/scripts/service-worker/sw.js',
    }),
  ],
};
