import React, { useState } from 'react';
import './SavedMovies.css';
import Preloader from '../Movies/Preloader/Preloader';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export function SavedMovies() {
  // проверка работы прелоадера
  const [preloaderActive, setPreloaderActive] = useState(false);
  return (
    <>
      <HeaderAuth />
      <main className='saved-movies'>
      <SearchForm />
        {preloaderActive ? (<Preloader />) : (
        <>
        <MoviesCardList/>
        </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;