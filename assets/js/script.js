"user strict";

//>> Javascrip Js <<//
$(document).ready(function () {


	//custom tab
	$(".tablinks .nav-links").each(function () {
		var targetTab = $(this).closest(".singletab");
		targetTab.find(".tablinks .nav-links").each(function() {
		  var navBtn = targetTab.find(".tablinks .nav-links");
		  navBtn.click(function(){
			navBtn.removeClass('active');
			$(this).addClass('active');
			var indexNum = $(this).closest("li").index();
			var tabcontent = targetTab.find(".tabcontents .tabitem");
			$(tabcontent).removeClass('active');
			$(tabcontent).eq(indexNum).addClass('active');
		  });
		});
	  });
	  //custom tab


	//side contact added
	$(".remove__click").on("click", function (e) {
		$(".subside__barmenu").toggleClass("active");
	});
	//side contact added


	//>>>> Testimonial slide
	var swiper = new Swiper(".testimonial__slidewrap", {
		spaceBetween: 30,
		speed: 3000,
		loop: true,
		autoplay: {
			delay: 2000,
		},
		pagination: {
		  el: ".swiper-pagination3",
		  clickable: true,
		},
		breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 10,
			},
			575: {
				slidesPerView: 1,
			},
			991: {
				slidesPerView: 1,
			},
			1200: {
				slidesPerView: 1,
			},
			1400: {
				slidesPerView: 1,
			},
			1600: {
			  slidesPerView: 1,
			},
		}
	});
	//>>>> sponsor slider
	var swiper = new Swiper(".sponsor__wrap", {
		spaceBetween: 0,
		speed: 3000,
		loop: true,
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			320: {
			  slidesPerView: 2,
			  spaceBetween: 10,
			},
			575: {
				slidesPerView: 3,
			},
			991: {
				slidesPerView: 4,
			},
			1200: {
				slidesPerView: 5,
			},
			1400: {
				slidesPerView: 5,
			},
			1600: {
			  slidesPerView: 5,
			},
		}
	});

	//>> Swiper Slider <<//		
	
	//>> Nice Select <<//
	$('select').niceSelect();
	//>> Nice Select <<//


	//>> Menu Fixed Components <<//
	var fixed_top = $(".header-section");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 20) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
			fixed_top.removeClass("slideInUp");
			$("body").addClass("body-padding");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
			fixed_top.addClass("slideInUp");
			$("body").removeClass("body-padding");
		}
	});
	//>> Menu Fixed Components <<//

	//>> Main Menu <<//
	$(".header-bar").on("click", function (e) {
		$(".main-menu, .header-bar").toggleClass("active");
	});
	$(".main-menu li a").on("click", function (e) {
		var element = $(this).parent("li");
		if (element.hasClass("open")) {
			element.removeClass("open");
			element.find("li").removeClass("open");
			element.find("ul").slideUp(600);
		} else {
			element.siblings("li").removeClass("open");
			element.siblings("li").find("li").removeClass("open");
			element.addClass("open");
			element.find("ul").slideDown(600);
			element.siblings("li").find("ul").slideUp(600);
			element.siblings("li").find("ul").slideUp(600);
		}
	});
	$(".scrollToTop").on("click", function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			700
		);
		return false;
	});
	//>> Main Menu <<//

	//>> Magnific Popup <<//
	$('.video-btn').magnificPopup({
		type: 'iframe',
		callbacks: {
			
	  	}
	});
	$('.imgc').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		}
	  });
	//>> Magnific Popup <<//

	//>> Wow Animation <<//
	new WOW().init();
	//>> Wow Animation <<//

	//>> Aos Animation <<//
	AOS.init({
		once: true,
		easing: 'ease-in-out',
	});
	//>> Aos Animation <<//

	//>> Scroll To Top <<//
	var progressPath = document.querySelector(".progress-wrap path");
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition =
		"none";
	progressPath.style.strokeDasharray = pathLength + " " + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition =
		"stroke-dashoffset 10ms linear";
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength) / height;
		progressPath.style.strokeDashoffset = progress;
	};
	updateProgress();
	$(window).scroll(updateProgress);
	var offset = 50;
	var duration = 1000;
	jQuery(window).on("scroll", function () {
		if (jQuery(this).scrollTop() > offset) {
		jQuery(".progress-wrap").addClass("active-progress");
		} else {
		jQuery(".progress-wrap").removeClass("active-progress");
		}
	});
	jQuery(".progress-wrap").on("click", function (event) {
		event.preventDefault();
		jQuery("html, body").animate({ scrollTop: 0 }, duration);
		return false;
	});

	//>> Scroll To Top <<//

	//>> Preloader <<//
	setTimeout(function(){
		$('.preloader__aria').fadeToggle();
	}, 1500);
	//>> Preloader <<//

});
//>> Javascrip Js <<//






