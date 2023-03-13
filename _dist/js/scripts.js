
//burger

$('.burger').on('click', function () {	
	$('#menu').addClass('overlay');
	$('body').addClass('overflow');

	if( $('#menu').hasClass('overlay') ){
		$('.widget-btns').css('display', 'none');
	}

})

$('.burger-active').on('click', function () {
	$('#menu').removeClass('overlay');
	$('body').removeClass('overflow');
	$('.widget-btns').css('display', 'block');
})



//scroll header

$(window).on("scroll",function() {
	var height = $(window).scrollTop();
		
	if(height > 2){			
		$('header').addClass('header-fixed');	
	} else{				
		$('header').removeClass('header-fixed');			
	}
});




//hover efect

// $('.btns-wrap-section-top > .btn-link').hover(
// 	function() {
// 		$('.btns-wrap-section-top > .btn-link').removeClass('btn-link-active');
// 		$(this).addClass('btn-link-active');
// 	}
// );

// $('.btns-wrap-child-population > .btn-link').hover(
// 	function() {
// 		$('.btns-wrap-child-population > .btn-link').removeClass('btn-link-active');
// 		$(this).addClass('btn-link-active');
// 	}
// );

// $('.btns-wrap-сommunity-strengthening > .btn-link').hover(
// 	function() {
// 		$('.btns-wrap-сommunity-strengthening > .btn-link').removeClass('btn-link-active');
// 		$(this).addClass('btn-link-active');
// 	}
// );





//slider review

var swiperReviews = new Swiper(".swiperReviews", {
    loop: true,
    speed: 1200,
	slidesPerView: 1.7,
	spaceBetween: 30,
	breakpoints: {
        
		320: {
		  slidesPerView: 1.4,
		  spaceBetween: 20,
		},
	  
		480: {
		  slidesPerView: 1.4,
		  spaceBetween: 20,
		},
	
		760: {
		  slidesPerView: 1.7,
		  spaceBetween: 30,
		},
	
		1100: {
		  slidesPerView: 1.7,
		  spaceBetween: 30,
		},
	
	}

});


//slider News

var swiperNews = new Swiper(".swiperNews", {
	loop: true,
	speed: 1200,
	slidesPerView: 4,
	spaceBetween: 30,
	pagination: {
	  el: ".swiper-pagination-news",
	  clickable: true,
	  
	},
	breakpoints: {
            
		320: {
		  slidesPerView: 1.7,
		  spaceBetween: 20,
		},
	  
		480: {
		  slidesPerView: 1.7,
		  spaceBetween: 20,
		},

		760: {
		  slidesPerView: 3,
		  spaceBetween: 30,
		},

		1100: {
		  slidesPerView: 4,
		  spaceBetween: 30,
		},



	}

});




//slider Blogs

var swiperBlogs = new Swiper(".swiperBlogs", {
	loop: true,
	speed: 1200,
	slidesPerView: 3,
	spaceBetween: 30,
	pagination: {
	  el: ".swiper-pagination-blogs",
	  clickable: true,
		  
	},
	breakpoints: {
        
		320: {
		  slidesPerView: 1.25,
		  spaceBetween: 20,
		},
	  
		480: {
		  slidesPerView: 1.25,
		  spaceBetween: 20,
		},
	
		760: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},
	
		1100: {
		  slidesPerView: 3,
		  spaceBetween: 30,
		},
	
	}

});



    
//widget-btns

$('.widget-btn').on('click', function(){
	
	if( $(this).hasClass('widget-btn-active') ){
		$(this).removeClass('widget-btn-active')
	}
	else{
		$('.widget-btn').removeClass('widget-btn-active')
		$(this).addClass('widget-btn-active');
	}
});;




//read more

$(document).on("click",".expand_testimonial",function () {
    var fullText = $(this).parent().find(".full_testimonial");
        $(".full_testimonial").hide();
    $(fullText).show("slow");
    
  })

  $(document).on("click",".full_testimonial .close",function () {
    $(this).parent().hide();    
    
  })


//menu

$('.btn-about-project').on('click', function () {	
	$('.about-project-navigatiob').toggleClass("about-project-navigatiob-active");
	$(this).toggleClass('btn-about-project-active');
})


//lang in mob menu

$('.lang-menu a').on('click', function () {	
	$('.lang-menu a').removeClass('active-lang');
	$(this).addClass('active-lang');
})


///custom-select-language descctop

$('.lang-desctop').on('click', function () {	
	$(this).toggleClass('lang-desctop-active');

})

$('.lang-list a').on('click', function () {	
	$(".lang-desctop-wrap").empty();
	$(this).clone().appendTo('.lang-desctop-wrap');

})




// $(".lang-desctop-wrap")







