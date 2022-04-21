
// loader
$(document).ready(function () {
    $('.loader').hide();
});
// navbar
$('.nav .nav-item').on('click', function () {
    $(this).addClass('link1').siblings().removeClass('link1');
});
// navbar scroll sticky
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');
    }
});


// progress skill
$(window).scroll(function () {
    var Scroll1 = $(this).scrollTop();

    // parallax skill

    // parallax html progress 1
    if (Scroll1 > $('.progress-parallax1').offset().top - 500) {
        $('.progress-parallax1').each(function (h) {
            setTimeout(function () {
                $('.progress-parallax1').eq(h).addClass('progress-html')
            }, 300 * h);
        });
    }

    // parallax css progress 2
    if (Scroll1 > $('.progress-parallax2').offset().top - 500) {
        $('.progress-parallax2').each(function (c) {
            setTimeout(function () {
                $('.progress-parallax2').eq(c).addClass('progress-css')
            }, 300 * c);
        });
    }

    // parallax Javascript progress 3
    if (Scroll1 > $('.progress-parallax3').offset().top - 500) {
        $('.progress-parallax3').each(function (j) {
            setTimeout(function () {
                $('.progress-parallax3').eq(j).addClass('progress-javascript')
            }, 300 * j);
        });
    }

    // parallax PHP progress 4
    if (Scroll1 > $('.progress-parallax4').offset().top - 500) {
        $('.progress-parallax4').each(function (p) {
            setTimeout(function () {
                $('.progress-parallax4').eq(p).addClass('progress-php')
            }, 300 * p);
        });
    }

    // end parallax skill
    // progress skill



    // parallax about
    // img parallax about
    if (Scroll1 > $('.img-parallax').offset().top - 300) {
        $('.img-parallax').each(function (imgAbout) {
            setTimeout(function () {
                $('.img-parallax').eq(imgAbout).addClass('back')
            }, 300 * imgAbout);
        });
    }

    if (Scroll1 > $('.img-parallax2').offset().top - 300) {
        $('.img-parallax2').each(function (imgAbout) {
            setTimeout(function () {
                $('.img-parallax2').eq(imgAbout).addClass('back')
            }, 300 * imgAbout);
        });
    }
    // end parallax about

    // parallax title portfolio

    // img parallax
    if (Scroll1 > $('.img-parallax3').offset().top - 300) {
        $('.img-parallax3').each(function (imgPortfolio) {
            setTimeout(function () {
                $('.img-parallax3').eq(imgPortfolio).addClass('back2')
            }, 300 * imgPortfolio);
        });
    }
    // paragraf parallax
    if (Scroll1 > $('.paragraf-parallax').offset().top - 300) {
        $('.paragraf-parallax').each(function (imgPortfolio) {
            setTimeout(function () {
                $('.paragraf-parallax').eq(imgPortfolio).addClass('back2')
            }, 300 * imgPortfolio);
        });
    }
    // end title portfolio

    // parallax title blog
    // paragraf parallax
    if (Scroll1 > $('.paragraf-parallax2').offset().top - 300) {
        $('.paragraf-parallax2').each(function (imgPortfolio) {
            setTimeout(function () {
                $('.paragraf-parallax2').eq(imgPortfolio).addClass('back3')
            }, 300 * imgPortfolio);
        });
    }
    // img parallax
    if (Scroll1 > $('.img-parallax4').offset().top - 300) {
        $('.img-parallax4').each(function (imgPortfolio) {
            setTimeout(function () {
                $('.img-parallax4').eq(imgPortfolio).addClass('back3')
            }, 300 * imgPortfolio);
        });
    }
});


// number skill
$(document).ready(function () {

    $('.number').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + '%');
            }
        })
    })
});