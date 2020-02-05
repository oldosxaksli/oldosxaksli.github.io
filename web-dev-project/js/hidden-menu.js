// Кнопка скрытого меню
const btnHideMenu = document.getElementById("btn-hide-menu");

// Скрытое выпадающее меню
const hideMenu = document.querySelector(".hidden-menu");

//Выпадающее меню
btnHideMenu.addEventListener('click', (event) => {
	if (hideMenu.style.display == "block") {
		hideMenu.style.display = "none"
	} else {
		hideMenu.style.display = "block"
		hideMenu.style.opacity = ".97";
	}
});