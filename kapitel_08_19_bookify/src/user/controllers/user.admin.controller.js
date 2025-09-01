// src/user/controllers/user.admin.controller.js

import User from '../models/user.model.js';
import { Op } from 'sequelize';
import { ROLE } from '../consts/role.const.js';
import NotFoundException from '../../error/exceptions/not-found.exception.js';
import BadRequestException from '../../error/exceptions/bad-request.exception.js';

export default class UserAdminController {
  constructor(userService, user) {
    this.userService = userService;
    this.user = user;
  }

  async table(req, res) {
    const { search } = req.query;
    const users =
      typeof search === 'string' && search.length
        ? await User.findAll({
            where: {
              [Op.or]: [
                { name: { [Op.like]: `%${search}%` } },
                { email: { [Op.like]: `%${search}%` } },
              ],
            },
          })
        : await User.findAll();

    res.respond('user:admin_table.njk', { users });
  }

  async createForm(req, res) {
    res.view('user:admin_create.njk', {
      errors: [],
      user: {
        name: '',
        email: '',
        isActive: '1',
        role: ROLE.USER,
      },
    });
  }

  async create(req, res) {
    const { name, email, password, role, isActive } = req.body;

    const existing = await User.findOne({ where: { email } });

    if (existing) {
      return res.status(400).view('user:admin_create.njk', {
        errors: ['E-Mail-Adresse wird bereits verwendet.'],
        user: { name, email, role, isActive },
      });
    }

    const passwordHash = await this.userService.generateHash(password);

    await User.create({
      name,
      email,
      passwordHash,
      role,
      isActive: isActive === '1',
    });

    res.redirect('/admin/users');
  }

  async editForm(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      throw new NotFoundException();
    }

    res.view('user:admin_edit.njk', {
      errors: [],
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        isActive: user.isActive ? '1' : '0',
      },
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, email, password, role, isActive } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      throw new NotFoundException();
    }

    const otherUser = await User.findOne({
      where: {
        email,
        id: {
          [Op.ne]: id,
        },
      },
    });

    if (otherUser) {
      return res.status(400).view('user:admin_edit.njk', {
        errors: ['Diese E-Mail-Adresse wird bereits verwendet.'],
        user: { id, name, email, role, isActive },
      });
    }

    user.name = name;
    user.email = email;
    user.role = role;
    user.isActive = isActive === '1';

    if (password && password.length >= 6) {
      user.passwordHash = await this.userService.generateHash(password);
    }

    await user.save();

    res.redirect('/admin/users');
  }

  async remove(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      throw new NotFoundException();
    }

    if (parseInt(id, 10) === this.user.id) {
      throw new BadRequestException('Sie können sich nicht selbst löschen.');
    }

    await user.destroy();

    res.redirect('/admin/users');
  }
}
