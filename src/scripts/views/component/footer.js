/* eslint-disable linebreak-style */

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <footer class="white-text t-center">
                Copyright © 2020 - Happy Restaurant
            </footer>
        `;
  }
}

customElements.define('footer-tag', Footer);
