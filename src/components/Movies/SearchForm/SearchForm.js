import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({handleSubmit, handleChange, value}) {
  // проверка работы тумблера
  const [tumbOff, setTumbOff] = useState(false);

  function handleTumbOff() {
    setTumbOff(!tumbOff);
  }

  // function handleSaerch(e) {
  //   e.preventDefault(); 
  //   console.log("clicked")}

  return (
    <section className='search'>
      <form className='search-movie' onSubmit={handleSubmit}>
        <input
          className='search-movie__input'
          type='text'
          placeholder={`Фильм`}
          onChange={handleChange}
          value={value}
          required/>
        <button className='search-movie__button' type='submit'>
          Найти
        </button>
      </form>

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