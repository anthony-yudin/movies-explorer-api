const usersRoutes = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const auth = require('../middlewares/auth');

const {
  getUser,
  updateUser,
} = require('../controllers/users');

usersRoutes.get('/users/me', auth, getUser);
usersRoutes.patch('/users/me', auth, celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().min(2).max(30),
    name: Joi.string().required().min(2).max(30),
  }),
}), updateUser);

module.exports = usersRoutes;
