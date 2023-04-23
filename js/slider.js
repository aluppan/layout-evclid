const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    allowTouchMove: true,
    effect: 'fade',
    speed: 1000,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
