// Location
const dirMatter = '/schoolX/matter.json'
const dirMatterContent = '/schoolX/conteudo/segundo.json'
const dirTests = '/schoolX/tests.json'

// Create schedule

function createScheduleTable() {
  const require = new XMLHttpRequest()
  require.open("GET", dirMatter, true)
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

      weekDays.forEach(function(item){
        const th = document.createElement('th')
        th.classList.add('table__th')
        th.innerHTML = item
        tr1.appendChild(th)
      })
    }
    createTh()
  
    function createTd() {
      periods.forEach(function(item) {
        const tr2 = document.createElement('tr')
        table.appendChild(tr2)

        item.forEach(function(item) {
          const td = document.createElement('td')
          td.classList.add('table__td')
          tr2.appendChild(td)
    
          const a = document.createElement('a')
          a.classList.add('table__a')
          a.style.backgroundColor = item.color
          a.href = item.dir
          a.innerHTML = item.initials
          td.appendChild(a)
    
          const span = document.createElement('span')
          span.classList.add('table__span')
          span.innerHTML = item.teacherName
          a.appendChild(span)
        })
      })
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

  const matterBody = document.createElement('div')
  matterBody.classList.add('matterBody')
  matterSection.appendChild(matterBody)


  function createMatterNota() {
    const matterNota = document.createElement('div')
    matterNota.classList.add('matterNota')
    matterBody.appendChild(matterNota)

    const matterNotaTitle = document.createElement('h4')
    matterNotaTitle.classList.add('matterNota__title')
    matterNotaTitle.style.backgroundColor = matter.color
    matterNotaTitle.innerHTML = 'Provas'
    matterNota.appendChild(matterNotaTitle)

    const matterNotaUl = document.createElement('ul')
    matterNotaUl.classList.add('matterNota__ul')
    matterNota.appendChild(matterNotaUl)

    require.open("GET", dirTests, true)
    require.onload = function() {
      const tests = JSON.parse(this.responseText)

      tests.forEach(function(item) {
        if (item.matter === matter.number) {
          const matterNotaLi = document.createElement('li')
          matterNotaLi.classList.add('matterNota__li')
          matterNotaLi.innerHTML = item.test + ' (' + item.date + ')'
          matterNotaUl.appendChild(matterNotaLi)
        }
      })
    }
    require.send()
  }
  createMatterNota()

  function createMatterContent() {
    const matterContent = document.createElement('div')
    matterContent.classList.add('matterContent')
    matterBody.appendChild(matterContent)

    const matterContentTitle = document.createElement('h4')
    matterContentTitle.classList.add('matterContent__title')
    matterContentTitle.style.backgroundColor = matter.color
    matterContentTitle.innerHTML = 'Conteúdo'
    matterContent.appendChild(matterContentTitle)

    const matterContentBox = document.createElement('div')
    matterContentBox.classList.add('matterContent__box')
    matterContent.appendChild(matterContentBox)

    const matterContentUl = document.createElement('ul')
    matterContentUl.classList.add('matterContent__ul')
    matterContentBox.appendChild(matterContentUl)

    const require = new XMLHttpRequest()
    require.open("GET", dirMatterContent, true)
    require.onload = function() {
      const conteudoxJSON = JSON.parse(this.responseText)
      const conteudoxArray = [conteudoxJSON.arte, conteudoxJSON.biologia, conteudoxJSON.edf, conteudoxJSON.filosofia, conteudoxJSON.fisica, conteudoxJSON.geografia, conteudoxJSON.historia, conteudoxJSON.espanhol, conteudoxJSON.ingles, conteudoxJSON.portugues, conteudoxJSON.literatura, conteudoxJSON.matematica, conteudoxJSON.quimica, conteudoxJSON.redacao, conteudoxJSON.sociologia]
      const conteudoxContent = conteudoxArray[matterNum].secondTri.content.reverse()
      conteudoxContent.forEach(function(item) {
        const matterContentLi = document.createElement('Li')
        matterContentLi.classList.add('matterContent__li')
        matterContentLi.innerHTML = item
        matterContentUl.appendChild(matterContentLi)
      })
    }
    require.send()

    const matterContentBtn = document.createElement('a')
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
  require.open("GET", dirTests, true)
  require.onload = function() {
    const tests = JSON.parse(this.responseText)

    function compare(a, b) {
      const dateA = new Date(a.date + ', 2018') 
      const dateB = new Date(b.date + ', 2018') 
    
      if (dateA > dateB) {
        return comparison = 1;
      } else if (dateA < dateB) {
        return comparison = -1;
      }
    }
    tests.sort(compare);

    const require = new XMLHttpRequest()
    require.open("GET", dirMatter, true)
    require.onload = function() {
      const matter = JSON.parse(this.responseText)
      const test = [
        matter.arte, 
        matter.biologia, 
        matter.educacaoFisica,
        matter.filosofia,
        matter.fisica, 
        matter.geografia, 
        matter.historia, 
        matter.linguaEspanhola,
        matter.linguaInglesa, 
        matter.linguaPortuguesa, 
        matter.literatura, 
        matter.matematica, 
        matter.quimica, 
        matter.redacao, 
        matter.sociologia
      ]

      tests.forEach(function(item) {
        const dateNow = new Date()
        const dateToday = new Date(2018, dateNow.getMonth(),dateNow.getDate())
        const datePlusAWeek = new Date(2018, dateNow.getMonth(),dateNow.getDate() + 7) 
        const date = new Date(item.date + ', 2018')
        const dateMonth = date.getMonth()
        let dateDay = date.getDate()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function createTestCard(render) {
          const testPage = document.querySelector('.' + render)
  
          const testContent = document.createElement('div')
          testContent.classList.add('test__content')
          testContent.style.backgroundColor = test[item.matter].color
          testPage.appendChild(testContent)
        
          const testDate = document.createElement('div')
          testDate.classList.add('test__date')
          testContent.appendChild(testDate)
        
          const testDateDay = document.createElement('span')
          testDateDay.classList.add('test__date__day')
          testDateDay.innerHTML = dateDay
          testDate.appendChild(testDateDay)
        
          const testDateMonth = document.createElement('span')
          testDateMonth.classList.add('test__date__month')
          testDateMonth.innerHTML = months[dateMonth].toUpperCase()
          testDate.appendChild(testDateMonth)
        
          const testInfo = document.createElement('div')
          testInfo.classList.add('test__info')
          testContent.appendChild(testInfo)
        
          const testMatterName = document.createElement('a')
          testMatterName.classList.add('test__matterName')
          testMatterName.innerHTML = test[item.matter].name
          testMatterName.href = '../' + test[item.matter].dir
          testInfo.appendChild(testMatterName)
        
          const testMatterTest = document.createElement('p')
          testMatterTest.classList.add('test__matterTest')
          testMatterTest.innerHTML = item.test
          testInfo.appendChild(testMatterTest)
        }
        
        if (dateDay < 10) {
          dateDay = '0' + dateDay
        }

        if (date >= dateToday) {
          if (date < datePlusAWeek) {
            createTestCard('tests__next-tests')
          } else {
            createTestCard('tests__other-tests')
          }
        }
      })
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

  trimestre.content.forEach(function(item) {
    console.log(item)
    const conteudo = document.createElement('li')
    conteudo.classList.add('lista__trimestre__conteudo--li')
    conteudo.innerHTML = item
    trimestreLista.appendChild(conteudo)
  })
}

function callJSON(m, materia, ano) {
  const require = new XMLHttpRequest()
  require.open("GET", '/schoolX/conteudo/' + ano + '.json', true)
  require.onload = function() {
    const matter = JSON.parse(this.responseText)
    const test = [
      matter.arte, 
      matter.biologia, 
      matter.edf,
      matter.filosofia,
      matter.fisica, 
      matter.geografia, 
      matter.historia, 
      matter.espanhol,
      matter.ingles, 
      matter.portugues, 
      matter.literatura, 
      matter.matematica, 
      matter.quimica, 
      matter.redacao, 
      matter.sociologia
    ]

    matterList(test[m].firstTri, materia)
    matterList(test[m].secondTri, materia)
    matterList(test[m].thirdTri, materia)
  }
  require.send()
}