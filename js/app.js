window.onscroll = () => {

	let scroll = window.scrollY;

	// Selecciona el div con la clase header-scroll
	const headerScroll = document.querySelector('.header-scroll');

	if( scroll > 260) {
		headerScroll.classList.add('activo');
	} else {
		headerScroll.classList.remove('activo');
	}
}