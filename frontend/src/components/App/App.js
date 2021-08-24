import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NoMatchPage from '../NoMatchPage/NoMatchPage';
import Preloader from '../Preloader/Preloader';
import * as Auth from '../Auth';

import '../../blocks/account/account.css';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import api from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import { Route, Switch, useHistory, useLocation, Redirect } from 'react-router-dom';
import LikedMovies from "../LikedMovies/LikedMovies";
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const location = useLocation();
  let history = useHistory();
  let header;
  let footer;

  // Стейты интерфейса
  const [isVisibleMenu, setIsVisibleMenu] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

  // Данные пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  const [token, setToken] = React.useState();
  const [loggedIn, setLoggedIn] = React.useState(false);

  // Фильмы
  const [movies, setMovies] = React.useState([]);
  const [likedMovies, setLikedMovies] = React.useState({});
  const [isNoMoviesFind, setIsNoMoviesFind] = React.useState(false);
  const [isNoLikedMoviesFind, setIsNoLikedMoviesFind] = React.useState(false);

  function handleMenuClick() {
    setIsVisibleMenu(!isVisibleMenu);
  }

  if (location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile') {
    if (location.pathname !== '/profile') {
      footer = <Footer />;
    }
    header = <Header loggedIn={loggedIn} onMenuClick={handleMenuClick} />;
  }

  function tokenCheck(token) {
    return api.tokenCheck(localStorage.getItem('token') ? localStorage.getItem('token') : token)
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
        setToken(localStorage.getItem('token') ? localStorage.getItem('token') : token);
        history.push('/movies');
      })
      .catch(() => Promise.reject())
  }

  function handleSignIn({ email, password }) {
    setIsLoading(true);

    Auth.authorize(email, password)
      .then((data) => {
        setMessage();

        tokenCheck(data.token).then(() => {
          setToken(localStorage.getItem('token'));
          localStorage.setItem('token', data.token);
        })
      })
      .catch((err) => setMessage(err))
      .finally(() => setIsLoading(false))
  }

  function handleRegister({ name, email, password }) {
    setIsLoading(true);

    Auth.register(name, password, email)
      .then(() => {
        handleSignIn({
          email: email,
          password: password
        });

        setMessage();
      })
      .catch((err) => setMessage(err))
      .finally(() => setIsLoading(false))
  }

  function handleUpdateCurrentUser(data) {
    if (token) {
      setIsLoading(true);

      Auth.updateCurrentUserProfile(data, token)
        .then((res) => {
          setCurrentUser(res);
          setMessage('Данные пользователя обновлены!');
        })
        .catch((err) => console.log(`При обновлении пользователя возникла ошибка ${err}`))
        .finally(() => setIsLoading(false))
    }
  }

  function searchFilter(searchInput, shortFilm, movies) {
    function filterKeyword(movie) {
      return JSON.stringify(movie).toLowerCase().includes(searchInput.toLowerCase())
    }

    function filterShortFilm(movie) {
      return movie.duration <= 40;
    }

    if (shortFilm) {
      return movies.filter(filterKeyword).filter(filterShortFilm);
    } else {
      return movies.filter(filterKeyword);
    }
  }

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      tokenCheck().then(() => {
        const localMovies = JSON.parse(localStorage.getItem('movies'));
        const moviesSearch = JSON.parse(localStorage.getItem('movies-search'));

        if (localMovies) {
          setMovies(localMovies);

          if (moviesSearch) {
            setMovies(moviesSearch);
          }
        } else {
          setIsLoading(true);

          moviesApi.getMovies()
            .then((data) => {
              console.log(data);
              setMovies(data);
              localStorage.setItem('movies', JSON.stringify(data));
              setMessage();
            })
            .catch((err) => setMessage(err))
            .finally(() => setIsLoading(false))
        }
      })
    }
  }, [token])

  React.useEffect(() => {
    if (token) {
      const likedMovies = localStorage.getItem('movies-liked-search');

      if (!likedMovies) {
        api.getLikedMovies(token)
          .then((data) => {
            const movies = data.filter(item => currentUser._id === item.owner);

            console.log(currentUser._id, data);

            localStorage.setItem('movies-liked-search', JSON.stringify(movies));
            setLikedMovies(movies);
            setMessage();
          })
          .catch((err) => setMessage(err));
      } else {
        setLikedMovies(JSON.parse(likedMovies));
      }
    }
  }, [token]);

  function handleMovieSearch(searchInput, shortFilm) {
    const localMovies = JSON.parse(localStorage.getItem('movies'));

    if (localMovies) {
      const filteredMovies = searchFilter(searchInput, shortFilm, localMovies);

      if (filteredMovies.length === 0) {
        setIsNoMoviesFind(true);
      } else {
        setIsNoMoviesFind(false);
      }

      localStorage.setItem('movies-search', JSON.stringify(filteredMovies));

      setMovies(filteredMovies);
    }
  }

  function handleSearchLiked(searchInput, shortFilm) {
    if (token) {
      const localLikedMovies = JSON.parse(localStorage.getItem('movies-liked-search'));
      const filteredLikedMovies = searchFilter(searchInput, shortFilm, localLikedMovies ? localLikedMovies : likedMovies);

      setLikedMovies(filteredLikedMovies);

      if (filteredLikedMovies.length === 0) {
        setIsNoLikedMoviesFind(true);
      } else {
        setIsNoLikedMoviesFind(false);
      }
    }
  }

  function handleLiked(data) {
    if (token) {
      const {
        country,
        director,
        duration,
        year,
        image,
        description,
        nameRU,
        nameEN,
        trailerLink,
        id: movieId,
        thumbnail,
      } = data;

      api.likeMovie({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }, token)
        .then((movie) => {
          setLikedMovies([...likedMovies, movie]);
          localStorage.setItem('movies-liked-search', JSON.stringify([...likedMovies, movie]));
          setMessage();
        })
        .catch((err) => console.log(`При добавлении фильма в "сохраненные фильмы" возникла ошибка: ${err}`))
    } else {
      history.push('/signin');
    }
  }

  function handleDeleteLiked(movie) {
    const movieFilter = likedMovies.filter((likedMovie) => likedMovie.movieId !== (movie.id || movie.movieId))

    if (token) {
      const movieToDelete = likedMovies.find((likedMovie) => likedMovie.movieId === (movie.id || movie.movieId));

      api.deleteLikedMovie(movieToDelete._id, token)
        .then(() => {
          setLikedMovies(movieFilter);
          localStorage.setItem('movies-liked-search', JSON.stringify(movieFilter));
          setMessage();
        })
        .catch((err) => console.log(err))
    }
  }

  React.useEffect(() => {
    function handleWindowLoad() {
      setIsLoading(false);
    }

    window.addEventListener('load', handleWindowLoad);

    return () => window.removeEventListener('load', handleWindowLoad);
  }, [])

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem('token');
    history.push('/signin');
    setToken('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {header}

      <main>
        <Switch>
          <Route path="/" exact>
            {isLoading ? <Preloader /> : <Main />}
          </Route>

          <ProtectedRoute
            component={Movies}
            loggedIn={loggedIn}
            path="/movies"
            likedMovies={likedMovies}
            visibleMenu={isVisibleMenu}
            onMenuClick={handleMenuClick}
            isNoMoviesFind={isNoMoviesFind}
            isLoading={isLoading}
            message={message}
            handleMovieSearch={handleMovieSearch}
            movies={movies}
            onLiked={handleLiked}
            deleteLiked={handleDeleteLiked}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={LikedMovies}
            movies={likedMovies}
            isLoading={isLoading}
            message={message}
            isNoLikedMoviesFind={isNoLikedMoviesFind}
            handleSearchLiked={handleSearchLiked}
            deleteLiked={handleDeleteLiked}
          />

          <ProtectedRoute
            path="/profile"
            loggedIn={loggedIn}
            onSignOut={handleSignOut}
            currentUser={currentUser}
            onUpdateCurrentUser={handleUpdateCurrentUser}
            isLoading={isLoading}
            component={Profile}
            message={message}
          />

          <Route path="/signup">
            <Register onRegister={handleRegister} isLoading={isLoading} message={message} />
          </Route>

          <Route path="/signin">
            <Login onLogin={handleSignIn} message={message} isLoading={isLoading} />
          </Route>

          <Route component={NoMatchPage} />
        </Switch>
      </main>

      {footer}
    </CurrentUserContext.Provider>
  )
}

export default App;
