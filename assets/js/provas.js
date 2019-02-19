// createTestTable
function createTestTable() {
  const require = new XMLHttpRequest()
  require.open("GET", dirTests, true)
  require.onload = function() {
    const tests = JSON.parse(this.responseText)

    function compare(a, b) {
      const dateA = new Date(a.date + ', 2019') 
      const dateB = new Date(b.date + ', 2019') 
    
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

      tests.forEach(function(item) {
        const dateNow = new Date()
        const dateToday = new Date(2019, dateNow.getMonth(),dateNow.getDate())
        const datePlusAWeek = new Date(2019, dateNow.getMonth(),dateNow.getDate() + 7) 
        const date = new Date(item.date + ', 2019')
        const dateMonth = date.getMonth()
        let dateDay = date.getDate()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        function createTestCard(render) {
          const testPage = document.querySelector('.' + render)
  
          const testContent = document.createElement('div')
          testContent.classList.add('test__content')
          testContent.style.backgroundColor = matter[item.matter].color
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
          testMatterName.innerHTML = matter[item.matter].name
          testMatterName.href = '../' + matter[item.matter].dir
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
createTestTable()