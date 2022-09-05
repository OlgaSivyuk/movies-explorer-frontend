import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({ movieArray }) {
  return (
    <>
      <section className='movie-cards'>
        <ul className='movie-cards__elements'>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      </section>
    </>
  );
}

export default MoviesCardList;