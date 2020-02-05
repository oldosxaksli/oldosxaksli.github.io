// Контейнеры для скорлла по якорям
const home = document.querySelector(".section-title");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const portfolio = document.querySelector(".works");
const blog = document.querySelector(".blog");
const contactUs = document.querySelector(".contact");

// Ссылки в шапке
const allLinksScroll = document.querySelectorAll(".js-link-scroll");

// Ссылки в  шапке для скрытом меню
const allLinksScrollHidden = document.querySelectorAll(".js-link-scroll-hidden");

// Массив хранящиц контейнеры для скролла по якорям
const allContainerScroll = new Array();
allContainerScroll.push(home);
allContainerScroll.push(about);
allContainerScroll.push(services);
allContainerScroll.push(portfolio);
allContainerScroll.push(blog);
allContainerScroll.push(contactUs);

// Скролл от ссылок в header к соответсвующим контейнерам
allContainerScroll.forEach((item, i, arr) => {
	allLinksScroll[i].addEventListener('click', (event) => {
		allContainerScroll[i].scrollIntoView({behavior:'smooth'});
	});
});

// // Скролл от ссылок в header к соответсвующим контейнерам для скрытого меню
allContainerScroll.forEach((item, i, arr) => {
	allLinksScrollHidden[i].addEventListener('click', (event) => {
		allContainerScroll[i].scrollIntoView({behavior:'smooth'});
	});
});