import User from '../models/User.js';
import { createToken } from '../utils/helper.js';

/**
 * @description Login user
 * @route POST /api/users/login
 */
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // try and login user
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);

    return res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        email: user.email,
        token,
      },
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

    // create token
    const token = createToken(user._id);

    return res.status(201).json({
      message: 'Signup successful',
      user: {
        id: user._id,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { login, signup };
