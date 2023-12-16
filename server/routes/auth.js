import express from 'express';
import { login, signup } from '../controllers/auth.js';

const router = express.Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     tags: [Authentication]
 *     description: Log in a user with valid credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *           example:
 *             email: john@mail.com
 *             password: HelloWorld@123
 *     responses:
 *       200:
 *         description: Logged in successfully
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */
router.post('/login', login);

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     summary: User registration
 *     tags: [Authentication]
 *     description: Register a new user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *           example:
 *             name: John Doe
 *             email: john@mail.com
 *             password: HelloWorld@123
 *     responses:
 *       201:
 *         description: Signup successful
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
router.post('/signup', signup);

export default router;
