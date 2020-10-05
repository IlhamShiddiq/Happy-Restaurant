/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable no-underscore-dangle */

import DrawerInitiator from '../utils/drawer';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ item, button, drawer, content, overlay, close, body }) {
    this._item = item;
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._overlay = overlay;
    this._close = close;
    this._body = body;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      item: this._item,
      button: this._button,
      drawer: this._drawer,
      overlay: this._overlay,
      close: this._close,
      body: this._body,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
