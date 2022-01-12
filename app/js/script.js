const menuBtn = document.querySelector('#menu-icon')
const menu = document.querySelector('#menu')

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('slide-in');
})