window.addEventListener('load', function() {
    var mySwiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            clickableClass: 'my-pagination-clickable',
            // type: 'progressbar',
            // renderProgressbar: function(progressbarFillClass) {
            //     return '<span class="' + progressbarFillClass + '"></span>';
            // }
        },
        autoplay: true,
        loop: true,
    });

})