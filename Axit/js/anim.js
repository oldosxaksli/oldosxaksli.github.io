let wrapper = document.querySelector(".wrapper");

let mainWrap = document.querySelector(".main-wrap");
mainWrap.style.opacity = "0";
mainWrap.style.transform = "translate(100%, 0)";

let socialMedia = document.querySelector(".social-media");
socialMedia.style.opacity = "0";
socialMedia.style.transform = "translate(-100%, 0)";

let tabs = document.querySelector(".tabs");
tabs.style.opacity = "0";
tabs.style.transform = "translate(100%, 0)";

let sub = document.querySelector(".sub");
sub.style.opacity = "0";
sub.style.transform = "translate(-100%, 0)";

let pictureSection = document.querySelector(".picture-section");
pictureSection.style.opacity = "0";
pictureSection.style.transform = "translate(100%, 0)";

let whyThis = document.querySelector(".why-this");
whyThis.style.opacity = "0";
whyThis.style.transform = "translate(-100%, 0)";

let pricingOptions = document.querySelector(".pricing-options");
pricingOptions.style.opacity = "0";
pricingOptions.style.transform = "translate(100%, 0)";

let what = document.querySelector(".what");
what.style.opacity = "0";
what.style.transform = "translate(-100%, 0)";

let stylish = document.querySelector(".stylish");
stylish.style.opacity = "0";
stylish.style.transform = "translate(100%, 0)";

let contact = document.querySelector(".contact-us");
contact.style.opacity = "0";
contact.style.transform = "translate(-100%, 0)";

let footer = document.querySelector(".footer");
footer.style.opacity = "0";
footer.style.transform = "translate(100%, 0)";

setInterval(() => {
	console.log(scrollY);

	if (scrollY + 400 >= mainWrap.offsetTop) {
			setTimeout(() => {
			mainWrap.style.opacity = "1";
			mainWrap.style.transition = "all .2s ease";
			mainWrap.style.transform = "translate(0, 0)";
		}, 1)
	};

	if (scrollY + 400 >= socialMedia.offsetTop) {
		socialMedia.style.opacity = "1";
		socialMedia.style.transition = "all .2s ease";
		socialMedia.style.transform = "translate(0, 0)";
	};

	if (scrollY + 400 >= tabs.offsetTop) {
		tabs.style.opacity = "1";
		tabs.style.transition = "all .2s ease";
		tabs.style.transform = "translate(0, 0)";
	};

	if (scrollY + 400 >= sub.offsetTop) {
		sub.style.opacity = "1";
		sub.style.transition = "all .2s ease";
		sub.style.transform = "translate(0, 0)";
	};

	if (scrollY + 400 >= pictureSection.offsetTop) {
		pictureSection.style.opacity = "1";
		pictureSection.style.transition = "all .2s ease";
		pictureSection.style.transform = "translate(0, 0)";
	};

	if (scrollY + 400 >= whyThis.offsetTop) {
		whyThis.style.opacity = "1";
		whyThis.style.transition = "all .2s ease";
		whyThis.style.transform = "translate(0, 0)";
	};

	if (scrollY + 400 >= pricingOptions.offsetTop) {
		pricingOptions.style.opacity = "1";
		pricingOptions.style.transition = "all .2s ease";
		pricingOptions.style.transform = "translate(0, 0)";
	};

	if (scrollY + 400 >= what.offsetTop) {
		what.style.opacity = "1";
		what.style.transition = "all .2s ease";
		what.style.transform = "translate(0, 0)";
	};

	if (scrollY + 400 >= stylish.offsetTop) {
		stylish.style.opacity = "1";
		stylish.style.transition = "all .2s ease";
		stylish.style.transform = "translate(0, 0)";
	};

	if (scrollY + 400 >= contact.offsetTop) {
		contact.style.opacity = "1";
		contact.style.transition = "all .2s ease";
		contact.style.transform = "translate(0, 0)";
	};

	if (scrollY <= footer.offsetTop) {
		footer.style.opacity = "1";
		footer.style.transition = "all .2s ease";
		footer.style.transform = "translate(0, 0)";
	};

}, 400);