// Create object matter

function createObjMatter(name, initials, teacherName, teacherLastName, color, dir) {
  return {
    'name': name,
    'initials': initials,
    'teacherName': teacherName,
    'teacherLastName': teacherLastName,
    'teacherFullName': teacherName + ' ' +  teacherLastName,
    'color': color,
    'dir': dir,
    'provas': {}
  }
}

const arte = createObjMatter('Arte', 'Arte', 'Rosane', 'Conti Bones', '#8584BD', 'materia/arte.html')
const biologia = createObjMatter('Biologia', 'BIO', 'Rafaela', 'Mônego', '#9932CC', 'materia/biologia.html')
const educacaoFisica = createObjMatter('Educação Física', 'EF', 'Guilherme', '?', '#279AD0', 'materia/educacaoFisica.html')
const filosofia = createObjMatter('Filosofia', 'FIL', 'William', '?', '#BB8940', 'materia/filosofia.html')
const fisica = createObjMatter('Física', 'Física', 'Tatiane', 'Alves', '#3B8B42', 'materia/fisica.html')
const geografia = createObjMatter('Geografia', 'GEO', 'Miosés', '?', '#37704D', 'materia/geografia.html')
const historia = createObjMatter('História', 'HIS', 'Renata', '?', '#6398CE', 'materia/historia.html')
const linguaEspanhola = createObjMatter('Língua Espanhola', 'LE', 'Cristiane', '?', '#4985C4', 'materia/linguaEspanhola.html')
const linguaInglesa = createObjMatter('Língua Inglesa', 'LI', 'Marcos', '?', '#927963', 'materia/linguaInglesa.html')
const linguaPortuguesa = createObjMatter('Língua Portuguesa', 'LP', 'Marlise', 'Fraga', '#61B5D9', 'materia/linguaPortuguesa.html')
const literatura = createObjMatter('Literatura', 'LIT', 'Marlise', 'Fraga', '#EABB23', 'materia/literatura.html')
const matematica = createObjMatter('Matemática', 'MAT', 'Márcio', 'Batista', '#3AB251', 'materia/matematica.html')
const quimica = createObjMatter('Química', 'QUI', 'Valéria', '?', '#E4893A', 'materia/quimica.html')
const redacao = createObjMatter('Redação', 'RED', 'Marlise', 'Fraga', '#C75753', 'materia/redacao.html')
const sociologia = createObjMatter('Sociologia', 'SOC', 'William', '?', '#D8534E', 'materia/sociologia.html')

// add tests in matter object
function addTest(matter, type, day, month) {
  var simpleDate = day + '/' + month
  var fullDate = new Date(2018, (month - 1), day)
  var prova = matter.provas
  var testType

  switch (type) {
    case 1:
      //AP1
      testType = 'AP1'
      prova = prova.ap1
      break;

    case 2:
      //AP2
      testType = 'AP2'
      prova = prova.ap2
      break;

    case 3:
      //TR1
      testType = 'TR1'
      prova = prova.tr1
      break;

    case 4:
      //TR2
      testType = 'TR2'
      prova = prova.tr2
      break;
  }

  prova = {
    'data': simpleDate,
    'fullDate': fullDate,
    'matterName': matter.name,
    'type': testType
  }
  console.log(prova.data + ' - ' + prova.matterName + ' - ' + prova.type)
}

// Call tests
addTest(quimica, 1, 29, 03)
addTest(linguaEspanhola, 1, 26, 03)
addTest(linguaEspanhola, 2, 16, 04)
addTest(linguaEspanhola, 3, 14, 05)
addTest(fisica, 3, 28, 03)
addTest(fisica, 1, 04, 04)
addTest(linguaPortuguesa, 1, 04, 04)
addTest(linguaPortuguesa, 2, 25, 04)
addTest(linguaPortuguesa, 3, 09, 05)
addTest(linguaPortuguesa, 4, 16, 05)
addTest(literatura, 1, 11, 04)
addTest(literatura, 3, 18, 04)
addTest(literatura, 2, 25, 04)
addTest(literatura, 4, 16, 05)
addTest(redacao, 1, 02, 04)
addTest(redacao, 3, 18, 04)
addTest(redacao, 2, 23, 04)
addTest(redacao, 4, 07, 05)

// Create schedule

function createScheduleTable() {
  const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']
  const periods = [
    [redacao, matematica, fisica, arte, historia],
    [matematica, educacaoFisica, fisica, geografia, historia],
    [matematica, filosofia, biologia, geografia, matematica],
    [linguaEspanhola, biologia, linguaPortuguesa, arte, linguaInglesa],
    [educacaoFisica, biologia, linguaPortuguesa, quimica, fisica],
    [quimica, sociologia, literatura, quimica, linguaInglesa]
  ]

  const table = document.querySelector('.schedule__table')

  function createTh() {
    const tr1 = document.createElement('tr')
    table.appendChild(tr1)

    for (let i = 0; i < weekDays.length; i++) {
      const th = document.createElement('th')
      th.classList.add('table__th')
      th.innerHTML = weekDays[i]
      tr1.appendChild(th)
    }
  }
  createTh()

  function createTd() {
    for (let i = 0; i < periods.length; i++) {
      const tr2 = document.createElement('tr')
      table.appendChild(tr2)

      for (let z = 0; z < periods[i].length; z++) {
        var td = document.createElement('td')
        td.classList.add('table__td')
        tr2.appendChild(td)
  
        var a = document.createElement('a')
        a.classList.add('table__a')
        a.style.backgroundColor = periods[i][z].color
        a.href = periods[i][z].dir
        a.innerHTML = periods[i][z].initials
        td.appendChild(a)
  
        var span = document.createElement('span')
        span.classList.add('table__span')
        span.innerHTML = periods[i][z].teacherName
        a.appendChild(span)
      }
    }
  }
  createTd()

}

// Matter page

function createMatterHeader(matter) {
  const matterSection = document.querySelector('.' + matter.initials)

  const matterHeader = document.createElement('div')
  matterHeader.classList.add('matterHeader')
  matterHeader.style.backgroundColor = matter.color
  matterSection.appendChild(matterHeader)

  const matterHeaderTitle = document.createElement('h2')
  matterHeaderTitle.classList.add('matterHeader__title')
  matterHeaderTitle.innerHTML = matter.name
  matterHeader.appendChild(matterHeaderTitle)

  const matterHeaderTeacher = document.createElement('h2')
  matterHeaderTeacher.classList.add('matterHeader__teacher')
  matterHeaderTeacher.innerHTML = matter.teacherFullName
  matterHeader.appendChild(matterHeaderTeacher)
}

// Reminder

// const test = [biologia.provas.ap1.fullData, biologia.provas.ap2.fullData]
// console.log(test)
// test.sort(function(a,b){return a - b })
// console.log(test)