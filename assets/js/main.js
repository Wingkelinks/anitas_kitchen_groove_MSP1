// Slick Slider Testimonials

$(document).ready(function () {
	$(".testimonial-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		accessibility: true,
		adaptiveHeight: true,
		arrows: true,
		dots: true,
		dotsClass: "slick-dots",
		centerPadding: "50px",
		mobileFirst: true,
		useCSS: true,
		easing: "linear",
	});
});
