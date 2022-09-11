import React, { useState, useEffect } from 'react';
import './Movies.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MoviesApi from "../../utils/MoviesApi.js";


function Movies() {

  const [isLoading, setIsLoading] = useState(false);
  const [moviesData, setMoviesData] = useState([]);
  const [filteredMoviesData, setFilteredMoviesData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isShortsTumb, setIsShortsTumb] = useState(false);
  const [maxMoviesAmount, setMaxMoviesAmount] = useState(0);
  const [value, setValue] = useState(0);

  const [isSearchedValue, setIsSearchedValue] = useState(localStorage.getItem('searchMoviesValue'));

  function changeTemplate() {
    const width = window.innerWidth;
  
    if (width >= 1280) {
      setMaxMoviesAmount(12);
      setValue(3);
    } else if (width >= 768) {
      setMaxMoviesAmount(8);
      setValue(2);
    } else if (width >= 320) {
      setMaxMoviesAmount(5);
      setValue(2);
    } else {
      setMaxMoviesAmount(5);
      setValue(2);
    }
  }
  
  useEffect(() => {
    changeTemplate()
  }) 

useEffect(() => {
const localStorageMoviesData = localStorage.getItem('moviesData');

if (localStorageMoviesData !== null){
  const allData = JSON.parse(localStorageMoviesData);
  setMoviesData(allData.moviesData);
  // searchString = allData.searchString;
  // isShorts = allData.isShorts;
} 

const filtredLocalStorageMoviesData = localStorage.getItem('filteredMoviesData');
if (filtredLocalStorageMoviesData !== null){
  const filtredData = JSON.parse(filtredLocalStorageMoviesData);
  setFilteredMoviesData(filtredData.moviesData);
} 

},[])

  function fetchAllMovies(inputValue, isShortsTumb ) {
    // console.log("clicked")
    setIsLoading(true);
    const searchValue = inputValue.toLowerCase();
    setIsSearchedValue(searchValue);

    MoviesApi.getMovies() //inputValue, tumbOff
    .then(res => {
      
      const moviesData = res.map((movie) => {
        console.log('formatedData', res )
        return {
          nameRU: movie.nameRU,
          duration: movie.duration,
          image: `https://api.nomoreparties.co/${movie.image.url}` ,
          id: movie.id,

          country: movie.country,
          director: movie.director,
          year: movie.year,
          description: movie.description,
          trailerLink: movie.trailerLink ? movie.trailerLink : 'https://www.youtube.com',
          thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
          nameEN: movie.nameEN ? movie.nameEN : 'unknown',
        }
      });
      localStorage.setItem('moviesData', JSON.stringify(
      {
        moviesData: moviesData,
        searchString: inputValue,
        isShortsTumb: isShortsTumb,
       } ));

      // setMoviesData(moviesData);
     // debugger;
      let filteredMovies = moviesData.filter((movie) => {
        return (movie.nameRU.toLowerCase().includes(searchValue))
      });

      setMoviesData(filteredMovies);

      localStorage.setItem('filteredMoviesData', JSON.stringify(filteredMovies));

    })
      .catch(() => {
        setIsError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
      })

      .finally(() => {
        setIsLoading(false);
      })

      localStorage.setItem('searchMoviesValue', inputValue);
      localStorage.setItem('stateCheckboxMovies', isShortsTumb);
  }




// function showMoreMovies() {
//   console.log('clicked')
//   setMaxMoviesAmount(maxMoviesAmount + value);
// };


// debugger;
  return (
    <>
      <HeaderAuth />
      <main className='movies'>
        <SearchForm fetchAllMovies={fetchAllMovies}
        isSearchedValue={isSearchedValue}
        isShorts={isShortsTumb}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList movies={moviesData} />

          <span className="movies__error">{isError}</span>

            {/* <section className='more-cards'>
              <button type='button' className='more-cards__button' onClick={showMoreMovies}>
                Ещё
              </button>
            </section> */}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;