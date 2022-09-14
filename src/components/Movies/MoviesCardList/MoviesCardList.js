import React, {useState, useEffect} from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard'
// import movieImg from '../../../images/movie-img.svg';


function MoviesCardList({movies}) {

  const [maxMoviesAmount, setMaxMoviesAmount] = useState(0);
  const [amountValue, setValue] = useState(0);

  useEffect(() => {
    changeTemplate();
    
    window.addEventListener('resize', () => {
      setTimeout(() => {
        changeTemplate();
      }, 500);
  });
  },[])


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

function showMoreMovies() {
  console.log('clicked')
  setMaxMoviesAmount(maxMoviesAmount + amountValue);
};

  // debugger;
  return (
    <>
      <section className='movie-cards'>
        <ul className='movie-cards__elements'>
          { movies.map((movie, value) => {
             if (value < maxMoviesAmount) {
            return (
          <MoviesCard {...movie}
          key={movie.id || movie.movieId || movie._id}/>
          );
            }
            return null
                })}
        </ul>
      </section>
      { movies.length > maxMoviesAmount && (
      <section className='more-cards'>
              <button type='button' className='more-cards__button' onClick={showMoreMovies}>
                Ещё
              </button>
            </section>
      )}
    </>
  );
}

export default MoviesCardList;