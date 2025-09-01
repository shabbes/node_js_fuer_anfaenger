import registerSchema from '../schemas/register.schema.js';

export async function validateRegister(req, res, next) {
  try {
    await registerSchema.parseAsync(req.body);

    next();
  } catch (error) {
    const errors = error.issues.map((err) => `${err.path.join('.')}: ${err.message}`);

    res.status(400).view('user:register.njk', {
      errors,
      fields: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      },
    });
  }
}
