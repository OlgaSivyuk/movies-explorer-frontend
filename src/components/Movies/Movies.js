import React from 'react';
import './Movies.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Preloader from './Preloader/Prelosder';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies() {
  return (
    <>
      <HeaderAuth />
      <main className='movies'>
        <SearchForm />
        <Preloader />
        <MoviesCardList/>
        <section className='more-cards'>
              <button type='button' className='more-cards__button'>
                Ещё
              </button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;