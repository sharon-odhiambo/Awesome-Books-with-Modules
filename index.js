// Add/Remove Added Books
import { Book, Store } from './modules/storage.js';
import UI from './modules/ui.js';
import {
  tableSection, addSection, contactSection, listLink, addLink, contactLink,
} from './modules/spa.js';
import { DateTime } from './modules/luxon.js';
// Add EventListening
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  UI.addBookToList(book);
  Store.addBook(book);
  UI.clearFields();
});
document.querySelector('.book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
});
// Single Page Application
listLink.addEventListener('click', () => {
  addSection.style.display = 'none';
  tableSection.style.display = 'block';
  contactSection.style.display = 'none';
});
addLink.addEventListener('click', () => {
  addSection.style.display = 'block';
  tableSection.style.display = 'none';
  contactSection.style.display = 'none';
});
contactLink.addEventListener('click', () => {
  addSection.style.display = 'none';
  tableSection.style.display = 'none';
  contactSection.style.display = 'block';
});
// Display Date
const now = DateTime.now();
document.getElementById('date-time').innerHTML = now.toLocaleString(
  DateTime.DATETIME_FULL,
);
