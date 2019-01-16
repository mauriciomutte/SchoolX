const require = new XMLHttpRequest();
require.open('GET', '/schoolX/leituras.json', true);
require.onload = function() {
  const livrosList = JSON.parse(this.responseText);

  function createBook(livroObj) {
    const main = document.querySelector('.leituras');

    const book = document.createElement('div');
    book.classList.add('leituras__book');
    main.appendChild(book);
  
    const bookImg = document.createElement('img');
    bookImg.classList.add('leituras__book__capa');
    bookImg.src = livroObj.img;
    book.appendChild(bookImg);
  
    const bookUl = document.createElement('ul');
    bookUl.classList.add('leituras__book__ul');
    book.appendChild(bookUl);
  
    livroObj.dados.forEach(function(item) {
      const bookLi = document.createElement('li');
      bookLi.classList.add('leituras__book__li');
      bookLi.innerHTML = item;
      bookUl.appendChild(bookLi);
    });
  };

  livrosList.forEach(function(item) {
    createBook(item);
  });
  
};
require.send();