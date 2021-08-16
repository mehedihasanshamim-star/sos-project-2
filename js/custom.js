(function ($) {
    "use strict";


    $('.video-popup-btn').magnificPopup({
        type: 'iframe',
        gallery:{
            enabled: true
        }
    });


    /* sticky- */
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 80) {
			$("#sticky-header").removeClass("sticky");
		} else {
			$("#sticky-header").addClass("sticky");
		}
	});

    
    //data bg image sec
    $("[data-bg-img]").each(function () {
        var bg = $(this).data("bg-img");
        $(this).css({
            "background": "no-repeat center/cover url(" + bg + ")",
        })
    })

    $("[data-bg-color]").each(function () {
        var bg_color = $(this).data("bg-color");
        $(this).css({
            "background-color": (bg_color)
        })
    })

    //top scroll
    var cre_top_scroll = $('.top-scroll');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            cre_top_scroll.addClass('show');
        } else {
            top-scroll.removeClass('show');
        }
    });
    cre_top_scroll.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

}(jQuery));