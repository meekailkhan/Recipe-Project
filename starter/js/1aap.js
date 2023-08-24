const getElement = (selector) => {
  const element = document.querySelector(selector)
  if(element) return element
  throw Error(
    'please check your class name ${selector}class'
  )
}

const links = getElement('.nav-links')
const navBtn = getElement('.nav-btn')

navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

var date = getElement('#date')
var currentYear = new Date().getFullYear()
date.textContent = currentYear
