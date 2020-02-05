// Кнопка скрытого меню
const btnHideMenu = document.getElementById("btn-hide-menu");

// Скрытое выпадающее меню
const hideMenu = document.querySelector(".hidden-menu");

//Выпадающее меню
btnHideMenu.addEventListener('click', (event) => {
	hideMenu.classList.toggle("hidden-menu-animation");
});