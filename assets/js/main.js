// header var
const menuBtn = document.querySelector('.menu__btn')
const menuNav = document.querySelector('.menu__nav')
const settingBtn = document.querySelector('.setting__btn')
const settingNav = document.querySelector('.setting__nav')

//
// HEADER
//

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

//
// SCHEDULE
// 

function scheduleTable() {
  const week = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']
  const firstPeriod = ['Art', 'Bio', 'Fís', 'Port', 'Filo']
  const secondPeriod = ['Art', 'Bio', 'Fís', 'Port', 'Fís']
  const thirdPeriod = ['Red', 'Mat', 'Socio', 'Hist', 'Mat']
  const fourthPeriod = ['Qui', 'Mat', 'Esp', 'Hist', 'Mat']
  const fifthPeriod = ['Ed.F', 'Qui', 'Lit', 'Geo', 'Ing']
  const sixthPeriod = ['Ed.F', 'Qui', 'Bio', 'Geo', 'Ing']
  
  const tbody = document.querySelector('.schedule__tbody')

  const tr1 = document.createElement('tr')
  tbody.appendChild(tr1)

  for (let i = 0; i < week.length; i++) {
    const th = document.createElement('th')
    th.classList.add('table__th')
    th.innerHTML = week[i]
    tr1.appendChild(th)
  }

  function periodTr(period) {
    const tr2 = document.createElement('tr')
    tbody.appendChild(tr2)

    for (let i = 0; i < firstPeriod.length; i++) {
      const td = document.createElement('td')
      td.classList.add('table__td')
      td.innerHTML = period[i]
      tr2.appendChild(td)
    }
  }
  periodTr(firstPeriod)
  periodTr(secondPeriod)
  periodTr(thirdPeriod)
  periodTr(fourthPeriod)
  periodTr(fifthPeriod)
  periodTr(sixthPeriod)
}

scheduleTable()