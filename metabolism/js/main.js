let btn = document.querySelector(".btn-form");
let select = document.querySelector(".select");
let massa = document.querySelector(".massa");
let age = document.querySelector(".age");
let res = 0;

function validation() {
	if (massa.value >= 20 && massa.value <= 120) {
		return true;
	}
	else if (age.value >= 10 && age.value <= 100) {
		return true;
	}
	else {
		alert("Проверьте введенные данные в форме");
		return false;
	}
}

function man() {
	if (age.value >= 10 && age.value <= 17) {
		res = (17.5 * massa.value) + 651;
		alert("Ваш основной обмен веществ составляет " + res.toFixed(0) + " калорий в сутки!");
	} else if (age.value >= 18 && age.value <= 29) {
		res = (15.3 * massa.value) + 679;
		alert("Ваш основной обмен веществ составляет " + res.toFixed(0) + " калорий в сутки!");
	} else if (age.value >= 30 && age.value <= 60) {
		res = (11.6 * massa.value) + 879;
		alert("Ваш основной обмен веществ составляет " + res.toFixed(0) + " калорий в сутки!");
	} else if (age.value > 60) {
		res = (13.5 * massa.value) + 679;
		alert("Ваш основной обмен веществ составляет " + res.toFixed(0) + " калорий в сутки!");
	} else {
		alert("Error Man!");
	}
}

function woman() {
	if (age.value >= 10 && age.value <= 17) {
		res = (12.2 * massa.value) + 746;
		alert("Ваш основной обмен веществ составляет " + res.toFixed(0) + " калорий в сутки!");
	} else if (age.value >= 18 && age.value <= 29) {
		res = (14.7 * massa.value) + 496;
		alert("Ваш основной обмен веществ составляет " + res.toFixed(0) + " калорий в сутки!");
	} else if (age.value >= 30 && age.value <= 60) {
		res = (8.7 * massa.value) + 829;
		alert("Ваш основной обмен веществ составляет " + res.toFixed(0) + " калорий в сутки!");
	} else if (age.value > 60) {
		res = (10.5 * massa.value) + 596;
		alert("Ваш основной обмен веществ составляет " + res.toFixed(0) + " калорий в сутки!");
	} else {
		alert("Error Woman!");
	}
}

btn.addEventListener('click', () => {
	validation();
	if (validation() == false) {
		alert("Проверьте введенные данные!");
	}
	else if (select.value == 1) {
		man();
	}
	else if (select.value == 0) {
		woman();
	} else {
		alert("Непонятная ошибка при клике!");
	}
});