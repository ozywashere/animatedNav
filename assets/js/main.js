const toggle = document.querySelector('[data-navbar-toggler]')
const nav = document.querySelector('[data-navbar]')

toggle.addEventListener('click', () => {
  nav.classList.toggle('active')
})
