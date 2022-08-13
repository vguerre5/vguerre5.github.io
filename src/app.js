const hambugerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
  navList.classList.toggle('show')
}

hamburgerButton.addEventListender('click', toggleButton)
