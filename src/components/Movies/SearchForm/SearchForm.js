import './SearchForm.css';

function SearchForm() {
  return (
    <section className='search'>
        <label className='search-movie'>
          <input
            className='search-movie__input'
            type='text'
            placeholder={`Фильм`}
            required
          />
          <button className='search-movie__button' type='button'>Найти</button>
        </label>

        <label className='checkbox'>  
          <p className='checkbox__title'>Короткометражки</p>
          <span className='checkbox__tumb'></span>
        </label>
    </section>
  );
};

export default SearchForm;