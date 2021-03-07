const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_level: Number,
  email: String,
  name: String,
  fav: [String],
  meta: [{
    meta_count: Number,
    metas: [String],
  }],
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
