(function(){

	$(window).on('load',(function(){
		$('.preloader').stop().fadeOut('slow');

	}));

	//Redimencionar la imagen del background del header
	var slideHeight = $(window).height();
	$('.header').css('height',slideHeight);
	$(window).resize(function(){
		'use strict',
		$('.header').css('height',slideHeight);
	});


	$(".sub-title").typed({
        strings: ["Eficiente.^2000", "Productivo.^2000 ","Competitivo.^2000"],
        typeSpeed: 0,
        loop : true
      });

	var scroll_start = 0;
	var startchange = $('#servicios');
	var offset = startchange.offset();
	$(document).scroll(function() {
		scroll_start = $(this).scrollTop();
		if(scroll_start > offset.top)
			$( ".navbar" ).addClass('scroll-bottom navbar-fixed-top');
		else
			$( ".navbar" ).removeClass('scroll-bottom navbar-fixed-top');
	});



	//Scroll smoth al hacer click en un href de a
	smoothScroll.init();
	//Parallax **
	$.Scrollax();
	//
	var vivusOptions = {
		duration: 100,
		animTimingFunction: Vivus.EASE
	};
	new Vivus('ventasvg', vivusOptions);
	new Vivus('soportesvg', vivusOptions);
	new Vivus('infrasvg', vivusOptions);
	new Vivus('outsvg', vivusOptions);
	new Vivus('seguridadsvg', vivusOptions);
	new Vivus('softsvg', vivusOptions);


	var srm = new ScrollReveal();
	//sr.reveal('#servicios',{duration:1000},50);
	var revealOptions = {
		// 'bottom', 'left', 'top', 'right'
		origin : 'left',
		duration : 1000,
		easing : 'cubic-bezier(0.420, 0.000, 0.580, 1.000)',
		distance : '0px'
	};
	srm.reveal('.navbar-brand, #welcome',revealOptions,500);
	srm.reveal('#servicios .container:nth-child(2) .row .col-md-4',revealOptions,200);
	srm.reveal('#nosotros .container .row .col-md-6',revealOptions,100);
	srm.reveal("#clientes .container .row div[class^='col-md']",revealOptions,100);
	srm.reveal("#contactenos .container .row div[class^='col-md']",revealOptions,100);


	if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
	 srm.reveal('.nav > li > a',revealOptions,200);
	}

	$(".navbar").autoHidingNavbar();
})();
