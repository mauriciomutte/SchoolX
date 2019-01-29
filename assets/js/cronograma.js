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
      [matterJSON[10], matterJSON[1], matterJSON[0], matterJSON[13], matterJSON[7]],
      [matterJSON[1], matterJSON[14], matterJSON[0], matterJSON[6], matterJSON[7]],
      [matterJSON[1], matterJSON[4], matterJSON[3], matterJSON[6], matterJSON[1]],
      [matterJSON[12], matterJSON[3], matterJSON[8], matterJSON[13], matterJSON[11]],
      [matterJSON[14], matterJSON[3], matterJSON[8], matterJSON[2], matterJSON[0]],
      [matterJSON[2], matterJSON[5], matterJSON[9], matterJSON[2], matterJSON[11]]
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