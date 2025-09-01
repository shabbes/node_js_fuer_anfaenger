import BadRequestException from '../../error/exceptions/bad-request.exception.js';
import Review from '../models/review.model.js';

export default class ReviewController {
  async create(req, res) {
    const { rating, comment } = req.body;
    const { bookId } = req.params;
    const userId = req.session.userId;
    const existingReview = await Review.findOne({
      where: { bookId, userId },
    });

    if (existingReview) {
      throw new BadRequestException('Sie haben dieses Buch bereits bewertet.');
    }

    await Review.create({
      rating,
      comment,
      bookId,
      userId,
    });

    res.redirect(`/books/${bookId}`);
  }
}
