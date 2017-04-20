$(function(){
	var a=$('.footer').offset().top;
	var b=$(window).height();
	var c= b-a;
	var d=$('.footer').height();
	if (c>d){
		$('.footer').css({'position':'fixed','left':'0','bottom':'0'})
	}
	$(".fhdb, .fix2").bind('click',function(){
		$('body,html').animate({ scrollTop: 0 }, 400);
		return false;
	})
	$(".rippler").rippler();
	$('parallax1').parallax();
	var wow = new WOW({
		boxClass: 'qytx',
		animateClass: 'animated',
		offset: 180
	});
	wow.init();
	var navH = $(".idx_nav").offset().top;
	$(window).bind('scroll',function(){
		var scrollTop = $(document).scrollTop();
		var fixNav = $(document).scrollTop();
		scrollTop > 100 ? $('.ritfix').fadeIn() : $('.ritfix').fadeOut();
		if(scrollTop>navH){
			$('.idx_nav').addClass('fixnav');
		
		}else{
			$('.idx_nav').removeClass('fixnav');
		}
	})
})
	