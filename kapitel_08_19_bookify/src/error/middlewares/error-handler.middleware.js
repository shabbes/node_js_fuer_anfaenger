// src/core/middlewares/error-handler.middleware.js

import fs from 'fs-extra';
import path from 'path';

export default async function errorHandler(err, req, res, next) {
  console.error(err.stack);

  const statusCode = err.statusCode ?? 500;
  const errorViewsPath = path.join(process.cwd(), 'src', 'error', 'views');
  const errorTemplatePath = path.join(errorViewsPath, `${statusCode}.njk`);
  const templateExists = await fs.pathExists(errorTemplatePath);
  const message = err.message ?? 'Interner Server Fehler';

  if (templateExists) {
    res.status(statusCode).respond(`error:${statusCode}.njk`, {
      error: message,
      statusCode,
    });
  } else {
    res.status(statusCode).respond(`error:fallback.njk`, {
      error: message,
      statusCode,
    });
  }
}
