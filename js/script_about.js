$("section").on("click", function() {
    $(".popup_wrap, popup_wrap div").addClass("active");
    $("div.wrap").addClass("blur");
});

$("button.close").on("click", function() {
    $(".popup_wrap, .popup_wrap div").removeClass("active");
    $("div.wrap").removeClass("blur");
    $("button.close").removeClass("active")
})

$(".one").on("click", function() {
    $(".popup_one, .popup_one button").addClass("active");
});

$(".two").on("click", function() {
    $(".popup_two, .popup_two button").addClass("active");
});

$(".three").on("click", function() {
    $(".popup_three, .popup_three button").addClass("active");
});

$(".four").on("click", function() {
    $(".popup_four, .popup_four button").addClass("active");
});


// header slider

let activeElement = 0;
const timer = 8000;

// elements

const backgroundImg = document.querySelector("header.about_us .img");
const title = document.querySelector("header.about_us .title h1");

// tables

const imagesUrl = ['images/galeria/smoke.jpg', 'images/galeria/party_time.jpg'];
const titles = ['O nas słów kilka', 'Poczytaj!'];

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