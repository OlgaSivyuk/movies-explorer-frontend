import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
// import movieImg from '../../../images/movie-img.svg';

function MoviesCard({image, nameRU, duration } ) {
  const [saved, setSaved] = useState(false);
  const location = useLocation();


  function handleLike() {
    setSaved(!saved);
  }

  return (
    <>
      <li className='movie-card' >
        <img className='movie__image' alt={nameRU} src={`https://api.nomoreparties.co/${image.url}`} />
        <div className='movie__container'>
          <div className='movie__info'>
            <h3 className='movie__title'>{nameRU}</h3>
            <span className='movie__duration'>{duration} мин</span>
          </div>
          {location.pathname === '/saved-movies' ? (
            <button
              className='movie__button movie__button_type_delete'
              aria-label='Удалить'
              type='button'>
              </button>
          ) : (
            <button
              className={`movie__button movie__button_type_like ${
                saved ? 'movie__button_type_like_active' : ''
              }`}
              aria-label='Нравится'
              type='button'
              onClick={handleLike}>
              </button>
          )}
        </div>
      </li>
    </>
  );
}

export default MoviesCard;