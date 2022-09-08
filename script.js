const menuItems = document.querySelectorAll('.menu__item');

const dropdown = document.querySelector('.features')

menuItems[0].addEventListener('click', () => {
	document.getElementsByClassName('.dropdown').classList.toggle("show");
})