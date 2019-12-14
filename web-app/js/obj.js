let text = document.querySelectorAll(".content-metabolism__text");
let title = document.querySelectorAll(".content-metabolism__title, .content-metabolism__h3-title");
let bgMetabolism = document.querySelector(".calc-metabolism");
let progress = document.querySelector(".progress");
let inputAge = document.querySelector(".input-age");
let inputHeight = document.querySelector(".input-height");
let inputMassa = document.querySelector(".input-massa");
let inputSelect = document.querySelector(".input-select");
let btn = document.querySelector(".submit");
let forma = document.querySelector(".form");
let result = document.querySelector(".result");

let Metabolism = {
	eventText: () => {
//Работа событий для текста
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
},

progressBar: () => {
//Функция для работы прогресс-бара
	if (inputAge.value == "" || inputAge.value == " ") {
		progress.value = "0";
	}

	if (inputAge.value >= 10 && inputAge.value <= 120) {
		progress.value = "33.3";
	}

	if (inputHeight.value >= 140 && inputHeight.value <= 210) {
	 	progress.value = "66.6";
	}

	if (inputMassa.value >= 40 && inputHeight.value <= 200) {
		progress.value = "100";
	}
},


};

Metabolism.eventText();
setInterval(Metabolism.progressBar, 500);