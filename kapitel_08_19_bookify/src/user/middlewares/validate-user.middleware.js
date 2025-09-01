// src/user/middlewares/validate-user.middleware.js

import { createUserSchema, updateUserSchema } from '../schemas/user.schema.js';

export async function validateUser(req, res, next) {
  const isCreate = req.method === 'POST';
  const schema = isCreate ? createUserSchema : updateUserSchema;

  try {
    await schema.parseAsync(req.body);

    next();
  } catch (error) {
    const errors = error.issues.map((err) => `${err.path.join('.')}: ${err.message}`);

    // Passwort entfernen, damit es nicht im Template angezeigt wird
    const { password, ...safeUserData } = req.body;
    const template = isCreate ? 'user:admin_create.njk' : 'user:admin_edit.njk';

    res.status(400).view(template, {
      errors,
      user: safeUserData,
    });
  }
}
