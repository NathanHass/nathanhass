var PrototypeModule = (function() {
	"use strict";

	var Module = {};

	// scroll to Function
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 800);
				return false;
				}
			}
		});
	});

	// init 

	Module.init = function(options) {
		options = options || {};

		resizeThings();
		watchScroll();
		
		$('.nav-trigger').on('click', function(){
			$('body').toggleClass('mobile-nav-active');
			if($('body').hasClass('mobile-nav-active')) {
				$('.site-wrapper, .nav-link, .name, .nh-logo').on('click', function(){
					$('body').removeClass('mobile-nav-active');
				});
			}
		});

		if($('html').hasClass('no-touch')) {
			$(window).on('resize', function() {
				watchScroll();
				resizeThings();
			});
			$(window).on('scroll', function() {
				watchScroll();
				resizeThings();
			});
		}





	};

	Module.teardown = function() {
	};

	return Module;

	// put helper functions here

	var wHeight;


		function watchScroll() {
			wHeight = $(window).height() - 49;
			if($('body').hasClass('hp-body') && $(window).width() > 550 && $(window).scrollTop() < wHeight){
				$('.site-nav').css({
		    		'top': wHeight + 'px',
		    		'position': 'absolute'
		    	});
			} else {
				$('.site-nav').css({
		    		'top': 0 + 'px',
		    		'position': 'fixed'
		    	});
			}
		  }

		function resizeThings() {
			if($(window).width() > 550) {
				$('body').removeClass('mobile-nav-active');
			}
		    var wHeight = $(window).height() - 49;

		    if($('body').hasClass('hp-body')){
			    $('.project-top-img, .site-footer').css('min-height', (wHeight));
			    $('.site-body').css('min-height', (wHeight + 49));
		    } 
		}
}());

	var width = $(window).width();

	var rsp = new Respeto({
		retina: true
	});


	if(width <= 320) {
	  rsp.load('small'); // loads images with _small suffix
	}

	if(width > 320 && width <= 720) {
	  rsp.load('medium'); // sets image sources with _large suffix
	}

	if(width > 720 && width <= 1024) {
	  rsp.load('large'); // loads images with _huge suffix
	}

	if(width > 1024) {
	  rsp.load('huge'); // loads images with _huge suffix
	}

(function() {
	"use strict";

	var proto = Object.create(PrototypeModule);
	proto.init();

}());