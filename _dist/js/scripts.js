// $('.burger').on('click', function () {
// 	$(this).toggleClass('_active');
// 	$('.menu').toggleClass('_active');
// 	$('body').toggleClass('_lock');
// })
// import Swiper, { Pagination } from 'swiper';

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



//swiper review

var swiperReviews = new Swiper(".swiperReviews", {
    loop: true,
    speed: 1200,
		slidesPerView: 1.7,
		spaceBetween: 30,
		// pagination: {
		//   el: ".swiper-pagination",
		//   clickable: true,
		  
		// },

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









