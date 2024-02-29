export default {
  books: [],

  addBook(name, author, publicationYear, genre, countPages) {
    const booksLen = this.books.length;
    for (let i = 0; booksLen > i; i += 1) {
      if (this.books[i].name === name) {
        return false;
      }
    }

    this.books.push({
      name, author, publicationYear, genre, countPages,
    });
    return true;
  },

  removeBook(name) {
    this.books = this.books.filter((book) => book.name !== name);
  },

  findBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  },

  filterBooksByGenre(genre) {
    return this.books.filter((book) => book.genre === genre);
  },

  genreReport() {
    return this.books.reduce((acc, currentBook) => {
      const currentGenre = currentBook.genre;
      acc[currentGenre] = (acc[currentGenre] ?? 0) + 1;
      return acc;
    }, {});
  },

  averagePagesReport() {
    return this.books.reduce((acc, currentBook) => acc
    + currentBook.countPages, 0) / this.books.length;
  },

  sortedPublication() {
    return this.books.sort((first, second) => Math.sign(
      second.publicationYear - first.publicationYear,
    ));
  },
};
