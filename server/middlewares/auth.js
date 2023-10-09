import User from '../models/Auth.js';
import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  // Verify authentication
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  // Get token from header
  const token = authorization.split(' ')[1];

  // Verify token
  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findOne({ _id }).select('-password');
    next();
  } catch (error) {
    res.status(401).json({ error: 'Request is not authorized' });
  }
};

export default auth;
