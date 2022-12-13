const Project = require('../models/Project.model');
//const Task = require('../models/Task.model');

const createProjectController = (req, res, next) => {
  
  console.log(req.body);
  
  Project.create({
    title: req.body.title,
    description: req.body.description
  })
    .then(createdProject => {
      res.send(createdProject);
    })
    .catch(err => res.send(err));

};

const listProjectsController = (req, res, next) => {

  Project.find()
    .then(foundProjectsArray => {
      res.send(foundProjectsArray)
    })
    .catch(err => res.send(err));

};

const listProjectByIdController = (req, res, next) => {

  Project.findById(req.params.projectId)
    .then(foundProject => {
      res.send(foundProject)
    })
    .catch(err => res.send(err));
    
};

const updateProjectByIdController = (req, res, next) => {

  Project.findByIdAndUpdate(req.params.projectId, {
    title: req.body.title,
    description: req.body.description
  }, { new: true })
    .then(updatedProject => {
      res.send(updatedProject);
    })
    .catch(err => res.send(err));

};

const deleteProjectByIdController = (req, res, next) => {

  Project.findByIdAndDelete(req.params.projectId)
    .then(deletedProject => {
      res.send(deletedProject);
    })
    .catch(err => res.send(err));

};

module.exports = {
  createProjectController,
  listProjectsController,
  listProjectByIdController,
  updateProjectByIdController,
  deleteProjectByIdController
};