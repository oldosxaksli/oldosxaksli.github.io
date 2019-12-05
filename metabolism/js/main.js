let btn = document.querySelector(".btn-form");
let select = document.querySelector(".select");
let massa = document.querySelector(".massa");
let age = document.querySelector(".age");
let res = 0;

function validation() {
	if (massa.value && age.value) {
		if (massa.value >= 20 && massa.value <= 120) {
			true;
		} else {
			alert("Вес должен быть 20 - 120кг");
		}

		if (age.value >= 10 && age.value <= 100) {
			true;
		} else {
			alert("Возраст должен быть 10 - 100лет");
		}
	}
	else {
		alert("error validation");
	}

	return true;
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
		console.log("Непонятная ошибка при вычислении!");
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
		console.log("Непонятная ошибка при вычислении!");
	}
}

btn.addEventListener('click', () => {
	if (massa.value != "" && age.value != "") {
		
		validation();

		if (select.value == 1) {
			man();
		} else if (select.value == 0) {
			woman();
		}
	} else {
		alert("Непонятная ошибка!");
	}
});