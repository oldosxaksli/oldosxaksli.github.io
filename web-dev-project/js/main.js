// About кнопка пролистать вниз
const btnDown = document.getElementById("btn__scroll-down");

// Кнопка скрытого меню
const btnHideMenu = document.getElementById("btn-hide-menu");

// Кнопка для появления/скрытия строки поиска
const btnSearch = document.querySelector(".header-page-menu__search-link");

// Скрытый инпут для поиска
const searchInput = document.querySelector(".outside-hidden-search");

// Скрытое выпадающее меню
const hideMenu = document.querySelector(".hidden-menu");

// Кнопки фильтры
const all = document.getElementById("all");
const webDesign = document.getElementById("web-design");
const uiUx = document.getElementById("ui-ux");
const mockups = document.getElementById("mockups");
const viewAll = document.getElementById("view-all");
// Кнопки фильтры

// Блоки works
const jsOneWorks = document.querySelectorAll(".js-one-works");
const jsTwoWorks = document.querySelectorAll(".js-two-works");
const jsThreeWorks = document.querySelectorAll(".js-three-works");
// Блоки works

// Массив для фильтруемых блоков works
const allInnerBlock = new Array();
allInnerBlock.push(jsOneWorks);
allInnerBlock.push(jsTwoWorks);
allInnerBlock.push(jsThreeWorks);
// Массив для фильтруемых блоков works

// Кнопки для появления всех скрытых блоков
all.addEventListener('click', (event) => {
	for (let i = 0; i < allInnerBlock.length; i++) {
		for (let count = 0; count < allInnerBlock[i].length; count++) {
			allInnerBlock[i][count].style.display = "block"
			webDesign.style.opacity = "1";
			uiUx.style.opacity = "1";
			mockups.style.opacity = "1";
			setTimeout(()=> {
				allInnerBlock[i][count].style.opacity = "1";
				allInnerBlock[i][count].style.transform = "scale(1, 1)";
			}, 500);
		}
	}
});
viewAll.addEventListener('click', (event) => {
	for (let i = 0; i < allInnerBlock.length; i++) {
		for (let count = 0; count < allInnerBlock[i].length; count++) {
			allInnerBlock[i][count].style.display = "block"
			webDesign.style.opacity = "1";
			uiUx.style.opacity = "1";
			mockups.style.opacity = "1";
			setTimeout(()=> {
				allInnerBlock[i][count].style.opacity = "1";
				allInnerBlock[i][count].style.transform = "scale(1, 1)";
			}, 500);
		}
	}
});
// Кнопки для появления всех скрытых блоков

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
btnDown.addEventListener('click', () => {
	about.scrollIntoView({behavior:'smooth'});
});
//Кнопка пролистывания вниз

// Контейнеры для скорлла по якорям
let home = document.querySelector(".section-title");
let about = document.querySelector(".about");
let services = document.querySelector(".services");
let portfolio = document.querySelector(".works");
let blog = document.querySelector(".blog");
let contactUs = document.querySelector(".contact");
// Контейнеры для скорлла по якорям

// Массив хранящиц контейнеры для скролла по якорям
const allContainerScroll = new Array();
allContainerScroll.push(home);
allContainerScroll.push(about);
allContainerScroll.push(services);
allContainerScroll.push(portfolio);
allContainerScroll.push(blog);
allContainerScroll.push(contactUs);
// Массив хранящиц контейнеры для скролла по якорям

// Ссылки в шапке
let allLinksScroll = document.querySelectorAll(".js-link-scroll");
// Ссылки в шапке

// Ссылки в скрытом меню
let allLinksScrollHidden = document.querySelectorAll(".js-link-scroll-hidden");
// Ссылки в скрытом меню

// Скролл от ссылок в header к соответсвующим контейнерам
for (let i = 0; i < allLinksScroll.length; i++) {
	allLinksScroll[i].addEventListener('click', (event) => {
		allContainerScroll[i].scrollIntoView({behavior:'smooth'});
	});
}

// Скролл для скрытого выпадающего меню
for (let i = 0; i < allLinksScrollHidden.length; i++) {
	allLinksScrollHidden[i].addEventListener('click', (event) => {
		allContainerScroll[i].scrollIntoView({behavior:'smooth'});
	});
}
// Скролл от ссылок в header к соответсвующим контейнерам