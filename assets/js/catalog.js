window.onload = function(){
    slideOne();
    slideTwo();
}

let sliderOne = document.getElementById("range__slider-1");
let sliderTwo = document.getElementById("range__slider-2");
// let displayValOne = document.getElementById("range1");
// let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".range-slider__track");
let sliderMaxValue = document.getElementById("range__slider-1").max;

function slideOne(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    // displayValOne.textContent = sliderOne.value;
    fillColor();
}
function slideTwo(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    // displayValTwo.textContent = sliderTwo.value;
    fillColor();
}
function fillColor(){
    percent1 = (sliderOne.value / sliderMaxValue) * 100;
    percent2 = (sliderTwo.value / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #D7DCDF ${percent1}% , #00CA74 ${percent1}% , #00CA74 ${percent2}%, #D7DCDF ${percent2}%)`;
}