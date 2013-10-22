(function() {
	$(document).ready(function(){
		$('<div class="recent-work-hover"><i class="icon-plus-sign"></i></div>').appendTo('.work-item a');

  		$('.testimonial-list').bxSlider({
  			auto: true,
  			mode: "fade",
  			pause: 1500,
  			pager: false,
  			controls: false
  		});

		$('.client-list-slider').bxSlider({
			slideWidth: 900,
			minSlides: 7,
			maxSlides: 10,
			prevText: '<i class="icon-angle-left"></i>',
			nextText: '<i class="icon-angle-right"></i>',
			pager: false
		});
	});
})();