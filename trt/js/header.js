(function() {
    var mySwiper = new Swiper('#topNav', {
        freeMode: true,
        freeModeMomentumRatio: 0.5,
        slidesPerView: 'auto',
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        onSlideChangeEnd: function(swiper) {
            if (swiper.isEnd) {
                swiper.nextButton[0].style.display = 'none';
            } else {
                swiper.nextButton[0].style.display = 'block';
            }

        }
    })

    swiperWidth = mySwiper.container[0].clientWidth;
    maxTranslate = mySwiper.maxTranslate();
    maxWidth = -maxTranslate + swiperWidth / 2;


    $(".swiper-container").on('touchstart', function(e) {
        e.preventDefault()
    })
    $('.swiper-button-prev').on('tap', function(e) {
    })
    mySwiper.on('tap', function(swiper, e) {
        slide = swiper.slides[swiper.clickedIndex];
        slideLeft = slide.offsetLeft;
        slideWidth = slide.clientWidth;
        slideCenter = slideLeft + slideWidth / 2;


        mySwiper.setWrapperTransition(300)

        if (slideCenter < swiperWidth / 2) {

            mySwiper.setWrapperTranslate(0)

        } else if (slideCenter > maxWidth) {

            mySwiper.setWrapperTranslate(maxTranslate)

        } else {

            nowTlanslate = slideCenter - swiperWidth / 2

            mySwiper.setWrapperTranslate(-nowTlanslate)

        }

        $("#topNav  .active").removeClass('active')

        $("#topNav .swiper-slide").eq(swiper.clickedIndex).addClass('active')

    })

})()