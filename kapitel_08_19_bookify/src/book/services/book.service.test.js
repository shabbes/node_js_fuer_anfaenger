import { test, expect } from 'vitest';
import BookService from './book.service.js';

test('getLatestBooks liefert die letzten Bücher des Benutzers zurück', () => {
  const mockUser = { id: 1 };
  const bookService = new BookService(mockUser);

  const books = bookService.getLatestBooks();

  expect(books).toEqual([{ title: 'Node.js für Einsteiger', author: 'Sascha Habbes', userId: 1 }]);
});
