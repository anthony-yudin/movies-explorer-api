const indexRoutes = require('express').Router();
const usersRoutes = require('./users');
const movieRoutes = require('./movies');

indexRoutes.use('/', usersRoutes);
indexRoutes.use('/', movieRoutes);

module.exports = indexRoutes;
