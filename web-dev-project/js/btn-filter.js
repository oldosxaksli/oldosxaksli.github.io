// Кнопки фильтры
const all = document.getElementById("all");
const webDesign = document.getElementById("web-design");
const uiUx = document.getElementById("ui-ux");
const mockups = document.getElementById("mockups");
const viewAll = document.getElementById("view-all");

// Блоки works
const jsOneWorks = document.querySelectorAll(".js-one-works");
const jsTwoWorks = document.querySelectorAll(".js-two-works");
const jsThreeWorks = document.querySelectorAll(".js-three-works");

// Массив для фильтруемых блоков works
const allInnerBlock = new Array();
allInnerBlock.push(jsOneWorks);
allInnerBlock.push(jsTwoWorks);
allInnerBlock.push(jsThreeWorks);

// Массив для кнопок-фильтров
const buttonFilter = new Array();
buttonFilter.push(webDesign);
buttonFilter.push(uiUx);
buttonFilter.push(mockups);

// При клике на кнопку-фильтр скрываем блок.
buttonFilter.forEach((item, i, arr) => {
	buttonFilter[i].addEventListener('click', (event) => {
		for (let count = 0; count < allInnerBlock[i].length; count++) {
			allInnerBlock[i][count].style.opacity = "0";
			allInnerBlock[i][count].style.transform = "scale(0, 0)";
			buttonFilter[i].style.opacity = ".3";
			setTimeout(() => {
				allInnerBlock[i][count].style.display = "none";
			}, 200);
		}
	});
});

// Кнопки для появления всех скрытых блоков
all.addEventListener('click', (event) => {
	for (let i = 0; i < allInnerBlock.length; i++) {
		for (let count = 0; count < allInnerBlock[i].length; count++) {
			allInnerBlock[i][count].style.display = "block"
			webDesign.style.opacity = "1";
			uiUx.style.opacity = "1";
			mockups.style.opacity = "1";
			setTimeout(()=> {
				allInnerBlock[i][count].style.opacity = "1";
				allInnerBlock[i][count].style.transform = "scale(1, 1)";
			}, 200);
		}
	}
});
viewAll.addEventListener('click', (event) => {
	for (let i = 0; i < allInnerBlock.length; i++) {
		for (let count = 0; count < allInnerBlock[i].length; count++) {
			allInnerBlock[i][count].style.display = "block"
			webDesign.style.opacity = "1";
			uiUx.style.opacity = "1";
			mockups.style.opacity = "1";
			setTimeout(()=> {
				allInnerBlock[i][count].style.opacity = "1";
				allInnerBlock[i][count].style.transform = "scale(1, 1)";
			}, 200);
		}
	}
});