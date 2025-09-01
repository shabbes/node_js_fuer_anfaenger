import express from 'express';
import { getUser } from './user/controllers/user.controller.js';

const router = express.Router();

router.get('/user/:id', getUser);

export default router;