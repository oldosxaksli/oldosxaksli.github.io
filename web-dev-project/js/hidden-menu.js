// Кнопка скрытого меню
const btnHideMenu = document.getElementById("btn-hide-menu");

// Скрытое выпадающее меню
const hideMenu = document.querySelector(".hidden-menu");

// Ссылки в скрытом выпадающем меню
const allLinksScrollHiddenCopy = document.querySelectorAll(".js-link-scroll-hidden");

//Выпадающее меню
btnHideMenu.addEventListener('click', (event) => {
	hideMenu.classList.toggle("hidden-menu-animation");
});

// Прячем выпадающее меню при клике по ссылке
for (let i = 0; i < allLinksScrollHiddenCopy.length; i++) {
	allLinksScrollHiddenCopy[i].addEventListener('click', (event) => {
		hideMenu.classList.remove("hidden-menu-animation");
	});
}

// Прячем меню при изменении ширины экрана
window.addEventListener('resize', (event) => {
	hideMenu.classList.remove("hidden-menu-animation");
});