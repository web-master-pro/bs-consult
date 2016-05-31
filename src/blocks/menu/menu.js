$(document).ready(function(){

    $(".menu__link").mPageScroll2id({
        offset: 0,
        scrollSpeed: 1500,
        autoScrollSpeed: true,
        scrollEasing: "swing",
        scrollingEasing: "swing",
        highlightClass: "active",
        targetClass: "scroll-target",
        forceSingleHighlight: true
    });

    function resetMenu(){
        $(".page__menu")
            .removeClass("shrink")
            .removeClass("compact")
            .removeClass("mini")
            .removeClass("hidden");
    };

    function positionMenu() {
        var menuHeight = $(".page__menu").height(),
            winHeight = $(window).height(),
            menuTop = 20;
        if (menuHeight < winHeight) {
            menuTop = (winHeight - menuHeight - 10) / 2;
        };
        $(".page__menu").css({"top": menuTop})
    }

    function resizeMenu(){
        var winHeight = $(window).height(),
            winWidth  = $(window).width();
        resetMenu();
        if (winWidth > 1700) {
            if ((winHeight > 670) && (winHeight < 750))  {
                $(".page__menu").addClass("shrink");
            } else if ((winHeight > 670) && (winHeight < 750)){
                $(".page__menu").addClass("compact");
            };
        } else if (winWidth < 1000){
            $(".page__menu").addClass("hidden");
        } else {
            $(".page__menu").addClass("mini");
        }
        positionMenu();
    };

    resizeMenu();
    $(window).bind('resize',function() {
        resizeMenu();
    });

});

$(window).scroll(function() {

    var h1 = $(".s-analysis").offset().top - 300
        h2 = $(".s-cases").offset().top,
        position = $(this).scrollTop();

    if ((position > h1) && (position < h2)) {
        $(".page__menu").addClass("on");
    };

    if ((position < h1) || (position > h2)) {
        $(".page__menu").removeClass("on");
    };

});
