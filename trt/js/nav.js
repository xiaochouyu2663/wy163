(function() {
    var mySwiper1 = new Swiper('#Order', {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
    })
    swiperWidth1 = mySwiper1.container[0].clientWidth;
    maxTranslate1 = mySwiper1.maxTranslate();
    maxWidth1 = -maxTranslate1 + swiperWidth1 / 2;
    mySwiper1.on('tap', function(swiper, e) {
        slide = swiper.slides[swiper.clickedIndex];
        slideLeft = slide.offsetLeft;
        slideWidth = slide.clientWidth;
        slideCenter = slideLeft + slideWidth / 2;


        mySwiper1.setWrapperTransition(300)

        if (slideCenter < swiperWidth1 / 2) {

            mySwiper1.setWrapperTranslate(0)

        } else if (slideCenter > maxWidth) {

            mySwiper1.setWrapperTranslate(maxTranslate)

        } else {

            nowTlanslate = slideCenter - swiperWidth1 / 2

            mySwiper1.setWrapperTranslate(-nowTlanslate)

        }

        $("#Order  .active").removeClass('active')

        $("#Order .swiper-slide").eq(swiper.clickedIndex).addClass('active')

    })
})()