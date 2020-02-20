// header slider

let activeElement = 0;
const timer = 8000;

// elements

const backgroundImg = document.querySelector("header.gallery .img");
const title = document.querySelector("header.gallery .title h1");

// tables

const imagesUrl = ['images/galeria/gallery_bckground.jpg', 'images/galeria/bread_sliced.jpg'];
const titles = ['Galeria', 'Zobacz sam!'];

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