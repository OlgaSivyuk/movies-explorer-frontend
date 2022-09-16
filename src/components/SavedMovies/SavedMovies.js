import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import Preloader from '../Movies/Preloader/Preloader';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MainApi from "../../utils/MainApi.js";

export function SavedMovies({ removeSavedMovieCallback }) {
  // проверка работы прелоадера
  const [preloaderActive, setPreloaderActive] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  

  useEffect(() => {
    if (savedMovies.length === 0) {
      MainApi.getSavedMovies()
        .then((savedMoviesList) => {
            // localStorage.setItem('savedMoviesData', JSON.stringify(savedMoviesList));
            setSavedMovies(savedMoviesList);
          })
        .catch((err) => console.log(`Ошибка...: ${err}`));
    }
  }, [savedMovies.length]);

  function deletedMovie(movieId) {
    return MainApi.deleteSavedMovie(movieId)
      .then(() => {
        const resultSavedMovie = savedMovies.filter((item) => item.id !== movieId);

        setSavedMovies(resultSavedMovie);
        // localStorage.setItem('savedMoviesData', JSON.stringify(resultSavedMovie));
      })
      .catch((err) => console.log(`Ошибка...: ${err}`));
  }

  return (
    <>
      <HeaderAuth />
      <main className='saved-movies'>
      <SearchForm />
        {preloaderActive ? (<Preloader />) : (
        <>
        <MoviesCardList
        movies={savedMovies}
        movieActionDelete={deletedMovie}
        savedMovieIds={savedMovies.map((movie) => movie.id)}

        />
        </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;