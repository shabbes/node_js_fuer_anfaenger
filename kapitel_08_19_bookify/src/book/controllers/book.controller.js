import Book from '../models/book.model.js';
import Author from '../../author/models/author.model.js';
import { Op } from 'sequelize';
import NotFoundException from '../../error/exceptions/not-found.exception.js';

export default class BookController {
  constructor(logging, user) {
    this.logging = logging;
    this.user = user;
  }

  async list(req, res) {
    this.logging.log('BookController.list');

    const { query } = req;
    const page = typeof query.page === 'string' ? parseInt(query.page, 10) : 1;
    const limit = 10;
    const offset = (page - 1) * limit;
    const where = query.title ? { title: { [Op.like]: `%${query.title}%` } } : {};
    const { rows: books, count } = await Book.findAndCountAll({
      where,
      include: ['author'],
      limit,
      offset,
    });

    const totalPages = Math.ceil(count / limit);

    res.respond('book:list.njk', { books, query, page, totalPages });
  }

  async detail(req, res) {
    const book = await Book.findByPk(req.params.id, {
      include: [
        'author',
        {
          association: 'reviews',
          include: ['user'],
        },
      ],
    });

    if (book) {
      res.view('book:detail.njk', {
        book,
        isLoggedIn: this.user !== null,
      });
    } else {
      throw new NotFoundException('Buch nicht gefunden');
    }
  }

  async createForm(req, res) {
    const authors = await Author.findAll();

    res.view('book:create.njk', {
      authors,
    });
  }

  async create(req, res) {
    try {
      const { title, authorId, isbn, description, publishedYear } = req.body;
      const coverImage = req.file ? req.file.filename : null;

      const newBook = await Book.create({
        title,
        authorId,
        isbn,
        description,
        publishedYear,
        coverImage,
      });

      res.redirect(`/books/${newBook.id}`);
    } catch (error) {
      console.error(error);

      res.status(400).send('Fehler beim Anlegen des Buches');
    }
  }

  async editForm(req, res) {
    const book = await Book.findByPk(req.params.id, { include: ['author'] });
    const authors = await Author.findAll();

    if (book) {
      res.view('book:edit.njk', { book, authors });
    } else {
      res.status(404).send('Buch nicht gefunden');
    }
  }

  async update(req, res) {
    try {
      const { title, authorId, isbn, description, publishedYear } = req.body;
      const book = await Book.findByPk(req.params.id);

      if (book) {
        await book.update({ title, authorId, isbn, description, publishedYear });

        res.redirect(`/books/${book.id}`);
      } else {
        res.status(404).send('Buch nicht gefunden');
      }
    } catch (error) {
      console.error(error);

      res.status(400).send('Fehler beim Aktualisieren des Buches');
    }
  }

  async remove(req, res) {
    try {
      const book = await Book.findByPk(req.params.id);

      if (book) {
        await book.destroy();

        res.redirect('/books');
      } else {
        res.status(404).send('Buch nicht gefunden');
      }
    } catch (error) {
      console.error(error);
      res.status(400).send('Fehler beim Löschen des Buches');
    }
  }
}
