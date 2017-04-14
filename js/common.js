$(function() {

	$('a.s2_button1').hover(function() {
		$('.s2_li1').slideDown(300);
	},
	function() {
		$('.s2_li1').slideUp(300);
	});
	$('a.s2_button2').hover(function() {
		$('.s2_li2').slideDown(300);
	},
	function() {
		$('.s2_li2').slideUp(300);
	});
	$('a.s2_button3').hover(function() {
		$('.s2_li3').slideDown(300);
	},
	function() {
		$('.s2_li3').slideUp(300);
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
