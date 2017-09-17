const menuBtn = document.querySelector('.menu__btn')
const menuNav = document.querySelector('.menu__nav')
const settingBtn = document.querySelector('.setting__btn')
const settingNav = document.querySelector('.setting__nav')

menuBtn.addEventListener('click', function() {
  event.stopPropagation();
  menuNav.classList.toggle('menu__nav--show')
  settingNav.classList.remove('setting__nav--show')
})

settingBtn.addEventListener('click', function() {
  event.stopPropagation();
  settingNav.classList.toggle('setting__nav--show')
  menuNav.classList.remove('menu__nav--show')
})

window.onclick = function(event) {
  if (menuNav.classList.contains('menu__nav--show') || settingNav.classList.contains('setting__nav--show')) {
    menuNav.classList.remove('menu__nav--show')
    settingNav.classList.remove('setting__nav--show')
  }
}