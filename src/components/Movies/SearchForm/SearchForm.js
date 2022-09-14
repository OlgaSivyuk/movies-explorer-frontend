import React, { useEffect, useState } from 'react';
import './SearchForm.css';

function SearchForm({ onSearch, onShortsSearch}) {
  // debugger;
  // проверка работы тумблера
  const [inputValue, setInputValue] = useState('')
  const [tumbOn, setTumbOn] = useState(false);
  const [isError, setIsError] = useState('');
  // const [isValidInput, setIsValidInput] = useState(false);

useEffect(() => {

 const localStorageTumbState = localStorage.getItem('shortsTumbOn');
 if (localStorageTumbState === null) {
     localStorage.setItem('shortsTumbOn', JSON.stringify(false));
 }
 const localStorageTumbStateParsed = JSON.parse(localStorageTumbState);
 setTumbOn(localStorageTumbStateParsed);

 const searchItemFromStorage = localStorage.getItem('searchValue');
 setInputValue(searchItemFromStorage);

}, [])


  function handleTumbOn() {

    setTumbOn(true);
    localStorage.setItem('shortsTumbOn', true);

    if (inputValue !== '') {
      onShortsSearch(inputValue);
    }
}

function handleTumbOff() {


  setTumbOn(false);
  localStorage.setItem('shortsTumbOn', false);

    if (inputValue !== '') {
       onSearch(inputValue);
    }
}


  const handleInput = (e) => {
    setInputValue(e.target.value)
    // setIsValidInput(e.target.validity.valid);
    localStorage.setItem('searchValue', e.target.value);
    setIsError('');
  }

  function checkInput(e) {
    if (inputValue === '') {
      setIsError('Нужно ввести ключевое слово')
    } else {
      setIsError('')
    }
}


  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("clicked")
    checkInput();
    
   if (tumbOn && inputValue !== '') {
      setIsError('');
      onShortsSearch(inputValue, tumbOn );
  } else if (inputValue !== '') {
    setIsError('');
      onSearch(inputValue);
  } else {
    setIsError('Нужно ввести ключевое слово')
  }
  // onSearch(inputValue, tumbOn);
  // onShortsSearch(inputValue, tumbOn);
}

  return (
    <section className='search'>
      {isError && (
      <span className="movies__error">{isError}</span>
    )}
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
          onClick={tumbOn ? handleTumbOff : handleTumbOn}>
        </button>
      </label>
    </section>
  );
}

export default SearchForm;