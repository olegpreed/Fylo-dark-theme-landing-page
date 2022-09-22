// const burger = document.querySelector('.burger-menu-icon')

// burger.addEventListener('click', (event) => {
// 	console.log(event);
// })

let i = 1;
let j = 1;

const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('overlay');
const dropMenus = document.querySelectorAll('#side-menu .drop-down')
const arrow = document.querySelectorAll('#side-menu svg') 

function show() {
	sideMenu.style.marginRight = '0';
	overlay.style.opacity = '70%';
}

function closes() {
	sideMenu.style.marginRight = '-270px';
	overlay.style.opacity = '0%';
}

function dropFeatures() {
	if (i) {
		dropMenus[0].style.display = 'flex';
		arrow[0].style.transform = 'rotate(-180deg)';
		i = 0;
	}
	else {
		dropMenus[0].style.display = 'none';
		arrow[0].style.transform = 'rotate(0deg)';
		i = 1;
	}
}

function dropCompany() {
	if (j) {
		dropMenus[1].style.display = 'flex';
		arrow[1].style.transform = 'rotate(-180deg)';
		j = 0;
	}
	else {
		dropMenus[1].style.display = 'none';
		arrow[1].style.transform = 'rotate(0deg)';
		j = 1;
	}
}