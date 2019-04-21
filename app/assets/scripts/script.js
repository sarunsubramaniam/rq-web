var landingHeight = $('.rq-landing').height() - 400;
var yourNavigation = $(".rq-header");
stickyDiv = "sticky";
yourHeader = landingHeight;

$(window).scroll(function () {
    if ($(this).scrollTop() > yourHeader) {
        yourNavigation.addClass(stickyDiv);
        yourNavigation.addClass('sticky');
        $('.rq-header .rq-logo').children('img').attr('src', 'assets/images/rq-logo-secondary.svg');
    } else {
        yourNavigation.removeClass(stickyDiv);
        yourNavigation.removeClass('sticky');
        $('.rq-header .rq-logo').children('img').attr('src', 'assets/images/rq-logo-primary.svg');
    }
});

$('.nav-list li').click(function () {
   $('.nav-list li').removeClass('active');
    $(this).addClass('active');
});

$('.mobile-menu').click(function () {
   $('.mobile-nav-wrapper .nav-list').slideToggle(500);
});
