const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: String
});

const User = model('User', userSchema);

module.exports = User;
