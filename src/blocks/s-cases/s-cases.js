$(document).ready(function() {

    $('.cases').slick({
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        prevArrow: $(".js-cases-prev"),
        nextArrow: $(".js-cases-next"),
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false
                }
            }
        ]
    });

});
