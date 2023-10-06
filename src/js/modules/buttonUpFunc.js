function buttonUpFunc(){
    const logoButtonNav = document.querySelector(".logo-button");
    const logoButtonStart = 350;

	window.addEventListener ('scroll' , navOnScroll);
	function navOnScroll (params) {
        if (scrollY > logoButtonStart) {
            console.log(scrollY);
            logoButtonNav.classList.add('active');
            
            
        } else {
            logoButtonNav.classList.remove('active');
        }
    }

    document.querySelector('.btn-up').onclick = () => {
		// переместим в начало страницы
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
	})};
}

export default buttonUpFunc;