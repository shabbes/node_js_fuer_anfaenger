import UnauthorizedException from '../../error/exceptions/unauthorized.exception.js';

export function authMiddleware(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    throw new UnauthorizedException('Unauthorized');
  }
}
