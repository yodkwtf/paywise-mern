import User from '../models/Auth.js';
import { createToken } from '../utils/helper.js';

/**
 * @description Login user
 * @route POST /api/auth/login
 */
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // try and login user
    const user = await User.login(email, password);

    // create token
    const token = createToken(user._id);

    return res.status(200).json({
      message: 'Logged in',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    console.log('LOGIN_ERROR: ', error.message);
    return res.status(500).json({ error: error.message });
  }
};

/**
 * @description Signup user
 * @route POST /api/auth/signup
 */
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // try and create user
    const user = await User.signup(name, email, password);

    // create token
    const token = createToken(user._id);

    return res.status(201).json({
      message: 'Signup successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        token,
      },
    });
  } catch (error) {
    console.log('SIGNUP_ERROR: ', error.message);
    return res.status(500).json({ error: error.message });
  }
};

export { login, signup };
