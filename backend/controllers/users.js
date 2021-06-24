const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const InternalServerErr = require('../errors/internal-server-err');
const BadRequestErr = require('../errors/bad-request-err');
const NotAuthError = require('../errors/not-auth-error');
const DoubleEmailError = require('../errors/double-email-error');
const { JWT_SECRET, NODE_ENV } = require('../config');

const {
  userNotFind, incorrectCreateDataUser, doubleEmail, incorrectUpdateDataUser, serverErr,
} = require('../middlewares/constants');

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key', { expiresIn: '7d' },
      );

      res.send({
        email,
        token,
      });
    })
    .catch((err) => {
      throw new NotAuthError(err.message);
    })
    .catch(next);
};

exports.getUser = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError(userNotFind);
      }

      return res.send(user);
    })
    .catch(next);
};

exports.createUser = (req, res, next) => {
  const {
    email, password, name, about, avatar,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email, password: hash, name, about, avatar,
    }))
    .then((user) => res.send({ ...user._doc, password: undefined }))
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestErr(incorrectCreateDataUser);
      if (err.name === 'MongoError' && err.code === 11000) throw new DoubleEmailError(doubleEmail);
      throw new InternalServerErr('Ошибка на сервере');
    })
    .catch(next);
};

exports.updateUser = (req, res, next) => {
  const { email, name } = req.body;

  User.findByIdAndUpdate(req.user._id, { email, name }, { new: true, runValidators: true })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestErr(incorrectUpdateDataUser);
      throw new InternalServerErr(serverErr);
    })
    .catch(next);
};
