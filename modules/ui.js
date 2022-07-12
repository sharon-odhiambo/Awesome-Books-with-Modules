// Display Books
import { Store } from './storage.js';

export default class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.book-list');
    const addedbook = document.createElement('tr');
    addedbook.innerHTML = `
        <td class="cols1">"${book.title}" by ${book.author}</td>
        <td class="cols2"><button type="submit" class="delete">Remove</button></td>
        `;
    list.appendChild(addedbook);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
document.addEventListener('DOMContentLoaded', UI.displayBooks);
