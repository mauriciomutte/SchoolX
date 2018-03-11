// Create object matter

function createObjMatter(name, initials, teacherName, teacherLastName, color, dir) {
  return {
    'name': name,
    'initials': initials,
    'teacherName': teacherName,
    'teacherLastName': teacherLastName,
    'color': color,
    'dir': dir
  }
}

const arte = createObjMatter('Arte', 'Arte', 'Rosane', 'Conti Bones', '#8584BD', 'materia/arte')
const biologia = createObjMatter('Biologia', 'BIO', 'Rafaela', 'Mônego', '#9932CC', 'materia/biologia')
const educacaoFisica = createObjMatter('Educação Física', 'EF', 'Guilherme', '?', '#279AD0', 'materia/educacaoFisica')
const filosofia = createObjMatter('Filosofia', 'FIL', 'William', '?', '#BB8940', 'materia/filosofia')
const fisica = createObjMatter('Física', 'Física', 'Tatiane', 'Alves', '#3B8B42', 'materia/fisica')
const geografia = createObjMatter('Geografia', 'GEO', 'Miosés', '?', '#37704D', 'materia/geografia')
const historia = createObjMatter('História', 'HIS', 'Renata', '?', '#6398CE', 'materia/historia')
const linguaEspanhola = createObjMatter('Língua Espanhola', 'LE', 'Cristiane', '?', '#4985C4', 'materia/linguaEspanhola')
const linguaInglesa = createObjMatter('Língua Inglesa', 'LI', 'Marcos', '?', '#927963', 'materia/linguaInglesa')
const linguaPortuguesa = createObjMatter('Língua Portuguesa', 'LP', 'Marlise', 'Fraga', '#61B5D9', 'materia/linguaPortuguesa')
const literatura = createObjMatter('Literatura', 'LIT', 'Marlise', 'Fraga', '#EABB23', 'materia/literatura')
const matematica = createObjMatter('Matemática', 'MAT', 'Márcio', 'Batista', '#3AB251', 'materia/matematica')
const quimica = createObjMatter('Química', 'QUI', 'Valéria', '?', '#E4893A', 'materia/quimica')
const redacao = createObjMatter('Redação', 'RED', 'Marlise', 'Fraga', '#C75753', 'materia/redacao')
const sociologia = createObjMatter('Sociologia', 'SOC', 'William', '?', '#D8534E', 'materia/sociologia')

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
createScheduleTable()