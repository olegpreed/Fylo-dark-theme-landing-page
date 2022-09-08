const menuItems = document.querySelectorAll('.menu__item');

const dropdown = document.querySelector('.features');

const arrow = document.querySelectorAll('.menu__item > svg');

menuItems[0].addEventListener('mouseover', () => {
	dropdown.classList.toggle("show");
	arrow[0].classList.toggle('rotate');
})