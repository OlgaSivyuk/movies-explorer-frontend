import React, { useState } from 'react';
import './Movies.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Preloader from './Preloader/Preloader';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MoviesApi from "../../utils/MoviesApi.js";


function Movies() {

  // проверка работы прелоадера
  const [isLoading, setIsLoading] = useState(false);
  const [moviesData, setMoviesData] = useState([]);
  

let searchString = '';
let isShorts = false;
const localData = localStorage.getItem('moviesData');

if (localData !== null){
  setMoviesData(localData.moviesData);
  searchString = localData.searchString;
  isShorts = localData.isShorts;
} 





  function handleSearch(inputValue, tumbOff) {
  // function handleSubmit(e, keyWords, moviesShorts) {
    // e.preventDefault();
    // console.log("clicked")
    setIsLoading(true)

    MoviesApi.getMovies(inputValue, tumbOff)
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
      localStorage.setItem('moviesData', {
        moviesData: moviesData,
        searchString: inputValue,
        isShorts: tumbOff,
       } );

      setMoviesData(moviesData)
      setIsLoading(false)
      
    })
  }


debugger;
  return (
    <>
      <HeaderAuth />
      <main className='movies'>
        <SearchForm handleSearch={handleSearch}
        searchString={searchString}
        isShorts={isShorts}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <MoviesCardList
            movies={moviesData}
            
            />
            <section className='more-cards'>
              <button type='button' className='more-cards__button'>
                Ещё
              </button>
            </section>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;