import React from 'react';
import './MoviesCard.css';
import movieImg from '../../../images/movie-img.svg';



function MoviesCard() {
  return (
    <>
      <li className='movie-card'>
          <img className='movie__image' alt='скриншот сцены фильма' src={movieImg} />
          <div className='movie__container'>
            <div className='movie__info'>
            <h3 className='movie__title'>33 слова о дизайне</h3>
            <span className='movie__duration'>1ч 47м</span>
            </div>
          <button
            className='movie__button movie__button_type_like movie__button_type_like_active'
            aria-label='Нравится'
          ></button>
          {/* <button className='movie__button movie__button_type_delete'
            aria-label='Удалить'>
         </button> */}
         </div>
      </li>
    </>
  );
}

export default MoviesCard;