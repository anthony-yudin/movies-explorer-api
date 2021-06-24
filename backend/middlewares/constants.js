const notAuthorize = 'Необходима авторизация';
const serverErr = 'Ошибка на сервере';
const incorrectDataMovie = 'Переданы некорректные данные при создании фильма';
const movierNotFind = 'Фильм не найден';
const onlyDeleteYourMovie = 'Можно удалить только свой фильм!';
const userNotFind = 'Пользователь не найден';
const incorrectCreateDataUser = 'Переданы некорректные данные при создании пользователя';
const doubleEmail = 'Пользователь с таким email уже существует';
const incorrectUpdateDataUser = 'Переданы некорректные данные при обновлении пользователя';

const allowedCors = [
  'https://frontend.nomoredomains.icu',
  'https://backend.nomoredomains.icu/api',
  'http://localhost:3005',
  'http://localhost:3005',
];

module.exports = {
  notAuthorize,
  serverErr,
  incorrectDataMovie,
  movierNotFind,
  onlyDeleteYourMovie,
  userNotFind,
  incorrectCreateDataUser,
  doubleEmail,
  incorrectUpdateDataUser,
  allowedCors,
};
