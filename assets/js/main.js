// Sticky menu background
window.addEventListener("scroll", function () {
	if (window.scrollY > 150) {
		document.querySelector("#navbar").style.opacity = 0.9;
	} else {
		document.querySelector("#navbar").style.opacity = 1;
	}
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
	if (this.hash !== "") {
		event.preventDefault();

		const hash = this.hash;

		$("html, body").animate(
			{
				scrollTop: $(hash).offset().top - 100,
			},
			800
		);
	}
});

// Slick Slider Autoplay
$(".social-wrapper").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	nextArrow: $(".next"),
	prevArrow: $(".prev"),
});
