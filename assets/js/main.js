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

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("nav").style.fontSize = "30px";
	} else {
		document.getElementById("nav").style.fontSize = "90px";
	}
}


