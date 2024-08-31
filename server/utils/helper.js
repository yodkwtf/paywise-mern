import mongoose from 'mongoose';
import validator from 'validator';
import jwt from 'jsonwebtoken';

// check if id is a valid mongo id
export const isValidMongoId = (id) => {
  return mongoose.Types.ObjectId.isValid(id);
};

// check if email is valid
export const isValidEmail = (email) => {
  return validator.isEmail(email);
};

// check if password is strong enough
export const isValidPassword = (password) => {
  return validator.isStrongPassword(password, { minSymbols: 1 });
};

// create jwt token
export const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};
