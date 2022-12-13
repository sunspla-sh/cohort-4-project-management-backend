const express = require('express');
const router = express.Router();

const {
  createTaskController
} = require('../controllers/task.controllers');

router.post('/tasks', createTaskController);

module.exports = router;