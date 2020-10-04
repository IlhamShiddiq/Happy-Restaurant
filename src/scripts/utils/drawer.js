/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-newline */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */

const DrawerInitiator = {
    init({ item, button, drawer, overlay, close, body }) {
        item.forEach((navitem) => {
            navitem.addEventListener('click', (event) => {
                drawer.classList.remove('open');
                overlay.classList.remove('show');
                body.classList.remove('of-hidden');
            });
        });

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
