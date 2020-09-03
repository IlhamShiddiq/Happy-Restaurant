import data from './../DATA.json';

const get = () => {
    const restData = data.restaurants;
    const wrap = document.querySelector('.content');
    let content = '';

    for(let i = 0; i < data.restaurants.length; i++) {
        let desc = restData[i].description;
        let descLimited = desc.substr(0, 200);
        content += `
                <div class="item">
                    <h1 class="rest-name t-center">${restData[i].name}</h1>
                    <div class="info-item">
                        <div class="img-item">
                            <img src="${restData[i].pictureId}" alt="${restData[i].name}">
                            <div class="city white-text">Kota ${restData[i].city}</div>
                        </div>
                        <p class="desc">${descLimited} ...</p>
                    </div>
                    <h1 class="rating t-center">&#9733; ${restData[i].rating}</h1>
                </div>
        `;
    }
    
    wrap.innerHTML = content;
}

export default get;