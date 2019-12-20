let wow = document.querySelectorAll(".wow");
let wrapper = document.querySelector(".wrapper");

for (let i = 0; i < wow.length; i++) {
	wow[i].style.opacity = "0";

	let timer = setInterval(() => {
		wow[i].style.transform = "translate(100%, 0)";

	if (scrollY + 500 >= wow[i].offsetTop) {
		wow[i].style.opacity = "1";
		wow[i].style.transition = "all .2s ease";
		wow[i].style.transform = "translate(0, 0)";
	}

	if (pageYOffset + 1000 >= wrapper.offsetHeight) {
		clearInterval(timer);
	}
	}, 1500);
}