// Sticky header
$(window).scroll(function () {
	if ($(window).width() >= 768) {

		var scrollTop = $(window).scrollTop(),
			headerHt = Number($('header[role="banner"]').height());
			
		if (scrollTop > headerHt) {
			$('.sticky-header').stop().animate( {
				top : 0,
				opacity : 1
			}, 250);
		} else {
			$('.sticky-header').stop().animate( {
				top : '-60px',
				opacity : 0,
			}, 250);
		}
	}
} );

// Mobile menu	
$(document).ready(function() {
	var hamburger = $('.hamburger');
	
	if (!hamburger) return;
	
	hamburger.click(function() {
		$('#menu-items').slideToggle();
	});
});
