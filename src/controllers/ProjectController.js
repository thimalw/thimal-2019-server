import debug from 'debug';
const Project = require('../models/Project');
const { makeRes, to } = require('../helpers');

const list = async () => {
  let err, projects;
  [err, projects] = await to(Project.find({}, '_id title description image technology test_technology approach createdAt'));

  if (err) {
    debug(err);
    return makeRes(err.status, 'Unable to retrieve projects');
  }

  if (!projects) {
    projects = [];
  }

  return makeRes(200, 'Projects retrieved', projects);
};

module.exports = {
  list
};
