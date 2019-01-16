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