import express from 'express';
import { login, signup } from '../controllers/auth.js';

const router = express.Router();

// login user
router.post('/login', login);

// signup user
router.post('/signup', signup);

export default router;
