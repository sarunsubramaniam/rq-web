var landingHeight = $('.rq-landing').height();
var yourNavigation = $(".rq-header");
stickyDiv = "sticky";
yourHeader = landingHeight;

$(window).scroll(function () {
    if ($(this).scrollTop() > yourHeader) {
        yourNavigation.addClass(stickyDiv);
        yourNavigation.addClass('sticky');
        $('.rq-header .rq-logo').children('img').attr('src', 'assets/images/rq-logo-secondary.svg');
        // $('.desktop-menu ul li.contact-info').css('display', 'inline-block');
    } else {
        yourNavigation.removeClass(stickyDiv);
        yourNavigation.removeClass('sticky');
        $('.rq-header .rq-logo').children('img').attr('src', 'assets/images/rq-logo-primary.svg');
        // $('.desktop-menu ul li.contact-info').css('display', 'none');
    }
});

$('.nav-list li').click(function () {
   $('.nav-list li').removeClass('active');
    $(this).addClass('active');
});
