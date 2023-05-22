$(document).ready(function () {
var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 680,
    slideMargin = 10,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

makeClone();

function makeClone() {
    for (var i = 0; i < slideCount; i++) {
        // a.cloneNode(), a.cloneNode(true)
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.appendChide(b)
        slides.appendChild(cloneSlide);
    }
    for (var i = slideCount - 1; i >= 0; i--) {
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        //a.prepand(b)
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitalPos();
    setTimeout(() => {
        slides.classList.add('animated');
    }, 100);

}
function updateWidth() {
    var currentSlide = document.querySelectorAll('.slides li');
    var newSildeCount = currentSlide.length;

    var newWidth = (slideWidth + slideMargin) * newSildeCount - slideMargin + 'px';
    slides.style.width = newWidth;
}
function setInitalPos() {
    var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    //slides {transform:translateX(-1000px);}
    slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}

nextBtn.addEventListener('click', function () {
    moveSlide(currentIdx + 1);
});
prevBtn.addEventListener('click', function () {
    moveSlide(currentIdx - 1);
});

function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    if (currentIdx == slideCount || currentIdx == -slideCount) {
        setTimeout(() => {
            slides.classList.remove('animated');
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(() => {
            slides.classList.add('animated');
        }, 600);
    }
}
});