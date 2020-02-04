// Контейнеры для скорлла по якорям
const home = document.querySelector(".section-title");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const portfolio = document.querySelector(".works");
const blog = document.querySelector(".blog");
const contactUs = document.querySelector(".contact");

// Ссылки в шапке
const allLinksScroll = document.querySelectorAll(".js-link-scroll");

// Ссылки в скрытом меню
const allLinksScrollHidden = document.querySelectorAll(".js-link-scroll-hidden");

// Массив хранящиц контейнеры для скролла по якорям
let allContainerScroll = new Array();
allContainerScroll.push(home);
allContainerScroll.push(about);
allContainerScroll.push(services);
allContainerScroll.push(portfolio);
allContainerScroll.push(blog);
allContainerScroll.push(contactUs);

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