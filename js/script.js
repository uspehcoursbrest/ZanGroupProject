$(document).ready(function () {
    $(".card").mouseover(function () {
        $(this).find(".thumbnail").stop().fadeIn()
    });
    $(".card").mouseout(function () {
        $(this).find(".thumbnail").stop().fadeOut()
    });

    var accord = $(".accordion");
    accord.find(".title:not(.active)").siblings("div").slideUp();
    accord.find(".title").on("click", function () {
        $(this).siblings("div").stop().slideToggle(500);
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        }
        else {
            $(this).addClass("active");
        }
    });

    var btnUp =$(".up");
    btnUp.hide();
    $(window).scroll(function () {
        if($(this).scrollTop() > 50){
            btnUp.fadeIn();
        } else {
            btnUp.fadeOut();

        }

    })
    btnUp.click(function () {
        $("body,html").animate({
            scrollTop:0
        }, 500);
        return false;
    })
    $(".mainSlider").owlCarousel({
        dots: true,
        nav: false,
        items: 1,
        loop:true,
        dotsContainer: "#customDots"
    });

    $("#tabs").tabs({
        active: 0
    });
    $("select").selectric();




})




