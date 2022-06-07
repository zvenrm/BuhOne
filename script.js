const burger = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.nav')

function toggleMenu() {
  burgerMenu.classList.toggle('nav-open')
  document.body.classList.toggle('body-hidden')
  burger.classList.toggle('burger-open')
}

burger.addEventListener('click', toggleMenu)
burgerMenu.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav-link')){
      toggleMenu()
  }
})