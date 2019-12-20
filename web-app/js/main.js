let text = document.querySelectorAll(".content-metabolism__text"); // Параграфы с текстом
let headerPage = document.querySelector(".header-page"); // Хедер
let bgContentMtblz = document.querySelector(".content-metabolism"); // Контент метаболизм
let title = document.querySelectorAll(".content-metabolism__title, .content-metabolism__h3-title"); // Заголовки
let bgMetabolism = document.querySelector(".calc-metabolism"); // Блок с формой и фоновым изображением
let progress = document.querySelector(".progress"); // Прогресс бар
let inputAge = document.querySelector(".input-age"); // Поле ввода возраста
let inputHeight = document.querySelector(".input-height"); // Поле ввода роста
let inputMassa = document.querySelector(".input-massa"); // Поле ввода массы тела
let inputSelect = document.querySelector(".input-select"); // Выбор пола
let btn = document.querySelector(".submit"); // Кнопка обработки формы
let forma = document.querySelector(".form"); // Форма
let result = document.querySelector(".result"); // Блок вывода результата
let innerResult = document.querySelectorAll(".inner-res"); // Содержит span для вывода результата
let up = document.querySelector(".up"); // Кнопка вверх

let cookie = 0;

const listBgImages = [ // Массив с фоновыми изображениями
	'img/bg/bg-run2.jpg',
	'img/bg/bg_motosport.jpg',
	'img/bg/bg-velosport.jpg',
	'img/bg/bgBlack.jpg'
];

bgMetabolism.style.backgroundImage = `url(${listBgImages[1]})`;

let resultList = new Array(); // Массив с результатами вычислений по формулам

let upInterval = setInterval(() => { // Появление и исчезание кнопки Up
	if (scrollY != 0) {
	up.style.display = "block";
	} 

	else if (scrollY == 0) {
		up.style.display = "none";
	}
}, 3000);

up.addEventListener('click', () => { // Клик по кнопке Up, прокрутка вверх
	window.scrollTo(0, 0);
});

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
	progress.value = "30";
	}

	if (inputHeight.value >= 140 && inputHeight.value <= 210) {
		progress.value = "60";
	}

	if (inputMassa.value >= 40 && inputMassa.value <= 200) {
		progress.value = "100";
	}
}

let timerProgressBar = setInterval(progressBar, 500);


//Обработка формы
forma.addEventListener('submit', (event) => {
	event.preventDefault();

	console.log(document.form.age);

//Формула Маффина


if (inputSelect.value == '1') {
	let maffinMan = 0;
	maffinMan = (10 * inputMassa.value) + 6.25 * (inputHeight.value) - (5 * inputAge.value) + 5;
	resultList.push(maffinMan);
	console.log(resultList);
}



if (inputSelect.value == '0') {
	let maffinWoman = 0;
	maffinWoman = (10 * inputMassa.value) + (6.25 * inputHeight.value) - (5 * inputAge.value) - 161;
	resultList.push(maffinWoman);
	console.log(resultList);
}


//Формула Ткаченко
let tkachenkoMan;

if (inputSelect.value == '1') {
	if (inputAge.value >= 10 && inputAge.value <= 17) {
		tkachenkoMan = (16.6 * inputMassa.value) + 119 + 572;
		resultList.push(tkachenkoMan);
		console.log(resultList);
	}

	if (inputAge.value >= 18 && inputAge.value <= 30) {
		tkachenkoMan = (15.4 * inputMassa.value) - (27 * (inputHeight.value / 100)) + 717;
		resultList.push(tkachenkoMan);
		console.log(resultList);
	}

	if (inputAge.value >= 31 && inputAge.value <= 60) {
		tkachenkoMan = (11.3 * inputMassa.value) - (16 * (inputHeight.value / 100)) + 901;
		resultList.push(tkachenkoMan);
		console.log(resultList);
	}

	if (inputAge.value > 60) {
		tkachenkoMan = (8.8 * inputMassa.value)	- (1128 * (inputHeight.value / 100)) - 1071;
		resultList.push(tkachenkoMan);
		console.log(resultList);
	}
}

let tkachenkoWoman;

if (inputSelect.value == '0') {
	if (inputAge.value >= 10 && inputAge.value <= 17) {
		tkachenkoWoman = (7.4 * inputMassa.value) + (482 * (inputHeight.value / 100)) + 271;
		resultList.push(tkachenkoWoman);
		console.log(resultList);
	}

	if (inputAge.value >= 18 && inputAge.value <= 30) {
		tkachenkoWoman = (13.3 * inputMassa.value) - (334 * (inputHeight.value / 100)) + 35;
		resultList.push(tkachenkoWoman);
		console.log(resultList);
	}

	if (inputAge.value >= 31 && inputAge.value <= 60) {
		tkachenkoWoman = (8.7 * inputMassa.value) - (25 * (inputHeight.value / 100)) + 865;
		resultList.push(tkachenkoWoman);
		console.log(resultList);
	}

	if (inputAge.value > 60) {
		tkachenkoWoman = (9.2 * inputMassa.value) - (637 * (inputHeight.value / 100)) - 302;
		resultList.push(tkachenkoWoman);
		console.log(resultList);
	}
}


//Формула Харриса
let harrisMan;

if (inputSelect.value == '1') {
	harrisMan = 66 + (13.8 * inputMassa.value) + (5 * inputHeight.value) - (6.8 * inputAge.value);
	resultList.push(harrisMan);
	console.log(resultList);
}

let harrisWoman;

if (inputSelect.value == '0') {
	harrisWoman = 665 + (9.5 * inputMassa.value) + (1.9 * inputHeight.value) - (4.7 * inputAge.value);
	resultList.push(harrisWoman);
	console.log(resultList);
}


//Формула Колемана
let kolemanMan;

if (inputSelect.value == '1') {
	if (inputAge.value >= 10 && inputAge.value <= 17) {
		kolemanMan = (17.5 * inputMassa.value) + 651;
		resultList.push(kolemanMan);
		console.log(resultList);
	}

	if (inputAge.value >= 18 && inputAge.value <= 29) {
		kolemanMan = (15.3 * inputMassa.value) + 679;
		resultList.push(kolemanMan);
		console.log(resultList);
	}

	if (inputAge.value >= 30 && inputAge.value <= 60) {
		kolemanMan = (11.6 * inputMassa.value) + 879;
		resultList.push(kolemanMan);
		console.log(resultList);
	}

	if (inputAge.value > 61) {
		kolemanMan = (13.5 * inputMassa.value) + 487;
		resultList.push(kolemanMan);
		console.log(resultList);
	}
}

let kolemanWoman; 

if (inputSelect.value == '0') {
	if (inputAge.value >= 10 && inputAge.value <= 17) {
		kolemanWoman = (12.2 * inputMassa.value) + 746;
		resultList.push(kolemanWoman);
		console.log(resultList);
	}

	if (inputAge.value >= 18 && inputAge.value <= 29) {
		kolemanWoman = (14.7 * inputMassa.value) + 496;
		resultList.push(kolemanWoman);
		console.log(resultList);
	}

	if (inputAge.value >= 30 && inputAge.value <= 60) {
		kolemanWoman = (8.7 * inputMassa.value) + 829;
		resultList.push(kolemanWoman);
		console.log(resultList);
	}

	if (inputAge.value > 61) {
		kolemanWoman = (10.5 * inputMassa.value) + 596;
		resultList.push(kolemanWoman);
		console.log(resultList);
	}
}

// Вывод результата из массива в текст клиенту
for (let i = 0; i < resultList.length; i++) {
	innerResult[i].innerHTML = resultList[i];
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
	for (let i = 0; i < resultList.length; i++) {
		delete resultList[i];
	}
}