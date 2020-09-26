/* eslint-disable linebreak-style */
/* eslint-disable indent */

const Home = {
    async render() {
        return `
            <div class="sub-hero">
                <div class="sub-hero-img m-auto" id="sub-hero-img">
                    
                </div>
            </div>
            <div class="content m-auto">
                nnn
            </div>
            <div class="imgs">
                <div class="sub-imgs m-auto"></div>
                <div class="note white-text m-auto t-center"><span class="quote">"</span> Invariably the food is tasty and well prepared. The fare is appropriate for the price point and market it’s aimed at. It’s essential that patrons feel they’ve had a good, enjoyable meal. <span class="quote">"</span></div>
            </div>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default Home;
