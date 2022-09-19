import React, { useState } from "react";
// import Movies from "../Movies";
import "./MoviesCard.css";
// import movieImg from '../../../images/movie-img.svg';

function MoviesCard({
  movie,
  movieActionAdd,

  movieActionDelete,

  movieActionDeletedMovieByLike,

  showIconActive

}) {
  const [saved, setSaved] = useState(false);

// лайк поставлен
  function shouldShowLike(){
    return movieActionAdd !== undefined;
  }

  function handleLikeClick() {
    // debugger;
    if(!showIconActive){
    movieActionAdd(movie)
      .then(() => 
        setSaved(!saved));  //true
    } else {
      movieActionDeletedMovieByLike(movie.id)
      .then(() => 
        setSaved(!saved)); //false
    }
  }

// лайк удален (и карточка удалена из сохраненных)
  function shouldShowDelete(){
    return movieActionDelete !== undefined;
  }

  function handleDelete(){
    movieActionDelete(movie.id)
  }

  return (
    <>
      <li className="movie-card">
        <a className="movie__trailer-link" target='_blank' rel='noreferrer' href={movie.trailerLink}>
        <img
          className="movie__image"
          alt={movie.nameRU}
          src={movie.image}
        />
        </a>
        <div className="movie__container">
          <div className="movie__info">
            <h3 className="movie__title">{movie.nameRU}</h3>
            <span className="movie__duration">{movie.duration} мин</span>
          </div>
          {shouldShowLike() && (
          <button
              className={`movie__button movie__button_type_like ${
                showIconActive ? "movie__button_type_like_active" : ""
              }`}
              aria-label="Нравится"
              type="button"
              onClick={handleLikeClick}
            ></button>
            )
          }


          {shouldShowDelete() && (
            <button
              className="movie__button movie__button_type_delete"
              aria-label="Удалить"
              type="button"
              onClick={handleDelete}
            ></button>
          )}
        </div>
      </li>
    </>
  );
}

export default MoviesCard;
