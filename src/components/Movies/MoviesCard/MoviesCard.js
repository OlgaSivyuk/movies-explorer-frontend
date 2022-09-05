import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import movieImg from '../../../images/movie-img.svg';

function MoviesCard() {
  const [liked, setLiked] = useState(false);
  const { pathname } = useLocation();

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <>
      <li className='movie-card'>
        <img className='movie__image' alt='Кадр из фильма' src={movieImg} />
        <div className='movie__container'>
          <div className='movie__info'>
            <h3 className='movie__title'>33 слова о дизайне</h3>
            <span className='movie__duration'>1ч 47м</span>
          </div>
          {pathname === '/saved-movies' ? (
            <button
              className='movie__button movie__button_type_delete'
              aria-label='Удалить'
              type='button'>
              </button>
          ) : (
            <button
              className={`movie__button movie__button_type_like ${
                liked ? 'movie__button_type_like_active' : ''
              }`}
              aria-label='Нравится'
              type='button'
              onMouseDown={handleLike}>
              </button>
          )}
        </div>
      </li>
    </>
  );
}

export default MoviesCard;