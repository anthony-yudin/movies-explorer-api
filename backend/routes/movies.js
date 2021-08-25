const movieRoutes = require('express').Router();
const { Joi, celebrate } = require('celebrate');
const auth = require('../middlewares/auth');
const validateLink = require('../middlewares/validateLink');

const {
  getMovies,
  createMovies,
  deleteMovies,
} = require('../controllers/movies');

movieRoutes.get('/movies', auth, getMovies);

movieRoutes.post('/movies', auth, celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.required(),
    trailerLink: Joi.string().custom(validateLink).required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
    thumbnail: Joi.string().required(),
    movieId: Joi.number().required(),
  }),
}), createMovies);

movieRoutes.delete('/movies/:id', auth, celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex(),
  }),
}), deleteMovies);

module.exports = movieRoutes;
