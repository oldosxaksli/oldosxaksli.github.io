let text = document.querySelectorAll(".content-metabolism__text");
let title = document.querySelectorAll(".content-metabolism__title, .content-metabolism__h3-title");
let inputAge = document.querySelector(".input-age");
let inputHeight = document.querySelector(".input-height");
let inputMassa = document.querySelector(".input-massa");
let inputSelect = document.querySelector(".input-select");
let submit = document.querySelector(".submit");
let bgMetabolism = document.querySelector(".calc-metabolism");
let listBgImages = [
	"../img/bg/bg-run2.jpg",
	"../img/bg/bg_motosport.jpg",
	"../img/bg/bg-velosport.jpg"	
];

bgMetabolism.style.backgroundImage = `url(${listBgImages[1]})`;

for (let i = 0; i < title.length; i++) {
	title[i].addEventListener('mouseover', () => {
	title[i].classList.add("title"); 
	});
}

for (let i = 0; i < title.length; i++) {
	title[i].addEventListener('mouseout', () => {
	title[i].classList.remove("title");
	});
}

for (let i = 0; i < text.length; i++) {
	text[i].addEventListener('mouseover', () => {
	text[i].classList.add("up-text"); 
	});
}

for (let i = 0; i < text.length; i++) {
	text[i].addEventListener('mouseout', () => {
	text[i].classList.remove("up-text"); 
	});
}