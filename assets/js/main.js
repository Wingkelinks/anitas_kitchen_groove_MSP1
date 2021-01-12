// Slick Slider Autoplay
// $(".social-wrapper").slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	autoplay: true,
// 	autoplaySpeed: 3000,
// 	nextArrow: $(".next"),
// 	prevArrow: $(".prev"),
// });

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

// Lightbox Image Gallery
