//Получаем все ссыки
let allLink = document.querySelectorAll(".header-page-menu__link");
//Массив где будут лежать все ссылки
let allLinks = new Array();
//Добавляем ссылки в массив
for (let i = 0; i < allLink.length; i++) {
	allLinks.push(allLink[i]);
}
//Переменные для секция
const about = document.getElementById("about");
const focus = document.getElementById("focus");
const portfolio = document.getElementById("portfolio");
const team = document.getElementById("team");
const work = document.getElementById("work");
const pricing = document.getElementById("pricing");
const testimonials = document.getElementById("testimonials");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact");
//Добавляем секции в массив
let allSection = new Array();
allSection.push(about);
allSection.push(focus);
allSection.push(portfolio);
allSection.push(team);
allSection.push(work);
allSection.push(pricing);
allSection.push(testimonials);
allSection.push(blog);
allSection.push(contact);
//Кликаем по ссылке и сработает скролл к секции
allSection.forEach((item, i, arr) => {
	allLinks[i].addEventListener('click', (event) => {
		allSection[i].scrollIntoView({behavior:'smooth'});
		console.log(allSection[i]);
	});
});