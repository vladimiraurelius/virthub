




// const interval = setInterval(nextSlide, 3000);

const mobileMenuBtn = document.querySelector('.menu__link');
const mobileMenuWindow = document.querySelector('.menu-mobile');
const mobileMenuWrapper = document.querySelector('.menu-wrapper');
const menuLine1 = document.querySelector('.menu__line-1');
const menuLine2 = document.querySelector('.menu__line-2');
const menuLine3 = document.querySelector('.menu__line-3');

function changeState (){
    mobileMenuWrapper.classList.toggle('menu-wrapper--active');
    mobileMenuWindow.classList.toggle('menu-mobile--active');
    menuLine1.classList.toggle('menu__line-1--pending');
    menuLine2.classList.toggle('menu__line-2--pending');
    menuLine3.classList.toggle('menu__line-3--pending');    
}

mobileMenuBtn.addEventListener('click',changeState);


const categoryBtn = document.querySelector('.search__cat');
const categoryItem = document.querySelector('.category');

function showCategory (){
    categoryBtn.classList.toggle('search__cat--active');
    categoryItem.classList.toggle('category--active');
}

categoryBtn.addEventListener('click',showCategory);
