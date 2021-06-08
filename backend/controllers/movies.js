const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-err');
const InternalServerErr = require('../errors/internal-server-err');
const BadRequestErr = require('../errors/bad-request-err');
const ForbiddenError = require('../errors/forbidden-error');

exports.getMovies = (req, res, next) => {
  Movie.find({})
    .then((movie) => {
      res.send(movie);
    })
    .catch(() => {
      throw new InternalServerErr('Ошибка на сервере');
    })
    .catch(next);
};

exports.createMovies = (req, res, next) => {
  const {
    country, director, duration, year, description, image, trailer, nameRU, nameEN, thumbnail,
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
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') throw new BadRequestErr('Переданы некорректные данные при создании фильма');
      throw new InternalServerErr('Ошибка на сервере');
    })
    .catch(next);
};

exports.deleteMovies = (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      if (!movie) {
        throw new NotFoundError('Фильм не найден');
      }
      if (req.user._id !== movie.owner.toString()) {
        throw new ForbiddenError('Можно удалить только свой фильм!');
      } else {
        Movie.findByIdAndRemove(req.params.id)
          .then(() => res.send(movie))
          .catch(next);
      }
    })
    .catch(next);
};
