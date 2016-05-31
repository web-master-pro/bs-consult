$(document).ready(function() {

    $('.js-gallery').magnificPopup({
        type: 'image',
        gallery:{
            enabled:true
        },
        fixedContentPos: false
    });

    $('.thanks').slick({
        infinite: true,
        speed: 1000,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $(".js-thanks-prev"),
        nextArrow: $(".js-thanks-next"),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 370,
                settings: {
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });

});
