$(document).ready(function() {

	$('.reviewsContainerSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
		arrows: false
  });

	$('.tablePContainerSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
		arrows: false
  });

	$.fn.slideFadeToggle = function(speed, easing, callback){
		return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
	};

	$('.answerBlock').click(function(){
		$(this).toggleClass('open');
		$(this).children('.textAnswer').slideFadeToggle('slow');
	});

	$('.moreReviews').click(function(){
		$(".reviewsContainerSlider").slick('slickNext');
	});

	$('.btnsSl .leftB').click(function(){
		$(".tablePContainerSlider").slick('slickPrev');
	});

	$('.btnsSl .rightB').click(function(){
		$(".tablePContainerSlider").slick('slickNext');
	});

	$('.btnMobileMenu').click(function(){
		$('.menuList').slideFadeToggle('slow');
	});

	$('.cd').click(function(){
		$('.winCallGlass').addClass('open');
	});

	$('.titleWin .close').click(function(){
		$('.winCallGlass').removeClass('open');
	});

	$('a[href^="#"]').on('click', function(event) {
		event.preventDefault();
		if($(document).width() <= 1150){
			$('.menuList').slideFadeToggle('slow');
		}
		var sc = $(this).attr("href"),
				dn = $(sc).offset().top;
		$('html, body').animate({scrollTop: dn}, 1000);
	});

});
