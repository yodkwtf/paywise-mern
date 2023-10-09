import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { isValidEmail, isValidPassword } from '../utils/helper.js';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
UserSchema.signup = async function (email, password) {
  // validations
  if (!email || !password) {
    throw new Error('Email and Password are required');
  }

  if (!isValidEmail(email)) {
    throw new Error('Email is invalid');
  }
  if (!isValidPassword(password)) {
    throw new Error('Password is not strong enough');
  }

  const existingUser = await this.findOne({ email });
  if (existingUser) {
    throw new Error('Email already exists');
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await this.create({
    email,
    password: hashedPassword,
  });
  return user;
};

// static login method
UserSchema.statics.login = async function (email, password) {
  // validations
  if (!email || !password) {
    throw new Error('Email and Password are required');
  }

  if (!isValidEmail(email)) {
    throw new Error('Email is invalid');
  }

  // check if user exists
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error('Email does not exist');
  }

  // compare password with hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Incorrect email or password');
  }

  return user;
};

const User = mongoose.model('User', UserSchema);

export default User;
