import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  // проверка работы тумблера
  const [tumbOff, setTumbOff] = useState(false);

  function handleTumbOff() {
    setTumbOff(!tumbOff);
  }

  return (
    <section className='search'>
      <label className='search-movie'>
        <input
          className='search-movie__input'
          type='text'
          placeholder={`Фильм`}
          required/>
        <button className='search-movie__button' type='button'>
          Найти
        </button>
      </label>

      <label className='checkbox'>
        <p className='checkbox__title'>Короткометражки</p>
        <button
          className={`checkbox__tumb checkbox__tumb_type_active ${
            tumbOff ? 'checkbox__tumb_type_off' : ''
          }`}
          type='button'
          onMouseDown={handleTumbOff}>
        </button>
      </label>
    </section>
  );
}

export default SearchForm;