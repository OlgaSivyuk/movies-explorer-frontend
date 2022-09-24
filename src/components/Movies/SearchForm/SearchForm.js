import React, { useEffect, useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const [tumbOn, setTumbOn] = useState(false);
  const [isError, setIsError] = useState('');
  // const [isInit, setIsInit] = useState(false);


  useEffect(() => {
    const localStorageTumbState = localStorage.getItem('shortsTumbOn');
    if (localStorageTumbState === null) {
      localStorage.setItem('shortsTumbOn', JSON.stringify(false));
    }
    const localStorageTumbStateParsed = JSON.parse(localStorageTumbState);
    setTumbOn(localStorageTumbStateParsed);

    const searchItemFromStorage = localStorage.getItem('searchValue');
    setInputValue(searchItemFromStorage);

    //  if (!isInit){ // если заходим первый раз то ищет фильмы автоматически
    //   onSearch(inputValue, tumbOn);
    //   setIsInit(true);
    //  }
  }, [onSearch, inputValue, tumbOn]);

  function handleTumbOn() { // debugger;
    setTumbOn(true);
    localStorage.setItem('shortsTumbOn', true);

    if (inputValue !== '') {
      onSearch(inputValue, true); // tumbOn = true
    }
  }

  function handleTumbOff() {
    setTumbOn(false);
    localStorage.setItem('shortsTumbOn', false);

    if (inputValue !== '') {
      onSearch(inputValue, false); // tumbOn = false
    }
  }

  const handleInput = (e) => {
    setInputValue(e.target.value);

    localStorage.setItem('searchValue', e.target.value);
    setIsError('');
  };

  function checkInput() {
    if (inputValue === '' || inputValue === null) {
      setIsError('Нужно ввести ключевое слово');
      return false;
    } else {
      setIsError('');
      return true;
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log('clicked');  
    
    if (checkInput()){
      onSearch(inputValue, tumbOn);
    };
    // if (inputValue === '') {
    //   setIsError('Нужно ввести ключевое слово');
    // } else {
    //   setIsError('');
    //   onSearch(inputValue, tumbOn);
    // }
  }

  return (
    <section className='search'>
      {isError && <span className='search__error-message'>{isError}</span>}
      <form className='search-movie' onSubmit={handleSubmit}>
        <input
          className='search-movie__input'
          type='text'
          placeholder={`Фильм`}
          onChange={handleInput}
          value={inputValue || ''}
        />
        <button className='search-movie__button' type='submit'>
          Найти
        </button>
      </form>

      <label className='checkbox'>
        <p className='checkbox__title'>Короткометражки</p>
        <button
          className={`checkbox__tumb checkbox__tumb_type_active ${
            tumbOn ? '' : 'checkbox__tumb_type_off'
          }`}
          type='button'
          onClick={tumbOn ? handleTumbOff : handleTumbOn}
        ></button>
      </label>
    </section>
  );
}

export default SearchForm;
