const loadText = document.querySelector('.loading-text')
const mainImage = document.querySelector('.main-image')

const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length









let activeSlideIndex = 0
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) =>
{
    const sliderHeight = sliderContainer.clientHeight;
    if (direction =='up'){
    activeSlideIndex++
    
        if(activeSlideIndex > slidesLength - 1)
        {
            activeSlideIndex =0
        }
    
    slideRight.style.transform =`translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform =`translateY(${activeSlideIndex * sliderHeight}px)`
    }
    else if (direction =='down')
    {
        activeSlideIndex--
    
        if(activeSlideIndex < 0 )
        {
            activeSlideIndex =slidesLength -1
        }
    
    slideRight.style.transform =`translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform =`translateY(${activeSlideIndex * sliderHeight}px)`
    }
}

    
    

    

let load = 0
let int = setInterval(blurring,30)
function blurring()
{
    
    
    load+=5
    if(load>95)
    {
        
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = (100-load)/100
    mainImage.style.filter = `blur(${30*(100-load)/100}px)`
}

