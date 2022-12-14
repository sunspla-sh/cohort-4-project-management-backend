const bcryptjs = require('bcryptjs');
const User = require('../models/User.model');

const signupController = (req, res, next) => {

  console.log(req.body);

  res.send(req.body)



};

module.exports = {
  signupController
};