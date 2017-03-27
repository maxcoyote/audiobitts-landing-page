// Loader
$(window).on("load", function(){
    $('.loader').css('display','none');
    $('.wrapper').css('display','block');
});

// Slick Slider
$(document).ready(function(){
  $('.carousel').slick({
  	arrows: false,
  	dots: true,
    slidesToShow: 4,
  	slidesToScroll: 4,
  	// nextArrow: '<a href="#" class="prev arrow"><i class="fa fa-angle-left"></i></a>',
  	// prevArrow: '<a href="#" class="next arrow"><i class="fa fa-angle-right"></i></a>',
  	autoplay: true,
  	autoplaySpeed: 2000,
  	infinite: false,
  	responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	      	dots: true,
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 479,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
  });
});

// Animate when scrolled into view
 function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function () {
    $('.animate').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('animated');
        }
  else{
        //  $(this).removeClass('animate');
        }
    });

});
