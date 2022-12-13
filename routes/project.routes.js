const express = require('express');
const router = express.Router();
const { 
  createProjectController,
  listProjectsController,
  listProjectByIdController,
  updateProjectByIdController,
  deleteProjectByIdController
} = require('../controllers/project.controllers');

router.post('/projects', createProjectController);

router.get('/projects', listProjectsController);

router.get('/projects/:projectId', listProjectByIdController);

router.put('/projects/:projectId', updateProjectByIdController);

router.delete('/projects/:projectId', deleteProjectByIdController);

module.exports = router;