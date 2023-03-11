
//burger

$('.burger').on('click', function () {
	$(this).toggleClass('burger-active');
	$('.menu').toggleClass('menu-active');
	$('body').toggleClass('overflow');
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

$('.btns-wrap > .btn-link').hover(
	function() {
		$('.btns-wrap > .btn-link').removeClass('btn-link-active');
		$(this).addClass('btn-link-active');
	}
);





//slider review

var swiperReviews = new Swiper(".swiperReviews", {
    loop: true,
    speed: 1200,
	slidesPerView: 1.7,
	spaceBetween: 30,
	breakpoints: {
            
		// 320: {
		//   slidesPerView: 2.05,
		//   spaceBetween: 10,
		// },
	  
		// 480: {
		//   slidesPerView: 2.03,
		//   spaceBetween: 10,
		// },

		// 760: {
		//   slidesPerView: 2,
		//   spaceBetween: 30,
		// },

		// 1100: {
		//   slidesPerView: 3,
		//   spaceBetween: 30,
		// },



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















