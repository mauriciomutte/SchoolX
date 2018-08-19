// Create object matter

function createObjMatter(name, initials, teacherName, teacherLastName, color, dir, dirConteudox) {
  return {
    'name': name,
    'initials': initials,
    'teacherName': teacherName,
    'teacherLastName': teacherLastName,
    'teacherFullName': teacherName + ' ' +  teacherLastName,
    'color': color,
    'dir': dir,
    'dirConteudox': dirConteudox,
    'tests': []
  }
}

const arte = createObjMatter('Arte', 'Arte', 'Rosane', 'Conti Bones', '#8584BD', 'materia/arte.html', 'arte')
const biologia = createObjMatter('Biologia', 'BIO', 'Rafaela', 'Mônego', '#9932CC', 'materia/biologia.html', 'biologia')
const educacaoFisica = createObjMatter('Educação Física', 'EF', 'Eduardo', 'Machado', '#279AD0', 'materia/educacaoFisica.html', 'edfis')
const filosofia = createObjMatter('Filosofia', 'FIL', 'William', 'Vasconcelos', '#BB8940', 'materia/filosofia.html', 'filosofia')
const fisica = createObjMatter('Física', 'Física', 'Tatiane', 'Alves', '#3B8B42', 'materia/fisica.html', 'fisica')
const geografia = createObjMatter('Geografia', 'GEO', 'Miosés', 'Ferreira', '#37704D', 'materia/geografia.html', 'geografia')
const historia = createObjMatter('História', 'HIS', 'Renata', 'Rocha', '#6398CE', 'materia/historia.html', 'historia')
const linguaEspanhola = createObjMatter('Língua Espanhola', 'LE', 'Cristiane', 'Carvalho', '#4985C4', 'materia/linguaEspanhola.html', 'espanhol')
const linguaInglesa = createObjMatter('Língua Inglesa', 'LI', 'Marcos', 'Oliveira', '#927963', 'materia/linguaInglesa.html', 'ingles')
const linguaPortuguesa = createObjMatter('Língua Portuguesa', 'LP', 'Marlise', 'Fraga', '#61B5D9', 'materia/linguaPortuguesa.html', 'portugues')
const literatura = createObjMatter('Literatura', 'LIT', 'Marlise', 'Fraga', '#EABB23', 'materia/literatura.html', 'literatura')
const matematica = createObjMatter('Matemática', 'MAT', 'Márcio', 'Batista', '#3AB251', 'materia/matematica.html', 'matematica')
const quimica = createObjMatter('Química', 'QUI', 'Valéria', 'Correa', '#E4893A', 'materia/quimica.html', 'quimica')
const redacao = createObjMatter('Redação', 'RED', 'Marlise', 'Fraga', '#C75753', 'materia/redacao.html', 'redacao')
const sociologia = createObjMatter('Sociologia', 'SOC', 'William', 'Vasconcelos', '#D8534E', 'materia/sociologia.html', 'sociologia')

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

function createMatterHeader(matter, matterNum) {
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

  matterBody = document.createElement('div')
  matterBody.classList.add('matterBody')
  matterSection.appendChild(matterBody)


  function createMatterNota() {
    matterNota = document.createElement('div')
    matterNota.classList.add('matterNota')
    matterBody.appendChild(matterNota)

    matterNotaTitle = document.createElement('h4')
    matterNotaTitle.classList.add('matterNota__title')
    matterNotaTitle.style.backgroundColor = matter.color
    matterNotaTitle.innerHTML = 'Provas'
    matterNota.appendChild(matterNotaTitle)

    if (matter.tests.length > 0) {
      matterNotaTable = document.createElement('table')
      matterNotaTable.classList.add('matterNota__table')
      matterNota.appendChild(matterNotaTable)

      matterNotaTr0 = document.createElement('tr')
      matterNotaTr0.classList.add('matterNota__tr')
      matterNotaTable.appendChild(matterNotaTr0)

      matterNotaThDate = document.createElement('th')
      matterNotaThDate.classList.add('matterNota__th')
      matterNotaThDate.style.color = matter.color
      matterNotaThDate.innerHTML = 'Data'
      matterNotaTr0.appendChild(matterNotaThDate)

      matterNotaThType = document.createElement('th')
      matterNotaThType.classList.add('matterNota__th')
      matterNotaThType.style.color = matter.color
      matterNotaThType.innerHTML = 'Tipo'
      matterNotaTr0.appendChild(matterNotaThType)

      for (let i = 0; i < matter.tests.length; i++) {
        matterNotaTr = document.createElement('tr')
        matterNotaTr.classList.add('matterNota__tr')
        matterNotaTable.appendChild(matterNotaTr)
      
        matterNotaDate = document.createElement('td')
        matterNotaDate.classList.add('matterNota__td')
        matterNotaDate.style.backgroundColor = matter.color
        matterNotaDate.innerHTML = matter.tests[i].date
        matterNotaTr.appendChild(matterNotaDate)
      
        matterNotaType = document.createElement('td')
        matterNotaType.classList.add('matterNota__td')
        matterNotaType.style.backgroundColor = matter.color
        matterNotaType.innerHTML = matter.tests[i].type
        matterNotaTr.appendChild(matterNotaType)
      }
    } else {
      matterNotaError = document.createElement('p')
      matterNotaError.classList.add('matterNota__error')
      matterNotaError.style.color = matter.color
      matterNotaError.innerHTML = 'Não há prova para esta matéria'
      matterNota.appendChild(matterNotaError)
    }
  }
  createMatterNota()

  function createMatterContent() {
    matterContent = document.createElement('div')
    matterContent.classList.add('matterContent')
    matterBody.appendChild(matterContent)

    matterContentTitle = document.createElement('h4')
    matterContentTitle.classList.add('matterContent__title')
    matterContentTitle.style.backgroundColor = matter.color
    matterContentTitle.innerHTML = 'Conteúdo'
    matterContent.appendChild(matterContentTitle)

    matterContentBox = document.createElement('div')
    matterContentBox.classList.add('matterContent__box')
    matterContent.appendChild(matterContentBox)

    matterContentUl = document.createElement('ul')
    matterContentUl.classList.add('matterContent__ul')
    matterContentBox.appendChild(matterContentUl)

    const require = new XMLHttpRequest()
    require.open("GET", '../../conteudo/segundo.json', true)
    require.onload = function() {
      const conteudoxJSON = JSON.parse(this.responseText)
      const conteudoxArray = [conteudoxJSON.arte, conteudoxJSON.biologia, conteudoxJSON.edf, conteudoxJSON.filosofia, conteudoxJSON.fisica, conteudoxJSON.geografia, conteudoxJSON.historia, conteudoxJSON.espanhol, conteudoxJSON.ingles, conteudoxJSON.portugues, conteudoxJSON.literatura, conteudoxJSON.matematica, conteudoxJSON.quimica, conteudoxJSON.redacao, conteudoxJSON.sociologia]
      const conteudoxContent = conteudoxArray[matterNum].secondTri.content.reverse()
      console.log(conteudoxJSON)
      for (let i = 0; i < 5; i++) {
        matterContentLi = document.createElement('Li')
        matterContentLi.classList.add('matterContent__li')
        matterContentLi.innerHTML = conteudoxContent[i]
        matterContentUl.appendChild(matterContentLi)
      }
    }
    require.send()

    matterContentBtn = document.createElement('a')
    matterContentBtn.classList.add('matterContent__btn')
    matterContentBtn.style.backgroundColor = matter.color
    matterContentBtn.href = '../conteudo/segundo/materia/' + matter.dirConteudox + '.html'
    matterContentBtn.innerHTML = 'Ver conteúdo'
    matterContentBox.appendChild(matterContentBtn)

  }
  createMatterContent()
}

// createTestTable
function createTestTable(matter, date, type) {
  matter.tests.push({
    'date': date,
    'type': type
  })

  const testTable = document.querySelector('.tests__table')

  if (testTable !== null) {
    const tr = document.createElement('tr')
    tr.classList.add('tests__table__tr')
    testTable.appendChild(tr)
  
    const testDate = document.createElement('td')
    testDate.classList.add('tests__table__td')
    testDate.innerHTML = date
    tr.appendChild(testDate)
  
    const testMatter = document.createElement('td')
    testMatter.classList.add('tests__table__td')
    testMatter.innerHTML = matter.name
    tr.appendChild(testMatter)
  
    const testType = document.createElement('td')
    testType.classList.add('tests__table__td')
    testType.innerHTML = type
    tr.appendChild(testType)
  }
}

// Call createTestTable
createTestTable(arte, '08/12', 'Prova')
createTestTable(biologia, '08/12', 'Prova')
createTestTable(educacaoFisica, '08/12', 'Prova')
createTestTable(filosofia, '08/12', 'Prova')
createTestTable(fisica, '08/12', 'Prova')
createTestTable(geografia, '08/12', 'Prova')
createTestTable(historia, '08/12', 'Prova')
createTestTable(linguaEspanhola, '08/12', 'Prova')
createTestTable(linguaInglesa, '08/12', 'Prova')
createTestTable(linguaPortuguesa, '08/12', 'Prova')
createTestTable(literatura, '08/12', 'Prova')
createTestTable(matematica, '08/12', 'Prova')
createTestTable(quimica, '08/12', 'Prova')
createTestTable(redacao, '08/12', 'Prova')
createTestTable(sociologia, '08/12', 'Prova')

createTestTable(arte, '15/12', 'Trabalho')
createTestTable(biologia, '15/12', 'Trabalho')
createTestTable(educacaoFisica, '15/12', 'Trabalho')
createTestTable(filosofia, '15/12', 'Trabalho')
createTestTable(fisica, '15/12', 'Trabalho')
createTestTable(geografia, '15/12', 'Trabalho')
createTestTable(historia, '15/12', 'Trabalho')
createTestTable(linguaEspanhola, '15/12', 'Trabalho')
createTestTable(linguaInglesa, '15/12', 'Trabalho')
createTestTable(linguaPortuguesa, '15/12', 'Trabalho')
createTestTable(literatura, '15/12', 'Trabalho')
createTestTable(matematica, '15/12', 'Trabalho')
createTestTable(quimica, '15/12', 'Trabalho')
createTestTable(redacao, '15/12', 'Trabalho')
createTestTable(sociologia, '15/12', 'Trabalho')

createTestTable(arte, '22/12', 'recuperação')
createTestTable(biologia, '22/12', 'recuperação')
createTestTable(educacaoFisica, '22/12', 'recuperação')
createTestTable(filosofia, '22/12', 'recuperação')
createTestTable(fisica, '22/12', 'recuperação')
createTestTable(geografia, '22/12', 'recuperação')
createTestTable(historia, '22/12', 'recuperação')
createTestTable(linguaEspanhola, '22/12', 'recuperação')
createTestTable(linguaInglesa, '22/12', 'recuperação')
createTestTable(linguaPortuguesa, '22/12', 'recuperação')
createTestTable(literatura, '22/12', 'recuperação')
createTestTable(matematica, '22/12', 'recuperação')
createTestTable(quimica, '22/12', 'recuperação')
createTestTable(redacao, '22/12', 'recuperação')
createTestTable(sociologia, '22/12', 'recuperação')

//ConteudoX
function matterList(trimestre, materia) {
  const list = document.querySelector('.' + materia +'-lista')

  const divList = document.createElement('div')
  divList.classList.add('lista__trimestre')
  list.appendChild(divList)

  const h2List = document.createElement('h2')
  h2List.classList.add('lista__trimestre--title')
  h2List.innerHTML = trimestre.title
  divList.appendChild(h2List)

  const trimestreLista = document.createElement('ul')
  trimestreLista.classList.add('lista__trimestre__conteudo--ul')
  divList.appendChild(trimestreLista)

  for (let i = 0; i < trimestre.content.length; i++) {
    const conteudo = document.createElement('li')
    conteudo.classList.add('lista__trimestre__conteudo--li')
    conteudo.innerHTML = trimestre.content[i]
    trimestreLista.appendChild(conteudo)
  }
}

function callJSON(m, materia, ano) {
  const require = new XMLHttpRequest()
  require.open("GET", '../../' + ano + '.json', true)
  require.onload = function() {
    const matter = JSON.parse(this.responseText)
    
    const test = [matter.fisica, matter.matematica, matter.quimica, matter.biologia, matter.filosofia, matter.sociologia,
    matter.geografia, matter.historia, matter.portugues, matter.literatura, matter.redacao, matter.ingles, matter.espanhol,
    matter.arte, matter.edf]

    matterList(test[m].firstTri, materia)
    matterList(test[m].secondTri, materia)
    matterList(test[m].thirdTri, materia)
  }
  require.send()
}