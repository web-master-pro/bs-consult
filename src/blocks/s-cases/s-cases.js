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

    $('.cases').on('beforeChange', function(event, slick, currentSlide,nextSlide){
        var slideNumber = nextSlide + 1;
        $(".s-cases__main").css("background-image", "url(assets/img/s-cases-bg-"+ slideNumber + ".jpg)");
    });

});
