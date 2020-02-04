// Кнопка для появления/скрытия строки поиска
const btnSearch = document.querySelector(".header-page-menu__search-link");
// Скрытый инпут для поиска
const searchInput = document.querySelector(".outside-hidden-search");
//Появление инпута поиска
btnSearch.addEventListener('click', () => {
	searchInput.classList.toggle("hidden-search-animation");
});