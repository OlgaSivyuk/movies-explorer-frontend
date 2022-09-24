import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import Preloader from '../Movies/Preloader/Preloader';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MainApi from '../../utils/MainApi.js';

export function SavedMovies() {
  const [isLoading, setIsLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState(null);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [isSearchedValue, setIsSearchedValue] = useState(localStorage.getItem('searchMoviesValue'));
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // if (localStorage.getItem('filteredSavedMovies')) {
    //   setFilteredSavedMovies(JSON.parse(localStorage.getItem('filteredSavedMovies')));
    // }

    // if (localStorage.getItem('savedMovies')) {
    //   setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
    // }

    if (savedMovies === null) {
      MainApi.getSavedMovies()
        .then((savedMoviesList) => {
          // debugger;
          // localStorage.setItem('savedMoviesData', JSON.stringify(savedMoviesList));
          setSavedMovies(savedMoviesList.data);
          setFilteredSavedMovies(savedMoviesList.data);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  });

  function filterAllSavedMovies(inputValue, isShortsTumb) {
    if (savedMovies === null) {
      return;
    }
    setIsLoading(true);
    const searchValue = inputValue.toLowerCase();
    setIsSearchedValue(searchValue);

    const filteredMovies = savedMovies.filter((movie) => {
      let result = movie.nameRU.toLowerCase().includes(searchValue);
      if (isShortsTumb) {
        result = result && movie.duration < 40;
      }
      return result;
    });
    setIsLoading(false);
    setFilteredSavedMovies(filteredMovies);
    // localStorage.setItem('filteredSavedMovies', JSON.stringify(filteredMovies));
  }


  function deletedMovie(movieId) {
    return MainApi.deleteSavedMovie(movieId)
      .then(() => {
        setIsLoading(false);
        const resultSavedMovie = savedMovies.filter(
          (item) => item.id !== movieId
        );
        setSavedMovies(resultSavedMovie);

        const resultFilteredSavedMovies = filteredSavedMovies.filter(
          (item) => item.id !== movieId
        );
        setFilteredSavedMovies(resultFilteredSavedMovies);
      
        // localStorage.setItem('savedMoviesData', JSON.stringify(resultSavedMovie));
      })
      .catch((err) => console.log(`Ошибка...: ${err}`));
  }

  return (
    <>
      <HeaderAuth />
      <main className='saved-movies'>
        <SearchForm onSearch={filterAllSavedMovies} />
        {isLoading ? <Preloader /> : null}
        {!isLoading && !isError && (
          <>
            {savedMovies !== null && (
              <MoviesCardList
                movies={filteredSavedMovies}
                movieActionDelete={deletedMovie}
                savedMovieIds={filteredSavedMovies.map((movie) => {
                  return movie.id;
                })}
              />
            )}
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
          savedMovies !== null &&
          filteredSavedMovies.length === 0 &&
          isSearchedValue && (
            <span className='movies__error'>Ничего не найдено</span>
          )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;