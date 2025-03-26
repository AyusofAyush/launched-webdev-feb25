const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('../config');

exports.register = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

exports.login = async (username, password) => {
  const user = await User.findOne({ username });
  if (!user || !(await user.comparePassword(password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
  return { user, token };
};

exports.verifyToken = (token) => {
  return jwt.verify(token, config.jwtSecret);
};

exports.getUserById = async (id) => {
  return await User.findById(id).select('-password'); // Exclude password field
};
