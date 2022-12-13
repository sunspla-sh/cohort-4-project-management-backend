const Task = require('../models/Task.model');
const Project = require('../models/Project.model');

const createTaskController = (req, res, next) => {

  Task.create({
    title: req.body.title,
    description: req.body.description,
    project: req.body.projectId
  })
    .then(createdTask => {

      return Project.findByIdAndUpdate(createdTask.project, {
        $push: {
          tasks: createdTask._id
        }
      }, { new: true })
    })
    .then(updatedProject => {
      res.send(updatedProject);
    })
    .catch(err => res.send(err))

};

module.exports = {
  createTaskController
}