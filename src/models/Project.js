const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  technology: {
    type: String,
    default: ''
  },
  test_technology: {
    type: String,
    default: ''
  },
  approach: {
    type: String,
    default: ''
  },
  demo: {
    type: String,
    default: ''
  },
  source: {
    type: String,
    default: ''
  },
  blog_post: {
    type: String,
    default: ''
  },
}, { timestamps: true });

module.exports = mongoose.model('Project', Project);
