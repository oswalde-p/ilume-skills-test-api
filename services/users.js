const mongoose = require('mongoose');
const { CustomError } = require('../errors');
const User = require('../models/users');

async function createUser(data) {
  const { userLevel, email, name } = data;
  // TODO use a library for proper validation
  if (!userLevel || !email || !name) throw new CustomError(400, 'Missing user data');
  const user = await User.create({ user_level: userLevel, email, name });
  return user;
}

async function getUserDetails(userId) {
  if (!mongoose.Types.ObjectId.isValid(userId)) throw new CustomError(400, 'userId must be a valid ObjectId');
  const user = await User.findById(userId);
  if (!user) throw new CustomError(404, 'User not found');
  return user;
}

function listUsers(page, term, perPage = 10) {
  let query;
  if (term) {
    const regexp = new RegExp(`${term}`, 'i');
    query = User.find({ $or: [{ name: regexp }, { email: regexp }] });
  } else {
    query = User.find();
  }
  query = query.sort({ name: 1 });
  if (page) {
    query = query.limit(perPage).skip((page - 1) * perPage);
  }
  return query.exec();
}
module.exports = {
  createUser,
  getUserDetails,
  listUsers,
};
