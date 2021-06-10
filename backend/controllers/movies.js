const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-err');
const InternalServerErr = require('../errors/internal-server-err');
const BadRequestErr = require('../errors/bad-request-err');
const ForbiddenError = require('../errors/forbidden-error');
const {
  serverErr, incorrectDataMovie, movierNotFind, onlyDeleteYourMovie,
} = require('../middlewares/constants');

exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then((movie) => {
      res.send(movie);
    })
    .catch(() => {
      throw new InternalServerErr(serverErr);
    })
    .catch(next);
};

exports.createMovies = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU, nameEN,
    thumbnail,
    movieId,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId,
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestErr(incorrectDataMovie);
      throw new InternalServerErr(serverErr);
    })
    .catch(next);
};

exports.deleteMovies = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError(movierNotFind);
      }
      if (req.user._id !== movie.owner.toString()) {
        throw new ForbiddenError(onlyDeleteYourMovie);
      } else {
        Movie.findByIdAndRemove(req.params.id)
          .then(() => res.send(movie))
          .catch(next);
      }
    })
    .catch(next);
};
