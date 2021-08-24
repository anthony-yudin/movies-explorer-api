import React from 'react';
import './MoviesCardList.css';
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";

function MoviesCardList({ movies, onLiked, likedMovies, deleteLiked }) {
  let location = useLocation();

  const [isShowButtonActive, setIsShowButtonActive] = React.useState(false);
  const [moviesToLoad, setMoviesToLoad] = React.useState([]);
  const [numberMoviesToLoad, setNumberMoviesToLoad] = React.useState(0);
  const [numberMoviesToAdd, setNumberMoviesToAdd] = React.useState(0);

  function handleShowMoreMoviesButtonClick() {
    setMoviesToLoad(movies.slice(0, moviesToLoad.length + numberMoviesToAdd));

    if (moviesToLoad.length >= movies.length - numberMoviesToAdd) {
      setIsShowButtonActive(false);
    }
  }

  function countNumberMovies() {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      setNumberMoviesToLoad(12);
      setNumberMoviesToAdd(4);
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      setNumberMoviesToLoad(8);
      setNumberMoviesToAdd(2);
    } else if (window.matchMedia('(min-width: 320px)').matches) {
      setNumberMoviesToLoad(5);
      setNumberMoviesToAdd(1);
    }
  }

  React.useEffect(() => {
    countNumberMovies();
  }, [])

  React.useEffect(() => {
    let timeOut = null;

    function handleResize() {
      clearTimeout(timeOut);

      timeOut = setTimeout(() => {
        countNumberMovies();
      }, 150);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [])

  React.useEffect(() => {
    if (location.pathname === '/movies') {
      setMoviesToLoad(movies.slice(0, numberMoviesToLoad));

      if (movies.length <= numberMoviesToLoad) {
        setIsShowButtonActive(false);
      } else {
        setIsShowButtonActive(true);
      }
    } else if (location.pathname === '/saved-movies') {
      setMoviesToLoad(movies);
      setIsShowButtonActive(false);
    }
  }, [movies, numberMoviesToLoad])

  const moviesCard = moviesToLoad.map((item) => (
    <MoviesCard
      movie={item}
      key={item._id || item.id}
      onLiked={onLiked}
      deleteLiked={deleteLiked}
      isLiked={likedMovies.length ? likedMovies.some(
        (likedMovie) => likedMovie.movieId === item.id
      ) : false}
    />
  ))

  return (
    <div className="movies">
      <div className="movies__box">
        {moviesCard}
      </div>
      {location.pathname === '/movies' && isShowButtonActive ? (
        <button className="movies__btn" onClick={handleShowMoreMoviesButtonClick}>Ещё</button>
      ) : null}
    </div>
  )
}

export default MoviesCardList
