const burger = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.nav')
const overlay = document.querySelector('.overlay')
const slides = document.querySelectorAll('.slider__slide');
const navlinks = document.querySelectorAll('.slider__navlink');

function toggleMenu() {
  burgerMenu.classList.toggle('nav-open')
  document.body.classList.toggle('body-hidden')
  burger.classList.toggle('burger-open')
  overlay.classList.toggle('overlay-block')
}

burger.addEventListener('click', toggleMenu)
burgerMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')){
      toggleMenu()
  }
})
overlay.addEventListener('click', toggleMenu)

/*--------------------------*/


let currentSlide = 0;

document.getElementById("right-arrow").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("left-arrow").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {
      moveTo = 0;
    }
    if (moveTo < 0) {
      moveTo = slides.length - 1;
    }
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider__navlink').forEach((item, itemIndex) => {
    item.addEventListener('click', () => {
        if (currentSlide !== itemIndex) {
            changeSlide(itemIndex);
        }
    })
})