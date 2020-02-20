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

    if (scrollValue > section1FromTop + section1Height - windowHeight*1.2) {
        $section1.addClass('active');
    }

    if (scrollValue > section2FromTop + section2Height - windowHeight*1.2) {
        $section2.addClass('active');
    }

    if (scrollValue > section3FromTop + section3Height - windowHeight*1.2) {
        $section3.addClass('active');
    }

    if (scrollValue < 50) {
        $('section').removeClass('active');
    }

});

// header slider

let activeElement = 0;
const timer = 8000;

// elements

const backgroundImg = document.querySelector("header .img");
const title = document.querySelector("header .title h1");

// tables

const imagesUrl = ['images/galeria/working_in_sunset.jpg', 'images/galeria/parcel2.jpg'];
const titles = ['Pasieka Darz Ul', 'Zapraszamy!'];

// function

function imageSlider() {
    activeElement++;
    if (activeElement == 2) {
        activeElement = 0;
    }
    backgroundImg.style.backgroundImage = 'url(' + imagesUrl[activeElement] + ')';
    title.textContent = titles[activeElement];
}

setInterval(imageSlider, timer);
