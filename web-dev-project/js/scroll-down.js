// About кнопка пролистать вниз
const btnDown = document.getElementById("btn__scroll-down");
// Контейнер About до него пролистывается при нажатии на стрелку
const aboutOn = document.querySelector(".about");
//Кнопка-стрелка пролистывания вниз
btnDown.addEventListener('click', () => {
	aboutOn.scrollIntoView({behavior:'smooth'});
});