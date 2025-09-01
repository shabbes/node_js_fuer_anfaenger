// src/user/schemas/user.schema.js

import { ROLE } from '../consts/role.const.js';
import * as z from 'zod/v4';
import de from 'zod/v4/locales/de.js';

z.config(de());

const baseUserSchema = z.object({
  name: z.string().min(1, 'Name ist erforderlich'),
  email: z.email('Ungültige E-Mail-Adresse'),
  role: z.enum([ROLE.ADMIN, ROLE.USER]),
  isActive: z.union([z.literal('1'), z.literal('0')]),
});

const createUserSchema = baseUserSchema.extend({
  password: z.string().min(6, 'Passwort muss mindestens 6 Zeichen lang sein'),
});

const updateUserSchema = baseUserSchema.extend({
  password: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 6, {
      message: 'Passwort muss mindestens 6 Zeichen lang sein',
    }),
});

export { createUserSchema, updateUserSchema };
