import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
// import movieImg from '../../../images/movie-img.svg';


function MoviesCardList({movies}) {
  // debugger;
  return (
    <>
      <section className='movie-cards'>
        <ul className='movie-cards__elements'>
          { movies.map((movie) => {
            return (
          <MoviesCard {...movie}
          key={movie.id || movie.movieId || movie._id}/>
          )
                })}
        </ul>
      </section>
    </>
  );
}

export default MoviesCardList;