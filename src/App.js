import { getDataFromServer } from './core/server-request';
import Highlights from './components/highlights/highlights';
import Display from './components/display/display';

const App = {
    data: null,
    fontSize: 1,
    init() {
        if (eval(localStorage.getItem('isDark'))) document.body.classList.add('dark');
        this.getData();
        this.configEvents();
    },
    async getData() {
        const data = await getDataFromServer();
        this.data = data;
        this.fillPage();
    },
    fillPage() {
        Highlights.init("#highlights", this.data.filter(it => it.type === "highlights")[0]);

        const movies = this.data.filter(it => it.type === "carousel-portrait")[0].movies;
        const categories = this.separeCategories(movies);
        categories.forEach(cat => {
            let moviesFromCat = movies.filter(m => {
                return m.categories.split(', ').includes(cat);
            });
            Display({ items: moviesFromCat, title: cat });
        });
    },
    separeCategories(data) {
        let categories = [];
        data.map(movie => {
            categories = [
                ...categories,
                ...movie.categories.split(", ")
            ]
        });
        return categories.filter((a, b) => categories.indexOf(a) === b);
    },
    configEvents() {
        const btMenuMobile = document.querySelector("#bt-menu-mobile");
        const menu = document.querySelector("#menu");
        const body = document.body;
        btMenuMobile.addEventListener('click', evt => {
            const isOpened = btMenuMobile.classList.contains('opened');
            if (isOpened) {
                btMenuMobile.classList.remove('opened');
                menu.classList.remove('opened');
                body.classList.remove('fixed');
            } else {
                btMenuMobile.classList.add('opened');
                menu.classList.add('opened');
                body.classList.add('fixed');
            }
        });

        const btsChangeTheme = document.querySelectorAll("[changeTheme]");
        for (const btChangeTheme of btsChangeTheme) {
            btChangeTheme.addEventListener("click", () => {
                this.changeTheme();
            })
        }

        const btsFontPlus = document.querySelectorAll("[fontPlus]");
        for (const btFontPlus of btsFontPlus) {
            btFontPlus.addEventListener("click", () => {
                if (this.fontSize > 1.5) return;
                this.fontSize += .15;
                document.body.style.fontSize = `${this.fontSize}em`;
            });
        }

        const btsFontLess = document.querySelectorAll("[fontLess]");
        for (const btFontLess of btsFontLess) {
            btFontLess.addEventListener("click", () => {
                if (this.fontSize < .8) return;
                this.fontSize -= .15;
                document.body.style.fontSize = `${this.fontSize}em`;
            });
        }

        const linksFooterMobile = document.querySelectorAll("footer .footer-content .infos li.title");
        for (const link of linksFooterMobile) {
            link.addEventListener("click", function () {
                const ulParent = this.parentElement;
                if (ulParent.classList.contains('opened')) {
                    ulParent.classList.remove('opened');
                } else {
                    ulParent.classList.add('opened');
                }
            })
        }
    },
    changeTheme() {
        const body = document.body;
        const isDark = body.classList.contains('dark');
        if (isDark) {
            body.classList.remove('dark');
            localStorage.setItem('isDark', false);
        } else {
            body.classList.add('dark');
            localStorage.setItem('isDark', true);
        }
    }
}

window.addEventListener('load', () => {
    App.init();
});