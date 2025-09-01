import ForbiddenException from '../../error/exceptions/forbidden.exception.js';

export function roleMiddleware(role) {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      throw new ForbiddenException('Zutritt verweigert');
    }
  };
}
