function mobileNav() {
	
	// Header

	const navMenu = document.querySelector('#nav-icon');
	console.log(navMenu);
	const navHead = document.querySelector('#nav-mob');
	console.log(navHead);
	const page = document.querySelector('body');


	navMenu.addEventListener('click',function(){
		console.log(555);
		this.classList.toggle('nav-icon--active');
		navHead.classList.toggle('nav-mob--active');
		page.classList.toggle('noscroll');
	});


	// закрытие меню для прокрутки до нужной секции
	const navL = document.querySelectorAll('.nav__a');
	console.log(navL);

	navL.forEach(function (item) {
		item.addEventListener('click',function(){
			navHead.classList.remove('nav-mob--active');
			navMenu.classList.remove ('nav-icon--active');
			page.classList.remove('noscroll');
		})
	})


}


export default mobileNav;