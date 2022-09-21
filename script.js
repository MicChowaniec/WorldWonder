const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.main-image');
const slideRight = document.querySelector('.slider-container');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('.div').length;



let int = setInterval(blurring,30)

let load = 0
function blurring()
{
    load+=5
    if(load>99)
    {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = (100-load)/100
    bg.style.filter = `blur(${30*(100-load)/100}px)`
}

let activeSlideIndex = 0;
slideLeft.style.top = `-${(slidesLength - 1) *100}vh`
