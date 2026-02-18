const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// 1. Toggle Menu on Hamburger Click
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
	document.body.classList.toggle("no-scroll");
});

// 2. Close Menu When a Link is Clicked (UX Improvement)
navLinks.forEach((n) =>
	n.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navMenu.classList.remove("active");
	}),
);
