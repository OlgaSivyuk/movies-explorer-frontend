import React, { useState, useEffect } from 'react';
import './SavedMovies.css';
import Preloader from '../Movies/Preloader/Preloader';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MainApi from "../../utils/MainApi.js";

export function SavedMovies() {  //removeSavedMovieCallback
  // проверка работы прелоадера
  const [isLoading, setIsLoading] = useState(false);
  // const [preloaderActive, setPreloaderActive] = useState(false);
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
              })
              .catch(() => {
                setIsError(true);
              })
        }
  },[]);  



  function fetchAllSavedMovies(inputValue){ //isShortsTumb
    setIsLoading(true);
    const searchValue = inputValue.toLowerCase();
    // let filteredMovies;
    setIsSearchedValue(searchValue);

      setTimeout(() => {
        const filteredMovies = savedMovies.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(searchValue)
            // movie.nameEN.toLowerCase().includes(searchValue) ||
          )
        });

        setIsLoading(false);
        setFilteredSavedMovies(filteredMovies);
        // localStorage.setItem('filteredSavedMovies', JSON.stringify(filteredMovies));
      }, 500);
    };

  function fetchShortsSavedMovies(inputValue) { //isShortsTumb
    setIsLoading(true);
    const searchValue = inputValue.toLowerCase();
    // let filteredMovies;
    setIsSearchedValue(searchValue);

    
      setTimeout(() => {
        const filteredShortMovies = savedMovies.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(searchValue)&&
            // movie.nameEN.toLowerCase().includes(searchValue) ||
            movie.duration < 40
          )
        });

        setIsLoading(false);
        setFilteredSavedMovies(filteredShortMovies);
        // localStorage.setItem('filteredSavedMovies', JSON.stringify(filteredShortMovies));
      }, 500);
    
  };




  function deletedMovie(movieId) {
  
    return MainApi.deleteSavedMovie(movieId)
      .then(() => {
        setIsLoading(false)
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
      <SearchForm 
           onSearchSavedMovies={fetchAllSavedMovies}
           onShortsSearchSearchMovies={fetchShortsSavedMovies}
           isSavedMovies={true}/>
        {isLoading ? <Preloader /> : null}
        {!isLoading && !isError &&(
        <>
        {savedMovies !== null &&(
        <MoviesCardList
        movies={savedMovies}
        movieActionDelete={deletedMovie}
        savedMovieIds={savedMovies.map((movie) => { return movie.id })}
        />
        )}
        </>
        )}

        {isError && (<span className="movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>)}
        
        {!isLoading && !isError && savedMovies !== null && filteredSavedMovies.length === 0 && isSearchedValue && (
          <span className="movies__error">Ничего не найдено</span>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;