// About кнопка пролистать вниз
const btnDown = document.getElementById("btn__scroll-down");

// Контейнер Home
let home = document.querySelector(".section-title");

// Контейнер About
let about = document.querySelector(".about");

// Контейнер Sevicing
let services = document.querySelector(".services");

// Контейнер Portfolio
let portfolio = document.querySelector(".works");

// Контейнер Blog
let blog = document.querySelector(".blog");

// Контейнер ContactUs
let contactUs = document.querySelector(".contact");



// Кнопка скрытого меню
const btnHideMenu = document.getElementById("btn-hide-menu");

// Кнопка для появления/скрытия строки поиска
const btnSearch = document.querySelector(".header-page-menu__search-link");

// Скрытый инпут для поиска
const searchInput = document.querySelector(".hidden-search");

// Скрытое выпадающее меню
const hideMenu = document.querySelector(".hidden-menu");

// Кнопки фильтры
const all = document.getElementById("all");
const webDesign = document.getElementById("web-design");
const uiUx = document.getElementById("ui-ux");
const mockups = document.getElementById("mockups");

// Блоки works
let jsOneWorks = document.querySelectorAll(".js-one-works");
let jsTwoWorks = document.querySelectorAll(".js-two-works");
let jsThreeWorks = document.querySelectorAll(".js-three-works");

// Массив для фильтруемых блоков works
let allButtons = new Array();
allButtons.push(jsOneWorks);
allButtons.push(jsTwoWorks);
allButtons.push(jsThreeWorks);

// Кнопка для появления всех скрытых блоков
all.addEventListener('click', (event) => {
	for (let i = 0; i < allButtons.length; i++) {
		for (let count = 0; count < allButtons[i].length; count++) {
			allButtons[i][count].style.display = "block"
			webDesign.style.opacity = "1";
			uiUx.style.opacity = "1";
			mockups.style.opacity = "1";
			setTimeout(()=> {
				allButtons[i][count].style.opacity = "1";
				allButtons[i][count].style.transform = "scale(1, 1)";
			}, 500);
		}
	}
});

// Скрытие при нажатии кнопки фильтра Web Design
webDesign.addEventListener('click', (event) => {
	for (let i = 0; i < jsOneWorks.length; i++) {
		jsOneWorks[i].style.opacity = "0";
		jsOneWorks[i].style.transform = "scale(0, 0)";
		webDesign.style.opacity = ".3";
		setTimeout(() => {
			jsOneWorks[i].style.display = "none";
		}, 500);
	}
});

// Скрытие при нажатии кнопки фильтра UI UX
uiUx.addEventListener('click', (event) => {
	for(let i = 0; i < jsTwoWorks.length; i++) {
		jsTwoWorks[i].style.opacity = "0";
		jsTwoWorks[i].style.transform = "scale(0, 0)";
		uiUx.style.opacity = ".3";
		setTimeout(() => {
			jsTwoWorks[i].style.display = "none";
		}, 500);
	}
});

// Скрытие при нажатии кнопки фильтра Mockups
mockups.addEventListener('click', (event) => {
	for (let i = 0; i < jsThreeWorks.length; i++) {
		jsThreeWorks[i].style.opacity = "0";
		jsThreeWorks[i].style.transform = "scale(0, 0)";
		mockups.style.opacity = ".3";
		setTimeout(() => {
			jsThreeWorks[i].style.display = "none";
		}, 500);
	}
});

//Появление инпута поиска
btnSearch.addEventListener('click', () => {
	searchInput.classList.toggle("hidden-search-animation");
});
//Появление инпута поиска

//Выпадающее меню
btnHideMenu.addEventListener('click', () => {
	if (hideMenu.style.display == "block") {
		hideMenu.style.display = "none"
	} else {
		hideMenu.style.display = "block"
		hideMenu.style.opacity = "1";
	}
});
//Выпадающее меню

//Кнопка-стрелка пролистывания вниз
// btnDown.addEventListener('click', () => {
// 	about.scrollIntoView({behavior:'smooth'});
// });
//Кнопка пролистывания вниз

// Ссылки в шапке
let btnHome = document.getElementById("home");
// Ссылки в шапке

// Скролл от ссылок в header к соответсвующим контейнерам
btnHome.addEventListener('click', (event) => {
	home.scrollIntoView();
});
// Скролл от ссылок в header к соответсвующим контейнерам