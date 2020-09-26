/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */

const DrawerInitiator = {
    init({ button, drawer, overlay, close, body }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(event, drawer, overlay, body);
        });

        overlay.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer, overlay, body);
        });

        close.addEventListener('click', (event) => {
            this._closeDrawer(event, drawer, overlay, body);
        });
    },

    _toggleDrawer(event, drawer, overlay, body) {
        event.stopPropagation();
        drawer.classList.toggle('open');
        overlay.classList.toggle('show');
        body.classList.toggle('of-hidden');
    },

    _closeDrawer(event, drawer, overlay, body) {
        event.stopPropagation();
        drawer.classList.remove('open');
        overlay.classList.remove('show');
        body.classList.remove('of-hidden');
    },
};

export default DrawerInitiator;
