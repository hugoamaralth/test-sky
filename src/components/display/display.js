import { TweenMax, Circ } from 'gsap';
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
    const section = document.createElement('section');
    const next = `<div class="bt" nextDisplay="${params.id}"><i class="fas fa-chevron-right"></i></div>`;
    const prev = `<div class="bt disabled" prevDisplay="${params.id}"><i class="fas fa-chevron-left"></i></div>`;

    section.className = "categories";
    section.setAttribute('displayId', params.id);
    section.innerHTML = next + prev;
    section.innerHTML += `
                        <span>${params.title}</span>
                        <div class="itens">
                            ${renderItems(params.items)}
                        </div>`;
    document.querySelector("#displays").append(section);

    const pixelsToScroll = 250;

    const buttonRight = document.querySelector('[nextDisplay="' + params.id + '"]');
    const buttonLeft = document.querySelector('[prevDisplay="' + params.id + '"]');
    buttonRight.addEventListener('click', function () {
        const element = document.querySelector('[displayId="'+this.getAttribute('nextDisplay')+'"] .itens');
        const scroll = element.scrollLeft + pixelsToScroll;
        const current = element.scrollLeft;
        TweenMax.to(element, .3, {scrollLeft:scroll, ease:Circ.easeOut, onComplete:()=>{
            if(element.scrollLeft > 0){
                document.querySelector('[prevDisplay="' + this.getAttribute('nextDisplay') + '"]').classList.remove('disabled');
            }
            if(element.scrollLeft - current < pixelsToScroll){
                this.classList.add('disabled');
            }
        }});
    })
    
    buttonLeft.addEventListener('click', function () {
        if(this.classList.contains('disabled')) return;
        const element = document.querySelector('[displayId="'+this.getAttribute('prevDisplay')+'"] .itens');
        const scroll = element.scrollLeft - pixelsToScroll;
        TweenMax.to(element, .3, {scrollLeft:scroll, ease:Circ.easeOut, onComplete:()=>{
            if(element.scrollLeft === 0){
                this.classList.add('disabled');
            }
            document.querySelector('[nextDisplay="' + this.getAttribute('prevDisplay') + '"]').classList.remove('disabled');            
        }});
    })

}

export default Display;