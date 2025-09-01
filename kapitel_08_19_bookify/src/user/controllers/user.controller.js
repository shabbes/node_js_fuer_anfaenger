import User from '../models/user.model.js';
import { ROLE } from '../consts/role.const.js';
import jwt from 'jsonwebtoken';

export default class UserController {
  constructor(logging, userService, user) {
    this.logging = logging;
    this.userService = userService;
    this.user = user;
  }

  registerForm(req, res) {
    res.view('user:register.njk', {
      errors: [],
      fields: {
        name: '',
        email: '',
        password: '',
      },
    });
  }

  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      const passwordHash = await this.userService.generateHash(password);

      await User.create({
        name,
        email,
        passwordHash,
        role: ROLE.USER,
      });

      res.redirect('/users/login');
    } catch (error) {
      this.logging.error(error.message);
      this.logging.error(error.stack);

      res.status(400).view('user:register.njk', {
        errors: ['Fehler bei der Registrierung'],
        fields: {
          name,
          email,
          password,
        },
      });
    }
  }

  loginForm(req, res) {
    res.view('user:login.njk', {
      errors: [],
      fields: {
        email: '',
        password: '',
      },
    });
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (
        user &&
        user.isActive &&
        (await this.userService.comparePassword(password, user.passwordHash))
      ) {
        await user.update({ lastLogin: new Date() });

        if (req.isApi) {
          const payload = { userId: user.id };
          const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

          return res.json({ token });
        }

        req.session.userId = user.id;

        if (user.role === ROLE.ADMIN) {
          res.redirect('/admin');
        } else {
          res.redirect('/users/dashboard');
        }
      } else {
        res.status(401).view('user:login.njk', {
          errors: ['Ungültige Anmeldedaten'],
          fields: {
            email,
            password,
          },
        });
      }
    } catch (error) {
      this.logging.error(error.message);
      this.logging.error(error.stack);

      res.status(400).view('user:login.njk', {
        errors: ['Fehler bei der Anmeldung'],
        fields: {
          email,
          password,
        },
      });
    }
  }

  dashboard(req, res) {
    res.send(`Willkommen auf deinem Dashboard, ${this.user.name}!`);
  }
}
