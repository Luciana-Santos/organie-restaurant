const menuBtn = document.querySelector('.menu-mobile')
const menu = document.querySelector('#menu')
const body = document.querySelector('body')

menuBtn.addEventListener('click', () => {
	if (menu.classList.contains('fade-in')) {
		menu.classList.remove('fade-in')
		menu.classList.add('fade-out')
		menuBtn.classList.remove('open')
	} else {
		menu.classList.add('fade-in')
		menu.classList.remove('fade-out')
		menuBtn.classList.add('open')
	}
})