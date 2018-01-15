$(function(){
	var isiOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod'),
			isAndroid = navigator.userAgent.match('Android'),
			isDesktop = !isiOS&&!isAndroid;

	if (isiOS||isAndroid) {
	$('.li2,.li1 .a2,.iproject_list li.li1 em').hide();
	}
	
	/*var subnvaul=0;
	var case_titul=0;
	$('.subnva li').each(function(index,data){
	subnvaul+=$(this).outerWidth(true);
	return subnvaul;
	})
	
	$('.subnva ul').width(subnvaul);*/
	
	$('.case_tit ul').width($('.case_tit li').outerWidth(true)*$('.case_tit li').length);
	$('.news_page .pd').width($('.news_page .pd *').outerWidth(true)*$('.news_page .pd *').length);
	
	$('.job_list .job_top').click(function(){
		$(this).next('.job_bottom').slideToggle().parent('li').addClass('curr').siblings().removeClass('curr').find('.job_bottom').slideUp();
	})
	
	
	/*$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: true,
	  centerMode: false,
	  focusOnSelect: true,
	  infinite: true,
	  responsive: [
		{
		  breakpoint: 440,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		  }
		}
		]
	});
	*/
	$('.inews_list .single-item').slick({
		dots: false,
		fade: false,
		arrows:true,
		infinite: true,//不循环false
		autoplay: true,//自动播放
		autoplaySpeed: 3000,//自动时间
		pauseOnHover:false,
		adaptiveHeight: true,
		speed: 1000,//滚动速度
	});
	
	$('.ibanner .single-item').slick({
		dots: true,
		fade: true,
		arrows:true,
		infinite: true,//不循环false
		autoplay: true,//自动播放
		autoplaySpeed: 3000,//自动时间
		pauseOnHover:false,
		adaptiveHeight: true,
		speed: 1000,//滚动速度
	});
	$('.ibanner .slick-dots').css({'margin-left':-$('.ibanner .slick-dots li').length*$('.ibanner .slick-dots li').outerWidth(true)/2});
	$('.case_info .single-item').slick({
		dots: true,
		lazyLoad: 'ondemand',
		fade: true,
		arrows:true,
		infinite: true,//不循环false
		autoplay: true,//自动播放
		autoplaySpeed: 5000,//自动时间
		pauseOnHover:false,
		adaptiveHeight: true,
		speed: 500,//滚动速度
	});
	$('.case_info .slick-dots').css({'margin-left':-$('.case_info .slick-dots li').length*$('.case_info .slick-dots li').outerWidth(true)/2});
	
	$('.ibusiness .single-item').slick({
		dots: true,
		//fade: true,
		arrows:true,
		infinite: true,//不循环false
		//autoplay: true,//自动播放
		//autoplaySpeed: 3000,//自动时间
		pauseOnHover:false,
		adaptiveHeight: true,
		slidesToShow: 3,
        slidesToScroll: 1,
		speed: 500,//滚动速度
		responsive: [
		{
		  breakpoint: 980,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 790,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	$('.ibusiness .slick-dots').css({'margin-left':-$('.ibusiness .slick-dots li').length*$('.ibusiness .slick-dots li').outerWidth(true)/2});
	$('.icase .single-item').slick({
		dots: true,
		arrows:true,
		infinite: true,//不循环false
		pauseOnHover:false,
		adaptiveHeight: true,
		slidesToShow: 3,
        slidesToScroll: 3,
		speed: 500,//滚动速度
		responsive: [
		{
		  breakpoint: 980,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint: 790,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	$('.icase .slick-dots').css({'margin-left':-$('.icase .slick-dots li').length*$('.icase .slick-dots li').outerWidth(true)/2});
	
	$('.ipt').focus(function(){
		$(this).attr('placeholder','')
	}).blur(function(){
		$(this).attr('placeholder',$(this).attr('placeholder_data'))
	})
	
	$('.menu-link').live("click",function(){
		if($('.menu').is(':hidden')){
			$(this).addClass('active');
			$('.menu').stop(true,false).slideDown();
		}else{
			$(this).removeClass('active');
			$('.menu').stop(true,false).slideUp();
		}
	})
	$(window).resize(function(){
		$('.footer_nav ul li,.menu').removeAttr('style');
		$('.case_tit ul').width($('.case_tit li').outerWidth(true)*$('.case_tit li').length);
		$('.news_page .pd').width($('.news_page .pd *').outerWidth(true)*$('.news_page .pd *').length);
		$('.news_list li .img').height($('.news_list li .img').width()*(250/480))
	})
	
	
	
	$('.footer_nav li.h3').live("click",function(){
		if(!$(this).parents('ul').hasClass('curr')){
		$(this).siblings().removeClass('lihide').addClass('lishow').parents('ul').addClass('curr').siblings().removeClass('curr').find('.p').removeClass('lishow').addClass('lihide');
		}else{
		$(this).parents('ul').removeClass('curr').find('.p').removeClass('lishow').addClass('lihide');
		}
	});
	
	$('.honor_list .h3').live("click",function(){
		if($(this).hasClass('curr')){
			$(this).removeClass('curr').next('.dl').slideUp();
		}else{
			//$(this).addClass('curr').next('.dl').slideDown()
			$(this).addClass('curr').next('.dl').slideDown().siblings('.dl').slideUp();
			$(this).siblings('.h3').removeClass('curr');
		}
	})
	
	$('.maximg').live("click",function(){
		$('.honor_box .img img').attr('src',$(this).attr('maximg'))
		$('.honor_bg,.honor_box').fadeIn();
	})
	
	$('.honor_list .text').live('click',function(){
		$(this).siblings('.img').find('.maximg').click()
	})
	
	$('.news_list li .img').height($('.news_list li .img').width()*(250/480));
//    $('.login_top').live("click",function(){
//		  tck_show();
//	})
});

function explain_show(){
	$('.explain_bg,.explain_box').fadeIn();
}
function explain_hide(){
	$('.explain_bg,.explain_box').fadeOut();
}

function job_show(){
	$('.job_bg,.job_box').fadeIn();
}
function job_show(title){
	$('.job_bg,.job_box').fadeIn();
    $('.job_box #job_tit').html(title);
    $('.job_box #txttitle').val(title);
}
function job_hide(){
	$('.job_bg,.job_box').fadeOut();
}
function honor_hide(){
	$('.honor_bg,.honor_box').fadeOut();
}
    function tck_show() {
        $('.tck_bg,.tck_box').fadeIn();
    }
    function tck_hide() {
        $('.tck_bg,.tck_box').fadeOut();
    }