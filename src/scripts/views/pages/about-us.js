/* eslint-disable linebreak-style */
/* eslint-disable indent */

const AboutUs = {
    async render() {
        return `
            <div class="about-us">
                    <div class="my-photo t-center">
                        <img src="images/me.png" width="185">
                    </div>
                    <div class="about-me white-text t-center">
                        <p class="about">Hai, nama saya Ilham Shiddiq. Saya adalah seorang pelajar kelas 12 yang sekarang bersekolah di SMK Negeri 1 Kota Cimahi jurusan Rekayasa Perangkat Lunak. Saya tinggal di Kota Cimahi. Cita-cita saya kelak yaitu ingin menjadi seorang fullstack yang handal dan proffesional.</p>
                        <p class="find-me">Find me</p>
                        <div class="my-socmed">
                            <a href="https://www.instagram.com/ilham_shiddiq373/" target="_blank" rel="noopener"><div class="socmed instagram white-text d-inline-block"><i class="fab fa-instagram"></i></div></a>
                            <a href="https://github.com/IlhamShiddiq" target="_blank" rel="noopener"><div class="socmed github white-text d-inline-block"><i class="fab fa-github"></i></div></a>
                            <a href="https://www.linkedin.com/in/ilham-shiddiq-63858a1a7" target="_blank" rel="noopener"><div class="socmed linkedin white-text d-inline-block"><i class="fab fa-linkedin-in"></i></div></a>
                            <a href="https://facebook.com/ilham.shiddiq.1" target="_blank" rel="noopener"><div class="socmed facebook white-text d-inline-block"><i class="fab fa-facebook-f"></i></div></a>
                        </div>
                    </div>
                
            </div>
        `;
    },

    async afterRender() {
        const ttileHero = document.querySelector('#title-hero');
        ttileHero.innerHTML = 'About Us';
    },
};

export default AboutUs;
