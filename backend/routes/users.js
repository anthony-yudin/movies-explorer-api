const usersRoutes = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const auth = require('../middlewares/auth');

const {
  getUser,
  updateUser,
  createUser,
  login,
} = require('../controllers/users');

usersRoutes.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
}), login);

usersRoutes.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().min(2).max(30),
  }),
}), createUser);

usersRoutes.get('/users/me', auth, getUser);
usersRoutes.patch('/users/me', auth, celebrate({
  body: Joi.object().keys({
    email: Joi.string(),
    name: Joi.string(),
  }),
}), updateUser);

module.exports = usersRoutes;
