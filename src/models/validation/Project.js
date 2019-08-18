const Joi = require('@hapi/joi');

module.exports = Joi.object().keys({
  title: Joi.string()
    .allow('')
    .max(400)
    .label('Title'),
  description: Joi.string()
    .allow('')
    .label('Project description'),
  image: Joi.string()
    .allow('')
    .max(400)
    .label('Project image'),
  technology: Joi.string()
    .allow('')
    .max(400)
    .label('Project technology'),
  test_technology: Joi.string()
    .allow('')
    .max(400)
    .label('Test framework'),
  approach: Joi.string()
    .allow('')
    .max(400)
    .label('Development approach'),
});
