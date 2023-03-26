
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
		
	if(height > 0){			
		$('header').addClass('header-fixed');
		// $("header .logo img").attr("src","img/logo-menu.png")	
	} else{				
		$('header').removeClass('header-fixed');	
		// $("header .logo img").attr("src","img/logo.png")			
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
	spaceBetween: 75,
	breakpoints: {
        
		320: {
		  slidesPerView: 1.4,
		  spaceBetween: 20,
		},
	  
		480: {
		  slidesPerView: 1.4,
		  spaceBetween: 20,
		},
	
		820: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},
	
		1100: {
		  slidesPerView: 1.7,
		  spaceBetween: 75,
		},
	
	}

});


//slider News

var swiperNews = new Swiper(".swiperNews", {
	loop: true,
	speed: 1200,
	slidesPerView: 4.5,
	spaceBetween: 40,
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

		820: {
		  slidesPerView: 3,
		  spaceBetween: 30,
		},

		1100: {
		  slidesPerView: 4.5,
		  spaceBetween: 40,
		},



	}

});




//slider Blogs

var swiperBlogs = new Swiper(".swiperBlogs", {
	loop: true,
	speed: 1200,
	slidesPerView: 3.5,
	spaceBetween: 40,
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
	
		820: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},
	
		1100: {
		  slidesPerView: 3.5,
		  spaceBetween: 40,
		},
	
	}

});



//swiper Courses

var swiperCourses = new Swiper(".swiperCourses", {
	loop: true,
	speed: 1200,
	slidesPerView: 3.5,
	spaceBetween: 50,
	breakpoints: {
        
		320: {
		  slidesPerView: 2.15,
		  spaceBetween: 18,
		},
	  
		480: {
		  slidesPerView: 2.15,
		  spaceBetween: 18,
		},
	
		820: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},
	
		1100: {
		  slidesPerView: 3.5,
		  spaceBetween: 50,
		},
	
	}

});



    
//widget-btns

// $('.widget-btn').on('click', function(){
	
// 	if( $(this).hasClass('widget-btn-active') ){
// 		$(this).removeClass('widget-btn-active')
// 	}
// 	else{
// 		$('.widget-btn').removeClass('widget-btn-active')
// 		$(this).addClass('widget-btn-active');
// 	}
// });

$('.widget-btn').hover(
	function() {

		if( $(this).hasClass('widget-btn-active') ){
			$(this).removeClass('widget-btn-active')
		}
		else{
			$('.widget-btn').removeClass('widget-btn-active')
			$(this).addClass('widget-btn-active');
		}
	}
);




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

$('.lang-desctop').on('click', function (e) {	
	e.preventDefault();
	$(this).toggleClass('lang-desctop-active');

})

$('.lang-list a').on('click', function (e) {	
	e.preventDefault();
	const lang = $(this).data("lang");
	$(".lang-desctop-wrap a").removeClass("active");
	$(`.lang-desctop-wrap a[data-lang="${lang}"]`).addClass("active");

	$(".lang-list a").removeClass("active");
	$(`.lang-list a[data-lang="${lang}"]`).addClass("active");
})




// togle for ask section

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');


 

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
	$('.accordion-item, button').removeClass("img-class-active");
	
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
	$(this).addClass("img-class-active")
	
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// $(".li-visability").on("click",function (event) {

// 	const target = $(this).data("index");	 
// 	const arrow = $(this).find("img");

// 	$(".togle-li").each(function (index, element) {

// 	  if (target === $(this).data("index")) {

// 		if( $(this).hasClass('togle-li-active') ){

// 			$(this).removeClass("togle-li-active");
// 			arrow.removeClass("img-class-active")
// 		}
// 		else{
// 			$(".togle-li").removeClass("togle-li-active")

// 			$('.img-class').removeClass('img-class-active')
// 			$(this).addClass("togle-li-active");
// 			arrow.addClass("img-class-active")
// 		}
		  
// 	  } 
// 	});

// });



///step 

$('.step').on('click', function(){
	
	if( $(this).hasClass('step-active') ){
		$(this).removeClass('step-active')
	}
	else{
		$('.step').removeClass('step-active')
		$(this).addClass('step-active');
	}
});


//course-page card course active

$('.course-card').on('click', function(){
	if( $(this).hasClass('course-card-active') ){
		$(this).removeClass('course-card-active')
	}
	else{
		$('.course-card').removeClass('course-card-active')
		$(this).addClass('course-card-active');
	}
});



///btns copy


///btn copy adress
$('.copy-btn-adress').on('click', function(){
	console.time('time1');
	var temp = $("<input>");

  	$("body").append(temp);
	temp.val($('#adress-copy').text()).select();
	document.execCommand("copy");
	temp.remove();
	alert('Текст скопіовано')
});

///btn copy telephone
$('.copy-btn-telephone').on('click', function(){
	console.time('time1');
	var temp = $("<input>");

  	$("body").append(temp);
	temp.val($('#telephon-copy').text()).select();
	document.execCommand("copy");
	temp.remove();
	alert('Текст скопіовано')
});

///btn copy email
$('.copy-btn-email').on('click', function(){
	console.time('time1');
	var temp = $("<input>");

  	$("body").append(temp);
	temp.val($('#email-copy').text()).select();
	document.execCommand("copy");
	temp.remove();
	alert('Текст скопіовано')
});



///black navigation
if(window.location.toString().indexOf('contacts-page.html')>0){
	$('header').addClass("nav-black")
}

if(window.location.toString().indexOf('blog-articles.html')>0){
	$('header').addClass("nav-black")
}

if(window.location.toString().indexOf('blogs-page.html')>0){
	$('header').addClass("nav-black")
}

if(window.location.toString().indexOf('news-page.html')>0){
	$('header').addClass("nav-black")
}

if(window.location.toString().indexOf('news-articles.html')>0){
	$('header').addClass("nav-black")
}



///input contact
$('.input-container').on('click', function(){
	if( $(this).hasClass('input-container-active') ){
		$(this).removeClass('')
	}
	else{
		$('.input-container').removeClass('input-container-active')
		$(this).addClass('input-container-active');
	}
});


//navigation active

$(function($) {
	var path = window.location.href; 
	
	$('header nav ul li a').each(function() {
	  if (this.href === path) {
		$(this).addClass('active-nav');
	  }
	});
  });


//jq-mask

// $("#phone-number").mask("(999) 999-99-99", {placeholder: "(0__) ___-__-__"});

$("#phone-number-your").mask("(+380) 999-99-99", { placeholder: "(+380)"});
  








