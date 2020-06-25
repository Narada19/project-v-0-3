(function ($) {
	function setDots(){
	  $("#testimonial-slides .owl-dots").removeClass('disabled');
	}

	$(document).ready(function () {
		$('.owl-carousel').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    autoplay: true,
		    autoPlay: 3000, //Set AutoPlay to 3 seconds
		    dots: true,
		    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:4
			        }
			    },
			  onInitialized:setDots,
		      onChanged:setDots
		})


		$('#owl-slider').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    autoplay: true,
		    autoPlay: 3000, //Set AutoPlay to 3 seconds
		    dots: true,
		    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:3
			        },
			        1000:{
			            items:4
			        }
			    },
			  onInitialized:setDots,
		      onChanged:setDots
		})
	});

	$('span.number').number( true, 3,',' )

	$('.Count').each(function () {
	    $(this).prop('Counter',0).animate({
	        Counter: $(this).text()
	    }, {
	        duration: 1000,
	        easing: 'swing',
	        step: function (now) {
	            $(this).text(Math.ceil(now));
	        }
	    });
	});



}(jQuery));