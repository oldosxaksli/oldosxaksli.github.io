let btn = document.querySelector(".btn-form");
let select = document.querySelector(".select");
let massa = document.querySelector(".massa");
let age = document.querySelector(".age");
let outResulatat = document.querySelector(".out-resulatat");
let res = 0;

function man() {
	if (age.value >= 10 && age.value <= 17) {
		res = (17.5 * massa.value) + 651;
		outResulatat.innerHTML = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value >= 18 && age.value <= 29) {
		res = (15.3 * massa.value) + 679;
		outResulatat.innerHTML = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value >= 30 && age.value <= 60) {
		res = (11.6 * massa.value) + 879;
		outResulatat.innerHTML = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value > 60) {
		res = (13.5 * massa.value) + 679;
		outResulatat.innerHTML = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else {
		alert("Error!");
	}
}
function woman() {
	if (age.value >= 10 && age.value <= 17) {
		res = (12.2 * massa.value) + 746;
		outResulatat.innerHTML = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value >= 18 && age.value <= 29) {
		res = (14.7 * massa.value) + 496;
		outResulatat.innerHTML = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value >= 30 && age.value <= 60) {
		res = (8.7 * massa.value) + 829;
		outResulatat.innerHTML = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else if (age.value > 60) {
		res = (10.5 * massa.value) + 596;
		outResulatat.innerHTML = "Ваш основной обмен веществ составляет " + res + " калорий в сутки!";
	} else {
		alert("Error!");
	}
}
btn.addEventListener('click', () => {
	if (select.value == 1) {
		man();
	} else if (select.value == 0) {
		woman();
	}
	outResulatat.style.display = "block";
});