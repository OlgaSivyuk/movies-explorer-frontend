import React, { useState, useEffect } from 'react';
import './Movies.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MoviesApi from '../../utils/MoviesApi.js';
import * as MainApi from '../../utils/MainApi.js';


function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [moviesData, setMoviesData] = useState([]);
  const [savedMovieIds, setSavedMovieIds] = useState(null);
  const [filteredMoviesData, setFilteredMoviesData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isSearchedValue, setIsSearchedValue] = useState(
    localStorage.getItem('searchMoviesValue')
  );

  useEffect(() => {
    if (localStorage.getItem('filteredMoviesData')) {
      setFilteredMoviesData(
        JSON.parse(localStorage.getItem('filteredMoviesData'))
      );
    }

    if (localStorage.getItem('moviesData')) {
      setMoviesData(JSON.parse(localStorage.getItem('moviesData')));
    }

    if (savedMovieIds === null) {
      MainApi.getSavedMovieIds().then((res) => {
        setSavedMovieIds(res.data);
      });
    }
  }, [savedMovieIds]);

  // debugger;
  function filterAllMovies(inputValue, isShortsTumb) {
    setIsLoading(true);
    const searchValue = inputValue.toLowerCase();
    let filteredMovies;
    setIsSearchedValue(searchValue);

    if (moviesData.length === 0) {
      MoviesApi.getMovies()
        .then((res) => {
          const mappedMovies = res.map((resMovie) => {
            return {
              country: resMovie.country,
              director: resMovie.director,
              duration: resMovie.duration,
              year: resMovie.year,
              description: resMovie.description,
              image: `https://api.nomoreparties.co${resMovie.image.url}`,
              trailerLink: resMovie.trailerLink,
              nameRU: resMovie.nameRU,
              nameEN: resMovie.nameEN,
              thumbnail: `https://api.nomoreparties.co${resMovie.image.formats.thumbnail.url}`,
              id: resMovie.id,
            };
          });

          console.log('formatedData', res);
          localStorage.setItem('moviesData', JSON.stringify(mappedMovies)); // debugger;
          setMoviesData(mappedMovies);

          filteredMovies = mappedMovies.filter((movie) => {
            let result = movie.nameRU.toLowerCase().includes(searchValue);
            if (isShortsTumb) {
              result = result && movie.duration < 40;
            }
            return result;
          });

          setFilteredMoviesData(filteredMovies);
          localStorage.setItem(
            'filteredMoviesData',
            JSON.stringify(filteredMovies)
          );
        })
        .catch(() => {
          setIsError(true);
        })

        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setTimeout(() => {
        filteredMovies = moviesData.filter((movie) => {
          let result = movie.nameRU.toLowerCase().includes(searchValue);
          if (isShortsTumb) {
            result = result && movie.duration < 40;
          }
          return result;
        });

        setIsLoading(false);
        setFilteredMoviesData(filteredMovies);
        localStorage.setItem(
          'filteredMoviesData',
          JSON.stringify(filteredMovies)
        );
      }, 500);
    }
  }

  function saveMovie(movie) { // debugger;
    return MainApi.addMovie(movie)
      .then((data) => {
        console.log('saveMovie', data);
        setSavedMovieIds([...savedMovieIds, movie.id]);
      })
      .catch((err) => console.error(`Ошибка...: ${err}`));
  }

  function deletedMovieByLike(movieId) {
    return MainApi.deleteSavedMovie(movieId)
      .then((data) => {
        console.log('deleteMovie', data);
        const newArr = savedMovieIds.filter((item) => item !== movieId);
        setSavedMovieIds(newArr);
      })
      .catch((err) => console.error(`Ошибка...: ${err}`));
  }

  // debugger;
  return (
    <>
      <HeaderAuth />
      <main className='movies'>
        <SearchForm onSearch={filterAllMovies} />
        {isLoading ? <Preloader /> : null}

        {!isLoading &&
          !isError &&
          filteredMoviesData.length !== 0 &&
          savedMovieIds !== null && (
            <>
              <MoviesCardList
                movies={filteredMoviesData}
                movieActionAdd={saveMovie}
                movieActionDeletedMovieByLike={deletedMovieByLike}
                savedMovieIds={savedMovieIds}
              />
            </>
          )}

        {isError && (
          <span className='movies__error'>
            Во время запроса произошла ошибка. Возможно, проблема с соединением
            или сервер недоступен. Подождите немного и попробуйте ещё раз
          </span>
        )}

        {!isLoading &&
          !isError &&
          moviesData.length !== 0 &&
          filteredMoviesData.length === 0 &&
          isSearchedValue && (
            <span className='movies__error'>Ничего не найдено</span>
          )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;