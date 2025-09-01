export default class BookService {
  constructor(user) {
    this.user = user;
  }

  getLatestBooks() {
    return [
      { title: 'Node.js für Einsteiger', author: 'Sascha Habbes', userId: 1 },
      { title: 'JavaScript: Die Grundlagen', author: 'Erika Mustermann', userId: 2 },
      { title: 'Moderne Webentwicklung', author: 'Max Mustermann', userId: 3 },
    ].filter((book) => book.userId === this.user?.id);
  }
}
