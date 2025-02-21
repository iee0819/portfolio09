$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },
    });
});

$(function () {
    const MSS = new Swiper('.main_sns_slide',
        {
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            slidesPerView: 4,
            spaceBetween: 8,
            centeredSlides: true,
        })
})

