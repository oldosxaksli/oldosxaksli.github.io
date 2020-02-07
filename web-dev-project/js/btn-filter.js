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

for (let i = 0; i < buttonFilter.length; i++) {
	console.log(buttonFilter[i]);
}

// buttonFilter.forEach((item, i, arr) => {
// 	buttonFilter[i].addEventListener('click', (event) => {
		
// 	});
// });





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

// Скрытие при нажатии кнопки фильтра Web Design
webDesign.addEventListener('click', (event) => {
	for (let i = 0; i < jsOneWorks.length; i++) {
		jsOneWorks[i].style.opacity = "0";
		jsOneWorks[i].style.transform = "scale(0, 0)";
		webDesign.style.opacity = ".3";
		setTimeout(() => {
			jsOneWorks[i].style.display = "none";
		}, 200);
	}
});

// Скрытие при нажатии кнопки фильтра UI UX
uiUx.addEventListener('click', (event) => {
	for(let i = 0; i < jsTwoWorks.length; i++) {
		jsTwoWorks[i].style.opacity = "0";
		jsTwoWorks[i].style.transform = "scale(0, 0)";
		uiUx.style.opacity = ".3";
		setTimeout(() => {
			jsTwoWorks[i].style.display = "none";
		}, 200);
	}
});

// Скрытие при нажатии кнопки фильтра Mockups
mockups.addEventListener('click', (event) => {
	for (let i = 0; i < jsThreeWorks.length; i++) {
		jsThreeWorks[i].style.opacity = "0";
		jsThreeWorks[i].style.transform = "scale(0, 0)";
		mockups.style.opacity = ".3";
		setTimeout(() => {
			jsThreeWorks[i].style.display = "none";
		}, 200);
	}
});