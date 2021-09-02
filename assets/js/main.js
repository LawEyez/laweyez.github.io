// Menu Open
const menu = document.querySelector('#menu')
const menuContainer = document.querySelector('.menu-container')

const toggleMenu = () => {
  menu.classList.toggle('open')
  menuContainer.classList.toggle('show')
}

menu.addEventListener('click', toggleMenu)


// Active link
const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(link => {
  link.addEventListener('click', makeLinkActive)
})

function makeLinkActive() {
  navLinks.forEach(link => {
    link.classList.remove('active')
  })

  this.classList.add('active')
}
