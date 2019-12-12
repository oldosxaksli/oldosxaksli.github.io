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

// let listBgImages = [
// 	'img/bg/bg-run2.jpg',
// 	'img/bg/bg_motosport.jpg',
// 	'img/bg/bg-velosport.jpg'
// ];

// setInterval(() => {
// 	for (let bgIndex = 0; bgIndex < listBgImages.length; bgIndex++) {
// 		bgMetabolism.style.backgroundImage = `url(${listBgImages[bgIndex]})`;
// 	}
// }, 1000);

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

//Функция для работы прогресс-бара
function progressBar() {
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
}

setInterval(progressBar, 1000);

//Обработка формы
forma.addEventListener('submit', (event) => {
	event.preventDefault();

let maffinMan = 0;
let maffinWoman = 0;

if (inputSelect.value == '1') {

	maffinMan = (10 * inputMassa.value) + 6.25 * (inputHeight.value) - (5 * inputAge.value) + 5;
}

if (inputSelect.value == '0') {
	maffinWoman = (10 * inputMassa.value) + (6.25 * inputHeight.value) - (5 * inputAge.value) - 161;
}

let tkachenkoMan = 0;
let tkachenkoWoman = 0;

if (inputSelect.value == '1') {
	if (inputAge.value >= 10 && inputAge.value <= 17) {
		tkachenkoMan = (16.6 * inputMassa.value) + 119 + 572;
	}

	else if (inputAge.value >= 18 && inputAge.value <= 30) {
		tkachenkoMan = (15.4 * inputMassa.value) - (27 * (inputHeight.value / 100)) + 717;
	}

	else if (inputAge.value >= 31 && inputAge.value <= 60) {
		tkachenkoMan = (11.3 * inputMassa.value) - (16 * (inputHeight.value / 100)) + 901;
	}

	else {
		tkachenkoMan = (8.8 * inputMassa.value)	- (1128 * (inputHeight.value / 100)) - 1071;
	}
}

if (inputSelect.value == '0') {
	if (inputAge.value >= 10 && inputAge.value <= 17) {
		tkachenkoWoman = (7.4 * inputMassa.value) + (482 * (inputHeight.value / 100)) + 271;
	}

	else if (inputAge.value >= 18 && inputAge.value <= 30) {
		tkachenkoWoman = (13.3 * inputMassa.value) - (334 * (inputHeight.value / 100)) + 35;
	}

	else if (inputAge.value >= 31 && inputAge.value <= 60) {
		tkachenkoWoman = (8.7 * inputMassa.value) - (25 * (inputHeight.value / 100)) + 865;
	}

	else {
		tkachenkoWoman = (9.2 * inputMassa.value) - (637 * (inputHeight.value / 100)) - 302;
	}
}

let harrisMan = 0;
let harrisWoman = 0;

if (inputSelect.value == '1') {
	harrisMan = 66 + (13.8 * inputMassa.value) + (5 * inputHeight.value) - (6.8 * inputAge.value);
}

if (inputSelect.value == '0') {
	harrisWoman = 665 + (9.5 * inputMassa.value) + (1.9 * inputHeight.value) - (4.7 * inputAge.value);
}

let kolemanMan = 0;
let kolemanWoman = 0; 

if (inputSelect.value == '1') {
	if (inputAge.value >= 10 && inputAge.value <= 17) {
		kolemanMan = (17.5 * inputMassa.value) + 651;
	}

	else if (inputAge.value >= 18 && inputAge.value <= 29) {
		kolemanMan = (15.3 * inputMassa.value) + 679;
	}

	else if (inputAge.value >= 30 && inputAge.value <= 60) {
		kolemanMan = (11.6 * inputMassa.value) + 879;
	}

	else {
		kolemanMan = (13.5 * inputMassa.value) + 487;
	}
}

if (inputSelect.value == '0') {
	if (inputAge.value >= 10 && inputAge.value <= 17) {
		kolemanWoman = (12.2 * inputMassa.value) + 746;
	}

	else if (inputAge.value >= 18 && inputAge.value <= 29) {
		kolemanWoman = (14.7 * inputMassa.value) + 496;
	}

	else if (inputAge.value >= 30 && inputAge.value <= 60) {
		kolemanWoman = (8.7 * inputMassa.value) + 829;
	}

	else {
		kolemanWoman = (10.5 * inputMassa.value) + 596;
	}
}

//innerResult содержит 8 элементов span
let innerResult = document.querySelectorAll(".inner-res");

//Массив с перемеными что хранят результат вычислений по форумулам
let resultList = [
	maffinMan.toFixed(),
	maffinWoman.toFixed(),
	tkachenkoMan.toFixed(),
	tkachenkoWoman.toFixed(),
	harrisMan.toFixed(),
	harrisWoman.toFixed(),
	kolemanMan.toFixed(),
	kolemanWoman.toFixed()
];

//Массив с значениями для описание хранящегося результата в массиве resultList 
let resultText = [
	"По формуле Маффина для мужчины ",
	"По формуле Маффина для женщины ",
	"По формуле Ткаченко для мужчины ",
	"По формуле Ткаченко для женщины ",
	"По формуле Харриса для мужчины ",
	"По формуле Харриса для женщины ",
	"По формуле Колмена для мужчины ",
	"По формуле Колмена для женщины "
];

//Если переменная содержит в себе 0 то пропускать ее и не записывать в тег.
for (let el = 0; el < innerResult.length; el++) {
	if (resultList[el] == '0') {
		continue;
	} else {
		innerResult[el].textContent = resultText[el] + resultList[el] + " калорий";
	}
}

//Появление блока с результатом 
result.style.zIndex = "100";
result.style.display = "block";
result.style.opacity = "1";
});

//Закрыть блок
result.onclick = (event) => {
	result.style.opacity = "0";
	result.style.zIndex = "-100";
}