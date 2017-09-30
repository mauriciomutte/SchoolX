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

//
// TASKS
// 

function tasks(date, matter, content){
  const tbody = document.querySelector('.tasks__tbody')

  const tr = document.createElement('tr')
  tr.classList.add('tasks__tr')
  tbody.appendChild(tr)

  const td = document.createElement('td')
  td.classList.add('tasks__td')
  tr.appendChild(td)

  const tasksInfo = document.createElement('div')
  tasksInfo.classList.add('tasks__td--info')
  tasksInfo.innerHTML = `${date} - `
  td.appendChild(tasksInfo)

  const tasksMatter = document.createElement('span')
  tasksMatter.innerHTML = `${matter}`
  tasksInfo.appendChild(tasksMatter)

  const tasksWarning = document.createElement('div')
  tasksWarning.classList.add('tasks__td--warning')
  tasksWarning.innerHTML = `${content}`
  td.appendChild(tasksWarning)
}

tasks('29/09','Matemática','Tema: livro 5 pagina 30')
tasks('29/09','Matemática','Tema: livro 5 pagina 30')
tasks('29/09','Matemática','Tema: livro 5 pagina 30')
tasks('29/09','Matemática','Tema: livro 5 pagina 30')
tasks('29/09','Matemática','Tema: livro 5 pagina 30')
tasks('29/09','Matemática','Tema: livro 5 pagina 30')
tasks('29/09','Matemática','Tema: livro 5 pagina 30')
tasks('29/09','Matemática','Tema: livro 5 pagina 30')

//
// GRADES
// 

function gradesTable() {
  const gradesTh = ['Matéria', '1 Tri', '2 Tri', '3 Tri']
  const tbody = document.querySelector('.grades__tbody')

  const tr1 = document.createElement('tr')
  tbody.appendChild(tr1)

  for (let i = 0; i < gradesTh.length; i++) {
    const th = document.createElement('th')
    th.classList.add('grades__th')
    th.innerHTML = gradesTh[i]
    tr1.appendChild(th)
  }

  function gradesMatter(matter, firstTrimester, secondTrimester, thirdTrimester){
    const gradesTd = [matter, firstTrimester, secondTrimester, thirdTrimester]

    const tr2 = document.createElement('tr')
    tr2.classList.add('grades__tr')
    tbody.appendChild(tr2)

    for (let i = 0; i < gradesTd.length; i++) {
      const tdMatter = document.createElement('td')
      tdMatter.classList.add('grades__td')
      tdMatter.innerHTML = gradesTd[i]
      tr2.appendChild(tdMatter)    
    }
  }
  gradesMatter('Física', '10,0', '10,0', '10,0')
  gradesMatter('Matemática', '10,0', '10,0', '10,0')
  gradesMatter('Química', '10,0', '10,0', '10,0')
  gradesMatter('Biologia', '10,0', '10,0', '10,0')
  gradesMatter('Filosofia', '10,0', '10,0', '10,0')
  gradesMatter('Sociologia', '10,0', '10,0', '10,0')
  gradesMatter('Geografia', '10,0', '10,0', '10,0')
  gradesMatter('História', '10,0', '10,0', '10,0')
  gradesMatter('Português', '10,0', '10,0', '10,0')
  gradesMatter('Literatura', '10,0', '10,0', '10,0')
  gradesMatter('Redação', '10,0', '10,0', '10,0')
  gradesMatter('Inglês', '10,0', '10,0', '10,0')
  gradesMatter('Espanhol', '10,0', '10,0', '10,0')
  gradesMatter('Arte', '10,0', '10,0', '10,0')
  gradesMatter('Ed. Fis', '10,0', '10,0', '10,0')
}

gradesTable()