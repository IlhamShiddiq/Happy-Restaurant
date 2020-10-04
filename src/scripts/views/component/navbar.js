/* eslint-disable linebreak-style */
/* eslint-disable indent */

class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav id="drawer" class="nav">
                <div class="name">
                    <h1 class="white-text brand-name">HappyRestaurant</h1>
                </div>
                <ul class="nav-list">
                    <li class="close"><a href="#" id="close">X</a></li>
                    <li class="nav-item" id="nav-item-1"><a class="white-text" href="#/home"><span class="andro-icon"><i class="fas fa-home"></i></span> &nbsp;Home</a></li>
                    <li class="nav-item" id="nav-item-2"><a class="white-text" href="#/about-us"><span class="andro-icon"><i class="far fa-id-badge"></i></span> &nbsp;&nbsp;About Us</a></li>
                    <li class="nav-item" id="nav-item-3"><a class="white-text" href="#/favorite"><span class="andro-icon"><i class="fas fa-heart"></i></span> &nbsp;Favorite</a></li>
                </ul>
            </nav>
        `;
    }
}

customElements.define('nav-bar', Navbar);
