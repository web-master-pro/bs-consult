$(window).scroll(function() {

    var h = $(".s-faces").offset().top - 20;

    if ($(this).scrollTop() > h) {
        $(".page__mobile-menu-trigger").addClass("on");
    };

    if ($(this).scrollTop() < h) {
        $(".page__mobile-menu-trigger").removeClass("on");
    };

});
