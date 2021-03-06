// Matter page

function createMatterHeader(matterCode) {
  const require = new XMLHttpRequest();
  require.open('GET', dirMatter, true);
  require.onload = function() {
    const matter = JSON.parse(this.responseText)[matterCode];

    const matterSection = document.querySelector('.' + matter.initials);

    const matterHeader = document.createElement('div');
    matterHeader.classList.add('matterHeader');
    matterHeader.style.backgroundColor = matter.color;
    matterSection.appendChild(matterHeader);
  
    const matterHeaderTitle = document.createElement('h2');
    matterHeaderTitle.classList.add('matterHeader__title');
    matterHeaderTitle.innerHTML = matter.name;
    matterHeader.appendChild(matterHeaderTitle);
  
    const matterHeaderTeacher = document.createElement('h2');
    matterHeaderTeacher.classList.add('matterHeader__teacher');
    matterHeaderTeacher.innerHTML = matter.teacherName + ' ' + matter.teacherLastName;
    matterHeader.appendChild(matterHeaderTeacher);
  }
  require.send();
}

function createMatterNota(matterCode) {
  const require = new XMLHttpRequest();
  require.open('GET', dirMatter, true);
  require.onload = function() {
    const matter = JSON.parse(this.responseText)[matterCode];

    const matterSection = document.querySelector('.' + matter.initials);

    const matterNota = document.createElement('div');
    matterNota.classList.add('matterNota');
    matterSection.appendChild(matterNota);
  
    const matterNotaTitle = document.createElement('h4');
    matterNotaTitle.classList.add('matterNota__title');
    matterNotaTitle.style.backgroundColor = matter.color;
    matterNotaTitle.innerHTML = 'Provas';
    matterNota.appendChild(matterNotaTitle);
  
    const matterNotaUl = document.createElement('ul');
    matterNotaUl.classList.add('matterNota__ul');
    matterNota.appendChild(matterNotaUl);
  
    require.open("GET", dirTests, true)
    require.onload = function() {
      const tests = JSON.parse(this.responseText);
  
      tests.forEach(function(item) {
        if (item.matter === matter.number) {
          const matterNotaLi = document.createElement('li');
          matterNotaLi.classList.add('matterNota__li');
          matterNotaLi.innerHTML = item.test + ' (' + item.date + ')';
          matterNotaUl.appendChild(matterNotaLi);
        }
      })
    }
    require.send();
  }
  require.send();
}

function createMatterContent(matterCode) {
  const require = new XMLHttpRequest();
  require.open('GET', dirMatter, true);
  require.onload = function() {
    const matter = JSON.parse(this.responseText)[matterCode];
    const matterSection = document.querySelector('.' + matter.initials);

    const matterContent = document.createElement('div');
    matterContent.classList.add('matterContent');
    matterSection.appendChild(matterContent);

    const matterContentTitle = document.createElement('h4');
    matterContentTitle.classList.add('matterContent__title');
    matterContentTitle.style.backgroundColor = matter.color;
    matterContentTitle.innerHTML = 'Conteúdo';
    matterContent.appendChild(matterContentTitle);

    const matterContentBox = document.createElement('div');
    matterContentBox.classList.add('matterContent__box');
    matterContent.appendChild(matterContentBox);

    const matterContentUl = document.createElement('ul');
    matterContentUl.classList.add('matterContent__ul');
    matterContentBox.appendChild(matterContentUl);

    const require = new XMLHttpRequest();
    require.open("GET", dirMatterContentSegundo, true);
    require.onload = function() {
      const conteudoxJSON = JSON.parse(this.responseText);
      const conteudoxContent = conteudoxJSON[matterCode].listContent[2];
      conteudoxContent.forEach(function(item) {
        const matterContentLi = document.createElement('Li');
        matterContentLi.classList.add('matterContent__li');
        matterContentLi.innerHTML = item;
        matterContentUl.appendChild(matterContentLi);
      })
    }
    require.send();

    const matterContentBtn = document.createElement('a');
    matterContentBtn.classList.add('matterContent__btn');
    matterContentBtn.style.backgroundColor = matter.color;
    matterContentBtn.href = '../conteudo/segundo/';
    matterContentBtn.innerHTML = 'Ver conteúdo';
    matterContentBox.appendChild(matterContentBtn);
  }
  require.send();
}

function callMatter(matterCode) {
  createMatterHeader(matterCode)
  createMatterNota(matterCode)
  createMatterContent(matterCode)
}