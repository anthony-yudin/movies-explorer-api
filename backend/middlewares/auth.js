const jwt = require('jsonwebtoken');
const NotAuthError = require('../errors/not-auth-error');
const { notAuthorize } = require('./constants');

const { JWT_SECRET, NODE_ENV } = require('../config');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    res.send(req.headers);
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key');
  } catch (err) {
    throw new NotAuthError(notAuthorize);
  }

  req.user = payload;

  next();
};
