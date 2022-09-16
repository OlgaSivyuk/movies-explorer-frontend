import React, { useState } from "react";
import Movies from "../Movies";
import "./MoviesCard.css";
// import movieImg from '../../../images/movie-img.svg';

function MoviesCard({
  movie,
  movieActionAdd,
  movieActionDelete,
  showIconActive,
}) {
  const [saved, setSaved] = useState(false);

  function handleLike() {
    movieActionAdd(movie).then(() => setSaved(!saved));
  }

  function shouldShowLike(){
    return movieActionAdd !== undefined;
  }

  function shouldShowDelete(){
    return movieActionDelete !== undefined;
  }

  function handleDelete(){
    movieActionDelete(movie.id)
  }

  return (
    <>
      <li className="movie-card">
        <img
          className="movie__image"
          alt={movie.nameRU}
          src={movie.image}
        />
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
              onClick={handleLike}
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
