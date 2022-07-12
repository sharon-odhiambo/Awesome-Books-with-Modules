/* eslint-disable max-classes-per-file */
export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// local Storage
export class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
/* eslint-enable max-classes-per-file */