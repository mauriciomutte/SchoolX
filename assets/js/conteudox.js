function conteudoxIndex(em) {
  const main = document.querySelector('.conteudoxIndex')

  const require = new XMLHttpRequest();
  require.open('GET', em, true);
  require.onload = function() {
    const conteudo = JSON.parse(this.responseText);
    conteudo.forEach(function(element) {
      const div = document.createElement('div');
      div.classList.add('menu__materia');
      main.appendChild(div);

      const a = document.createElement('a');
      a.classList.add('menu__materia--a');
      a.href = 'content.html#' + element.name
      div.appendChild(a);

      const item = document.createElement('div');
      item.classList.add('menu__materia__box');
      a.appendChild(item);

      const itemImg = document.createElement('img');
      itemImg.classList.add('menu__materia__box--img');
      itemImg.src = '/assets/img/' + element.name + '.png';
      itemImg.alt = element.name + ' icon';
      item.appendChild(itemImg);

      const itemName = document.createElement('span');
      itemName.classList.add('menu__materia__box--name');
      itemName.innerHTML = element.name;
      item.appendChild(itemName);
    })
  }
  require.send();
}

function conteudoX(em) {
  const main = document.querySelector('.conteudoX')

  const require = new XMLHttpRequest();
  require.open('GET', em, true);
  require.onload = function() {
    const conteudo = JSON.parse(this.responseText);
    conteudo.forEach(function (element) {
      const section = document.createElement('section');
      section.id = element.name;
      main.appendChild(section);

      const titleDiv = document.createElement('div');
      titleDiv.classList.add('materia__lista');
      section.appendChild(titleDiv);

      const titleImg = document.createElement('img');
      titleImg.classList.add('materia__lista--img');
      titleImg.src = '../../../assets/img/' + element.name + '_w.png';
      titleDiv.appendChild(titleImg);

      const title = document.createElement('h2');
      title.classList.add('materia__lista--name');
      title.innerHTML = element.name
      titleDiv.appendChild(title);
      
      element.listContent.forEach(function (element, num) {
        const trimestre = document.createElement('div');
        trimestre.classList.add('lista__trimestre');
        section.appendChild(trimestre);

        const trimestreTitle = document.createElement('h3');
        trimestreTitle.classList.add('lista__trimestre--title');
        trimestreTitle.innerHTML = (num + 1) + 'º Trimestre';
        trimestre.appendChild(trimestreTitle);

        const ul = document.createElement('ul');
        ul.classList.add('lista__trimestre__conteudo--ul');
        trimestre.appendChild(ul);

        element.forEach(function(element) {
          const li = document.createElement('li');
          li.classList.add('lista__trimestre__conteudo--li');
          li.innerHTML = element;
          ul.appendChild(li);
        })
      })
    })
  }
  require.send();
}