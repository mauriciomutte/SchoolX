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
createScheduleTable()