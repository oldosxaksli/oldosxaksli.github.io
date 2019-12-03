let close = document.querySelector(".close");
let btn = document.querySelector(".btn-form");
let select = document.querySelector(".select");
let massa = document.querySelector(".massa");
let age = document.querySelector(".age");
let outResulatat = document.querySelector(".out-resulatat");
let res = 0;

function validation() {
	if (massa.value >= 20 && massa.value <= 120) {
		true;
	} else {
		massa.value = "Вес должен быть 20 - 120кг";
	}

	if (age.value >= 10 && age.value <= 100) {
		true;
	} else {
		age.value = "Возраст должен быть 10 - 100лет";
	}
}

function man() {
	if (age.value >= 10 && age.value <= 17) {
		res = (17.5 * massa.value) + 651;
		outResulatat.textContent = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value >= 18 && age.value <= 29) {
		res = (15.3 * massa.value) + 679;
		outResulatat.textContent = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value >= 30 && age.value <= 60) {
		res = (11.6 * massa.value) + 879;
		outResulatat.textContent = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value > 60) {
		res = (13.5 * massa.value) + 679;
		outResulatat.textContent = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else {
		console.log("Непонятная ошибка!");
	}
}
function woman() {
	if (age.value >= 10 && age.value <= 17) {
		res = (12.2 * massa.value) + 746;
		outResulatat.textContent = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value >= 18 && age.value <= 29) {
		res = (14.7 * massa.value) + 496;
		outResulatat.textContent = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value >= 30 && age.value <= 60) {
		res = (8.7 * massa.value) + 829;
		outResulatat.textContent = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value > 60) {
		res = (10.5 * massa.value) + 596;
		outResulatat.textContent = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else {
		console.log("Непонятная ошибка!");
	}
}

btn.addEventListener('click', () => {
	validation();

	if (select.value == 1) {
		man();
	} else if (select.value == 0) {
		woman();
	}
	close.style.display = "block";
	outResulatat.style.display = "block";
});

close.addEventListener('click', () => {
	outResulatat.style.display = "none";
});