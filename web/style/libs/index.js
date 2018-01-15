$(function() {
    var w = $(window).width();
    // banner 
    var swiperBanner = new Swiper('.home-banner .swiper-container', {
        pagination: '.home-banner .swiper-pagination',
        nextButton: '.home-banner .swiper-button-next',
        prevButton: '.home-banner .swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        grabCursor: true,
        keyboardControl: true,
        noSwiping: true,
        observer: true,
        click: true,
        autoplay: 3000,
        speed: 2000,
        preventClicks : false
    });
    var h = $(window).height();
    if(w>992) {
        $(".home-banner").height(h);
    }
});
