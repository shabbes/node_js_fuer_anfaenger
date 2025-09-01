// src/admin/middlewares/audit-log.middleware.js
import AuditLog from '../models/audit-log.model.js';

export const auditLogMiddleware = (action, resource) => async (req, res, next) => {
  if (!req.user) {
    return next();
  }

  try {
    // Request-Body kopieren und sensible Daten entfernen
    let sanitizedBody = null;

    if (req.body && Object.keys(req.body).length > 0) {
      sanitizedBody = { ...req.body };

      if ('password' in sanitizedBody) {
        delete sanitizedBody.password;
      }

      // Weitere sensible Felder können hier entfernt werden
      // z.B. delete sanitizedBody.token;
    }

    await AuditLog.create({
      userId: req.user.id,
      action,
      resource,
      method: req.method,
      url: req.originalUrl,
      body: sanitizedBody,
      ipAddress: req.ip,
    });

    next();
  } catch (error) {
    console.error('Fehler beim Protokollieren der Aktion:', error);

    next(error);
  }
};
