window.sr = ScrollReveal();

sr.reveal('.header .logo', { origin: 'top', distance: '10px', useDelay: 'onload' });
sr.reveal('.header .sub-heading', { origin: 'top', delay: 400, distance: '10px', useDelay: 'onload' });
sr.reveal('.content', { delay: 800, duration: 1000, distance: '0px', scale: 1, useDelay: 'onload', viewFactor: 0.001 });

sr.reveal('.project', {
	delay: 1000,
	useDelay: 'onload',
	afterReveal: function (el) {
		el.style = "visibility: visible;";
	}
});

sr.reveal('.about');
