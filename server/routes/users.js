import express from 'express';
import { login, signup } from '../controllers/users.js';

const router = express.Router();

// login user
router.post('/login', login);

// signup user
router.post('/signup', signup);

// logout user
router.post('/logout', (req, res) => {});

export default router;
