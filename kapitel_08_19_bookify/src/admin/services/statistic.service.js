import User from '../../user/models/user.model.js';
import Book from '../../book/models/book.model.js';
import Review from '../../book/models/review.model.js';
import Author from '../../author/models/author.model.js';
import { ROLE } from '../../user/consts/role.const.js';

export default class StatisticService {
  async getCounts() {
    const [userCount, adminCount, bookCount, reviewCount, authorCount] = await Promise.all([
      User.count({ where: { role: ROLE.USER } }),
      User.count({ where: { role: ROLE.ADMIN } }),
      Book.count(),
      Review.count(),
      Author.count(),
    ]);

    return {
      userCount,
      adminCount,
      bookCount,
      reviewCount,
      authorCount,
    };
  }
}
