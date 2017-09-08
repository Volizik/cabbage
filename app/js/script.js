$(function () {
    $(window).on('mousemove', function (e) {
        function parallax () {
            if (window.innerWidth > 1200) {
                var w = $(window).width();
                var h = $(window).height();

                var offsetX = 0.5 - e.pageX / w;
                var offsetY = 0.5 - e.pageY / h;

                $(".parallax").each(function (i, el) {
                    var offset = parseInt($(el).data('offset'));

                    var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px";

                    $(el).css({
                        'transform': translate
                    })
                })
            }
        }
        parallax();
        $(window).resize(function() {
            parallax();
        })
    });



    $('.s11__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.s12--slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
});