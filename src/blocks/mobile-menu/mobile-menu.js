var mobileMenu = function(){
    var animateSpeed = 300
        menuIcon = $(".mobile-menu-trigger"),
        menuPanel = $(".mobile-menu"),
        menuPanelWidth = 320,
        page = $(".page");

    var mobileMenuToggle = function(){
        if (menuPanel.hasClass("opened")){

            menuPanel.animate({
                left: "-" + menuPanelWidth + "px"
            }, animateSpeed);

            menuPanel.removeClass("opened");
            // menuIcon.removeClass("on");

            $(".page__content").removeClass("blur");

        } else {

            menuPanel.animate({
                left: "0"
            }, animateSpeed);

            menuPanel.addClass("opened");
            // menuIcon.addClass("on");

            // $(".page__content").addClass("blur");

        };

    };

    menuIcon.click(function(e){
        e.preventDefault();
        mobileMenuToggle();
        return false;
    });

    $(".mobile-menu .menu__link").click(function(){
        mobileMenuToggle();
        return true;
    });

    $(document).click(function(e){
        var result = true;
        if (menuPanel.hasClass("opened")){
            e.preventDefault();
            mobileMenuToggle();
            result = false;
        };
        return result;
    });

};

$(document).ready(mobileMenu);
