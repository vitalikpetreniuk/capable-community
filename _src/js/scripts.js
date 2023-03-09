// $('.burger').on('click', function () {
// 	$(this).toggleClass('_active');
// 	$('.menu').toggleClass('_active');
// 	$('body').toggleClass('_lock');
// })



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








