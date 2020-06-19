import './highlights.css';

const Highlights = {
    current:0,
    total:0,
    init(element, data) {
        const next = '<div class="bt" nextHigh><i class="fas fa-arrow-circle-right"></i></div>';
        const prev = '<div class="bt" prevHigh><i class="fas fa-arrow-circle-left"></i></div>';
        document.querySelector(element).innerHTML = next + prev;
        const items = data.items;
        let html = '';
        items.forEach((it, i) => {
            html += `<img order="${i+1}" class="${i === 0 ? 'current' : (i === 1 ? 'next' : (i === items.length - 1 ? 'prev' : ''))}" src="${it.images[0].url}" alt="${it.title}" title="${it.title}" />`;
        });
        document.querySelector(element).innerHTML += html;
        this.total = items.length;
        this.configEvents();
    },
    configEvents(){
        const btPrev = document.querySelector('[prevHigh]');
        btPrev.addEventListener('click', ()=>{
            const current = document.querySelector('.highlights img.current');
            const next = document.querySelector('.highlights img.next');
            const prev = document.querySelector('.highlights img.prev');
            
            next.classList.remove('next');

            current.classList.remove('current');
            current.classList.add('next');

            prev.classList.remove('prev');
            prev.classList.add('current');

            let nextPrev = parseInt(prev.getAttribute('order'))-1;
            nextPrev = nextPrev === 0 ? this.total : nextPrev;
            nextPrev = document.querySelector('.highlights img[order="'+nextPrev+'"]');
            nextPrev.classList.add('prev');
            

        });

        const btNext = document.querySelector('[nextHigh]');
        btNext.addEventListener('click', ()=>{
            const current = document.querySelector('.highlights img.current');
            const next = document.querySelector('.highlights img.next');
            const prev = document.querySelector('.highlights img.prev');
            
            current.classList.remove('current');
            current.classList.add('prev');

            prev.classList.remove('prev');
            
            next.classList.remove('next');
            next.classList.add('current');

            let nextNext = parseInt(next.getAttribute('order'))+1;
            nextNext = nextNext > this.total ? 1 : nextNext;
            nextNext = document.querySelector('.highlights img[order="'+nextNext+'"]');
            nextNext.classList.add('next');

        });
    }
}
export default Highlights;