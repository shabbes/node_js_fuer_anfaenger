// src/startpage/controllers/startpage.controller.js

export default class StartpageController {
  constructor(bookService) {
    this.bookService = bookService;
  }

  view(req, res) {
    const latestBooks = this.bookService.getLatestBooks();

    res.view('startpage:view.njk', { latestBooks });
  }
}
