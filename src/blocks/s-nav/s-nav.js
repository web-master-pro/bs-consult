$(document).ready(function(){

    function scrollTo(element) {
        destination = $(element).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1700);
        return false;
    };

    var duration = 100;

    $(".nav-1__item").mouseenter(function(){
        $(this).next().fadeIn(duration);
    })

    $(".nav-1__item-more").mouseleave(function(){
        $(this).fadeOut(duration);
    });

    $(".nav-1__item-more--1")
    .mousemove(function(e){
        var clientX = e.pageX - $(this).offset().left,
            clientY = e.pageY - $(this).offset().top;
        if ($(window).width() > 640) {
            if ((clientX > 180) && (clientY < 205)){
                $(this).fadeOut(duration);
            }
        }
    })
    .click(function(){
        scrollTo("#operational-consulting");
    });

    $(".nav-1__item-more--2")
    .mousemove(function(e){
        var clientX = e.pageX - $(this).offset().left,
            clientY = e.pageY - $(this).offset().top;
        if ($(window).width() > 640) {
            if (((clientX < 180) || (clientX > 360)) && (clientY < 205)){
                $(this).fadeOut(duration);
            }
        }
    })
    .click(function(){
        scrollTo("#hr-consulting");
    });

    // $(".nav-1__item-more--3")
    // .mousemove(function(e){
    //     var clientX = e.pageX - $(this).offset().left,
    //         clientY = e.pageY - $(this).offset().top;
    //     if ($(window).width() > 640) {
    //         if ((clientX < 360) && (clientY < 205)){
    //             $(this).fadeOut(duration);
    //         }
    //     }
    // })
    // .click(function(){
    //     scrollTo("#marketing-consulting");
    // });

    $(".nav-1__item-more--3")
    .mousemove(function(e){
        var clientX = e.pageX - $(this).offset().left,
            clientY = e.pageY - $(this).offset().top;
        if ($(window).width() > 640) {
            if ((clientX > 180) && (clientY > 205)){
                $(this).fadeOut(duration);
            }
        }
    })
    .click(function(){
        scrollTo("#marketing-consulting");
    });

    $(".nav-1__item-more--4")
    .mousemove(function(e){
        var clientX = e.pageX - $(this).offset().left,
            clientY = e.pageY - $(this).offset().top;
        if ($(window).width() > 640) {
            if (((clientX < 180) || (clientX > 360)) && (clientY > 205)){
                $(this).fadeOut(duration);
            }
        }
    })
    .click(function(){
        scrollTo("#franchising");
    });

    // 2
    $(".nav-2__item").mouseenter(function(){
        $(this).next().fadeIn(duration);
    })

    $(".nav-2__item-more").mouseleave(function(){
        $(this).fadeOut(duration);
    });

    $(".nav-2__item-more--1")
    .mousemove(function(e){
        var clientX = e.pageX - $(this).offset().left,
            clientY = e.pageY - $(this).offset().top;
        if ($(window).width() > 640) {
            if ((clientX > 180) && (clientY < 205)){
                $(this).fadeOut(duration);
            }
        }
    })
    .click(function(){
        scrollTo("#analysis");
    });

    $(".nav-2__item-more--2")
    .mousemove(function(e){
        var clientX = e.pageX - $(this).offset().left,
            clientY = e.pageY - $(this).offset().top;
        if ($(window).width() > 640) {
            if ((clientX < 180) && (clientY < 205)){
                $(this).fadeOut(duration);
            }
        }
    })
    .click(function(){
        scrollTo("#funding");
    });

    $(".nav-2__item-more--3")
    .mousemove(function(e){
        var clientX = e.pageX - $(this).offset().left,
            clientY = e.pageY - $(this).offset().top;
        if ($(window).width() > 640) {
            if ((clientX > 180) && (clientY > 205)){
                $(this).fadeOut(duration);
            }
        }
    })
    .click(function(){
        scrollTo("#accounting");
    });

    $(".nav-2__item-more--4")
    .mousemove(function(e){
        var clientX = e.pageX - $(this).offset().left,
            clientY = e.pageY - $(this).offset().top;
        if ($(window).width() > 640) {
            if ((clientX < 180) && (clientY > 205)){
                $(this).fadeOut(duration);
            }
        }
    })
    .click(function(){
        scrollTo("#goverment");
    });

});
