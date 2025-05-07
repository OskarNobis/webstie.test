const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-item');

burger.addEventListener('click', () => {
	nav.classList.toggle('nav--open');
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		nav.classList.remove('nav--open');
	});
});
