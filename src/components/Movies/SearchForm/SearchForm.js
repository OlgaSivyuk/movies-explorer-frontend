import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ errorMessage, fetchAllMovies, searchString, isShorts}) {
  // debugger;
  // проверка работы тумблера
  const [tumbOff, setTumbOff] = useState(false);
  const [inputValue, setInputValue] = useState([])
  const [isValidInput, setIsValidInput] = useState(false);

  function handleTumbOff() {
    setTumbOff(!tumbOff);
  }


  const handleInput = (e) => {
    setInputValue(e.target.value)
    setIsValidInput(e.target.validity.valid);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("clicked")
    fetchAllMovies(inputValue, tumbOff);
}

  return (
    <section className='search'>
      <form className='search-movie' onSubmit={handleSubmit}>
        <input
          className='search-movie__input'
          type='text'
          placeholder={`Фильм`}
          onChange={handleInput}
          value={inputValue || ""}
          required/>
        <button className='search-movie__button' type='submit'>
          Найти
        </button>
      </form>
      
      <label className='checkbox'>
        <p className='checkbox__title'>Короткометражки</p>
        <button
          className={`checkbox__tumb checkbox__tumb_type_active ${
            !tumbOff ? 'checkbox__tumb_type_off' : ''
          }`}
          type='button'
          onMouseDown={handleTumbOff}>
        </button>
      </label>

      {/* <span className="search-movie__error-message">{errorMessage}</span>
      <span className="search-movie__error-message">{errorKeyWord}</span> */}
    </section>
  );
}

export default SearchForm;