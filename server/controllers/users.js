import User from '../models/User.js';
import { isValidMongoId } from '../utils/helper.js';

/**
 * @description Login user
 * @route POST /api/users/login
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' });
    }

    return res.json({
      message: 'User logged in successfully',
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

/**
 * @description Signup user
 * @route POST /api/users/signup
 */
const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    // try and create user
    const user = await User.signup(email, password);

    if (!user) {
      return res.status(400).json({ error: 'Failed to create user' });
    }

    return res.status(201).json({
      message: 'User signed up successfully',
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { login, signup };
