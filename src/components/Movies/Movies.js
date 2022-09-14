import React, { useState, useEffect } from 'react';
import './Movies.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MoviesApi from "../../utils/MoviesApi.js";

// debugger;
function Movies() {

  const [isLoading, setIsLoading] = useState(false);
  const [moviesData, setMoviesData] = useState([]);
  const [filteredMoviesData, setFilteredMoviesData] = useState([]);
  const [isError, setIsError] = useState(false);
  // const [isShortsTumb, setIsShortsTumb] = useState(false);
  const [isSearchedValue, setIsSearchedValue] = useState(localStorage.getItem('searchMoviesValue'));


  useEffect(() => {
    
    if (localStorage.getItem('filteredMoviesData')) {
      setFilteredMoviesData(JSON.parse(localStorage.getItem('filteredMoviesData')));
    }

    if (localStorage.getItem('moviesData')) {
      setMoviesData(JSON.parse(localStorage.getItem('moviesData')));
    }
  }, []);
  
  // debugger;
  function fetchAllMovies(inputValue){ //isShortsTumb
    setIsLoading(true);
    const searchValue = inputValue.toLowerCase();
    let filteredMovies;
    setIsSearchedValue(searchValue);

    if (moviesData.length === 0) {
      MoviesApi.getMovies()
        .then((res) => {
          console.log('formatedData', res);
          localStorage.setItem('moviesData', JSON.stringify(res));
          setMoviesData(res);

          filteredMovies = res.filter((movie) => {
            return (
              movie.nameRU.toLowerCase().includes(searchValue)
              // movie.nameEN.toLowerCase().includes(searchValue)||
              )
          });

          setFilteredMoviesData(filteredMovies);
          localStorage.setItem('filteredMoviesData', JSON.stringify(filteredMovies));
        })
        .catch(() => {
          setIsError(true);
        })

        .finally(() => {
          setIsLoading(false);
        })
    } else {
      setTimeout(() => {
        filteredMovies = moviesData.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(searchValue)
            // movie.nameEN.toLowerCase().includes(searchValue) ||
          )
        });

        setIsLoading(false);
        setFilteredMoviesData(filteredMovies);
        localStorage.setItem('filteredMoviesData', JSON.stringify(filteredMovies));
      }, 500);
    }
  };

  function fetchShortsMovies(inputValue) { //isShortsTumb
    setIsLoading(true);
    const searchValue = inputValue.toLowerCase();
    let filteredMovies;
    setIsSearchedValue(searchValue);

    if (moviesData.length === 0) {
      MoviesApi.getMovies()
        .then((res) => {
          console.log('formatedData', res);
          localStorage.setItem('moviesData', JSON.stringify(res));
          setMoviesData(res);

          filteredMovies = res.filter((movie) => {
            return (
              movie.nameRU.toLowerCase().includes(searchValue) && 
              // movie.nameEN.toLowerCase().includes(searchValue) ||
              movie.duration < 40
              )
          });

          setFilteredMoviesData(filteredMovies);
          localStorage.setItem('filteredMoviesData', JSON.stringify(filteredMovies));
        })
        .catch(() => {
          setIsError(true);
        })

        .finally(() => {
          setIsLoading(false);
        })
    } else {
      setTimeout(() => {
        filteredMovies = moviesData.filter((movie) => {
          return (
            movie.nameRU.toLowerCase().includes(searchValue)&&
            // movie.nameEN.toLowerCase().includes(searchValue) ||
            movie.duration < 40
          )
        });

        setIsLoading(false);
        setFilteredMoviesData(filteredMovies);
        localStorage.setItem('filteredMoviesData', JSON.stringify(filteredMovies));
      }, 500);
    }
  }

// debugger;
  return (
    <>
      <HeaderAuth />
      <main className='movies'>
        <SearchForm 
        onSearch={fetchAllMovies}
        onShortsSearch={fetchShortsMovies}
        // isSearchedValue={isSearchedValue}
        // onShortsTumb={setIsShortsTumb}
        />
        {isLoading ? <Preloader /> : null}
        
        {!isLoading && !isError && filteredMoviesData.length !== 0 && (
         <>
            <MoviesCardList movies={filteredMoviesData} />
          </>
        )}

        {isError && (<span className="movies__error">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>)}
        
        {!isLoading && !isError && moviesData.length !== 0 && filteredMoviesData.length === 0 && isSearchedValue && (
          <span className="movies__error">Ничего не найдено</span>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;