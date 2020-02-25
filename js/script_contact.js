// header slider

let activeElement = 0;
const timer = 8000;

// elements

const backgroundImg = document.querySelector("header.contact .img");
const title = document.querySelector("header.contact .title h1");

// tables

const imagesUrl = ['images/galeria/contact_background.jpg', 'images/galeria/cake.jpg'];
const titles = ['Kontakt', 'Napisz do nas!'];

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