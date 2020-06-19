import './display.css';

const renderItems = items => {
    let ret = '';
    items.forEach(it => {
        ret += `<div class="item">
                    <img src="${it.images[0].url}" alt="${it.title}" title="${it.title}" />
                </div>`;
    });
    return ret;
}


const Display = params => {
    const html = `<section class="categories">
                        <span>${params.title}</span>
                        <div class="itens">
                            ${renderItems(params.items)}
                        </div>
                </section>`;

    document.querySelector("#displays").innerHTML += html;
}

export default Display;