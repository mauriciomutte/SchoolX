

// Create schedule

function createScheduleTable() {
  const require = new XMLHttpRequest()
  require.open("GET", '/matter.json', true)
  require.onload = function() {
    const matterJSON = JSON.parse(this.responseText)
    console.log(matterJSON)
    const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']
    const table = document.querySelector('.schedule__table')
    const periods = [
      [matterJSON.redacao, matterJSON.matematica, matterJSON.fisica, matterJSON.arte, matterJSON.historia],
      [matterJSON.matematica, matterJSON.educacaoFisica, matterJSON.fisica, matterJSON.geografia, matterJSON.historia],
      [matterJSON.matematica, matterJSON.filosofia, matterJSON.biologia, matterJSON.geografia, matterJSON.matematica],
      [matterJSON.linguaEspanhola, matterJSON.biologia, matterJSON.linguaPortuguesa, matterJSON.arte, matterJSON.linguaInglesa],
      [matterJSON.educacaoFisica, matterJSON.biologia, matterJSON.linguaPortuguesa, matterJSON.quimica, matterJSON.fisica],
      [matterJSON.quimica, matterJSON.sociologia, matterJSON.literatura, matterJSON.quimica, matterJSON.linguaInglesa]
    ]
  
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
  require.send()
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
  matterHeaderTeacher.innerHTML = matter.teacherName + ' ' + matter.teacherLastName
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

    matterNotaError = document.createElement('p')
    matterNotaError.classList.add('matterNota__error')
    matterNotaError.style.color = matter.color
    matterNotaError.innerHTML = 'Não há prova para esta matéria'
    matterNota.appendChild(matterNotaError)
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
    require.open("GET", '/conteudo/segundo.json', true)
    require.onload = function() {
      const conteudoxJSON = JSON.parse(this.responseText)
      const conteudoxArray = [conteudoxJSON.arte, conteudoxJSON.biologia, conteudoxJSON.edf, conteudoxJSON.filosofia, conteudoxJSON.fisica, conteudoxJSON.geografia, conteudoxJSON.historia, conteudoxJSON.espanhol, conteudoxJSON.ingles, conteudoxJSON.portugues, conteudoxJSON.literatura, conteudoxJSON.matematica, conteudoxJSON.quimica, conteudoxJSON.redacao, conteudoxJSON.sociologia]
      const conteudoxContent = conteudoxArray[matterNum].secondTri.content.reverse()
      for (let i = 0; i < conteudoxContent.length; i++) {
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
function createTestTable() {
  const require = new XMLHttpRequest()
  require.open("GET", '/tests.json', true)
  require.onload = function() {
    const tests = JSON.parse(this.responseText)

    const require = new XMLHttpRequest()
    require.open("GET", '/matter.json', true)
    require.onload = function() {
      const matter = JSON.parse(this.responseText)
      const test = [
        matter.fisica, 
        matter.matematica, 
        matter.quimica, 
        matter.biologia, 
        matter.filosofia,
        matter.sociologia,
        matter.geografia, 
        matter.historia, 
        matter.portugues, 
        matter.literatura, 
        matter.redacao, 
        matter.ingles, 
        matter.espanhol,
        matter.arte, 
        matter.edf
      ]

      for(let i = 0; i < tests.length; i++) {
        const testPage = document.querySelector('.tests')
  
        const testContent = document.createElement('div')
        testContent.classList.add('test__content')
        testContent.style.backgroundColor = test[tests[i].matter].color
        testPage.appendChild(testContent)
      
        const testDate = document.createElement('div')
        testDate.classList.add('test__date')
        testContent.appendChild(testDate)
      
        const testDateDay = document.createElement('span')
        testDateDay.classList.add('test__date__day')
        testDateDay.innerHTML = tests[i].day
        testDate.appendChild(testDateDay)
      
        const testDateMonth = document.createElement('span')
        testDateMonth.classList.add('test__date__month')
        testDateMonth.innerHTML = tests[i].month.toUpperCase()
        testDate.appendChild(testDateMonth)
      
        const testInfo = document.createElement('div')
        testInfo.classList.add('test__info')
        testContent.appendChild(testInfo)
      
        const testMatterName = document.createElement('a')
        testMatterName.classList.add('test__matterName')
        testMatterName.innerHTML = test[tests[i].matter].name
        testMatterName.href = '../' + test[tests[i].matter].dir
        testInfo.appendChild(testMatterName)
      
        const testMatterTest = document.createElement('p')
        testMatterTest.classList.add('test__matterTest')
        testMatterTest.innerHTML = tests[i].test
        testInfo.appendChild(testMatterTest)
      }
    }
    require.send()
  }
  require.send()
}

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
  require.open("GET", '/conteudo/' + ano + '.json', true)
  require.onload = function() {
    const matter = JSON.parse(this.responseText)
    const test = [
      matter.fisica, 
      matter.matematica, 
      matter.quimica, 
      matter.biologia, 
      matter.filosofia,
      matter.sociologia,
      matter.geografia, 
      matter.historia, 
      matter.portugues, 
      matter.literatura, 
      matter.redacao, 
      matter.ingles, 
      matter.espanhol,
      matter.arte, 
      matter.edf
    ]

    matterList(test[m].firstTri, materia)
    matterList(test[m].secondTri, materia)
    matterList(test[m].thirdTri, materia)
  }
  require.send()
}