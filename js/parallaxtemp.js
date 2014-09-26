// JavaScript Document

// Doc Load Functions
$(document).load(function() {
	
	// you could also declare a loader here that fades out when all other assets are ready.
	
		var wintop = $(window).scrollTop();
		var docheight = $(document).height();
		var docbottom = docheight - 50;
		var sectionTop = wintop + 30;
		
		
	
		// ensure placemarker always on correct chapter on page refresh
		var divFirst = $('#section-1').position().top;
		var divSecond = $('#section-2').position().top;
		var divThird = $('#section-3').position().top;
		/*var divFourth = $('#section-4').position().top;
		var divFifth = $('#section-5').position().top;
		var divSixth = $('#section-6').position().top;
		var divSeventh = $('#section-7').position().top;
		var divEight = $('#section-8').position().top;
		var divNinth = $('#section-9').position().top;
		var divTenth = $('#section-10').position().top;
		var divEleventh = $('#section-11').position().top; */
		
		if(divFirst < sectionTop && divSecond > sectionTop) {
			$('header ul li').removeClass('currentCh');
			$('header ul li.one').addClass('currentCh');
		}
		else if(divSecond < sectionTop && divThird > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.two').addClass('currentCh');
		}
		else if(divThird < sectionTop && docBottom > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.three').addClass('currentCh');
		}
		/* else if(divFourth < sectionTop && divFifth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.four').addClass('currentCh');
		}
		else if(divFifth < sectionTop && divSixth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.five').addClass('currentCh');
		}
		else if(divSixth < sectionTop && divSeventh > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.six').addClass('currentCh');
		}
		else if(divSeventh < sectionTop && divEight > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.seven').addClass('currentCh');
		}
		else if(divEight < sectionTop && divNinth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.eight').addClass('currentCh');
		}
		else if(divNinth < sectionTop && divTenth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.nine').addClass('currentCh');
		}
		else if(divTenth < sectionTop && divEleventh > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.ten').addClass('currentCh');
		}
		else if(divEleventh < sectionTop && docBottom > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.eleven').addClass('currentCh');
		} */
		

}); // END DOC LOAD FUNCTIONS

$(document).ready(function() {
	// PARALLAXPARALLAXPARALLAX HAPPENS HERE.
	// Init Skrollr
	
	if( $(window).width() > 970) {
		var s = skrollr.init();
 
		// Refresh Skrollr after resizing our sections
		s.refresh($('.car-elevator'));
	}

	
// universal variables
var winHeight = $(window).height();
var winWidth = $(window).width();
$('.intro').height(winHeight);

var captionHeight = $('.captionbox').height();

$('.captionbox').css({
	'top':0 - captionHeight,
	'margin-bottom': captionHeight * -1
	
	});

	if($(window).width() < 800){
		$('.intro').height(winHeight * 1.55);
	}
	if($(window).width() < 550){
		$('li#mag-menu > a').html('<i class="fa fa-bars"></i>');
	}

	
	$(window).resize(function() {
		if($(window).width() < 800){
			$('.intro').height(winHeight * 1.55);
	}
	else if($(window).width() > 800){
		$('.intro').height(winHeight);
	}
	
	if($(window).width() < 550){
		$('li#mag-menu > a').html('<i class="fa fa-bars"></i>');
	}
	else if($(window).width() > 550){
		$('li#mag-menu > a').html('Chapter');
	}
	
});



$('.arrowdown a').click(function() {
		var categoryTop = $('#section-1').position().top; 
		

		$('#section-1').goTo();
			
			
		$('#section-1').addClass('liveCategory');
			
	});
	
// Chapter Markers Move On Scroll
	$(window).scroll(function() {
		var wintop = $(window).scrollTop();
		var docheight = $(document).height();
		var docbottom = docheight - 50;
		var sectionTop = wintop + 30;
		var divFirst = $('#section-1').position().top;
		var divSecond = $('#section-2').position().top;
		var divThird = $('#section-3').position().top;
		var divFourth = $('#section-4').position().top;
		var divFifth = $('#section-5').position().top;
		var divSixth = $('#section-6').position().top;
		var divSeventh = $('#section-7').position().top;
		var divEight = $('#section-8').position().top;
		var divNinth = $('#section-9').position().top;
		var divTenth = $('#section-10').position().top;
		var divEleventh = $('#section-11').position().top;
		
		
		if(divFirst < sectionTop && divSecond > sectionTop) {
			$('header ul li').removeClass('currentCh');
			$('header ul li.one').addClass('currentCh');
		}
		else if(divSecond < sectionTop && divThird > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.two').addClass('currentCh');
		}
		else if(divThird < sectionTop && docBottom > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.three').addClass('currentCh');
		}
		/* else if(divFourth < sectionTop && divFifth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.four').addClass('currentCh');
		}
		else if(divFifth < sectionTop && divSixth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.five').addClass('currentCh');
		}
		else if(divSixth < sectionTop && divSeventh > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.six').addClass('currentCh');
		}
		else if(divSeventh < sectionTop && divEight > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.seven').addClass('currentCh');
		}
		else if(divEight < sectionTop && divNinth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.eight').addClass('currentCh');
		}
		else if(divNinth < sectionTop && divTenth > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.nine').addClass('currentCh');
		}
		else if(divTenth < sectionTop && divEleventh > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.ten').addClass('currentCh');
		}
		else if(divEleventh < sectionTop && docBottom > sectionTop){
			$('header ul li').removeClass('currentCh');
			$('header ul li.eleven').addClass('currentCh');
		} */
		
	});
	
	$('.sub_menu li.three').click(function() {
		$('header ul li').removeClass('currentCh');
		$(this).addClass('currentCh');	
		
		$('#section-3').goTo();
	});
	
	$('.sub_menu li.two').click(function() {
		$('header ul li').removeClass('currentCh');
		$(this).addClass('currentCh');	
		
		$('#section-2').goTo();
	});
	
	$('.sub_menu li.one').click(function() {
		$('header ul li').removeClass('currentCh');
		$(this).addClass('currentCh');	
		
		$('#section-1').goTo();
	});

// end doc ready functions
});

$.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; 
    }