import info from './../more-data.json';

const getInfo = () => {
    const infoData = info.info;
    const wrap = document.querySelector('#sub-hero-img');
    let content = '';

    for(let i = 0; i < infoData.length; i++) {
        content += `
                <div class="img-sub-hero">
                    <div class="img-hero-item" id="i-hero-2">
                        <img src="${infoData[i].img}" alt="">
                    </div>
                    <h1 class="white-text">${infoData[i].name}</h1>
                    <p class="white-text">${infoData[i].desc}</p>
                </div>
        `;
    }
    
    wrap.innerHTML = content;
}

export default getInfo;