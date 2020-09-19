const images = document.querySelectorAll('.profile-slider__photo');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let current = 0;

function slider(){
    for(let i = 0; i < images.length; i++){
        images[i].classList.remove('profile-slider__photo--active');
    }
    images[current].classList.add('profile-slider__photo--active');
}

function prevSlide() {
    if (current - 1 == -1){
        current = images.length -1;
    }
    else{
        current--;
    }
    slider();
}

function nextSlide(){
    if(current + 1 == images.length) {
        current = 0;
    }
    else{
        current++;
    }
    slider();
}

leftArrow.addEventListener('click',prevSlide);
rightArrow.addEventListener('click',nextSlide);
slider();