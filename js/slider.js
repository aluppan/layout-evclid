const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    effect: 'fade',
    speed: 1500,

    // touchEventsTarget: 'container',
    // touchRatio: 1,
    // touchAngle: 45,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
