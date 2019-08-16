const router = require('express').Router();
const ProjectController = require('../controllers/ProjectController');

router.get('/projects', async (req, res) => {
  const projects = await ProjectController.list();
  res.status(projects.status).send(projects);
});

module.exports = router;
