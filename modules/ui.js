import Storage from './localStorage.js';
let newId = 0;
const libraryContainer = document.querySelector('.library');
const newTitleInput = document.querySelector('.add-title-input');
const newAuthorInput = document.querySelector('.add-author-input');

// Class for interaction with UI
export default class UI {
  static displayBook() {
    const books = Storage.getBooks();
    books.forEach((newBook) => {
      UI.addBooktoLibrary(newBook);
    });
  }

  static addBooktoLibrary(newBook) {
    newBook.id = newId;
    const html = `
    <div class="book-wrapper" id ="${newBook.id}">
      <p class="book-position">"${newBook.title}" by ${newBook.author}</p>
      <button id="${newBook.id}" class="remove-btn">Remove</button>
      <div class="line-bottom"></div>
    </div>
  `;
    libraryContainer.innerHTML += html;
    newId += 1;
  }

  static clearFields() {
    newTitleInput.value = '';
    newAuthorInput.value = '';
  }
}