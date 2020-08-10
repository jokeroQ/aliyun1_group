window.addEventListener('load', function() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            clickableClass: 'my-pagination-clickable',
        },
        autoplay: true,
        loop: true,
    });

})