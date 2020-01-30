$(document).on('scroll', function(){
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();

    const $section1 = $('.first');
    const section1FromTop = $section1.offset().top;
    const section1Height = $section1.outerHeight();

    const $section2 = $('.second');
    const section2FromTop = $section2.offset().top;
    const section2Height = $section2.outerHeight();

    const $section3 = $('.third');
    const section3FromTop = $section3.offset().top;
    const section3Height = $section3.outerHeight();

    if (scrollValue > section1FromTop + section1Height - windowHeight) {
        $section1.addClass('active');
    }

    if (scrollValue > section2FromTop + section2Height - windowHeight) {
        $section2.addClass('active');
    }

    if (scrollValue > section3FromTop + section3Height - windowHeight) {
        $section3.addClass('active');
    }

    if (scrollValue < 50) {
        $('section').removeClass('active');
    }

})