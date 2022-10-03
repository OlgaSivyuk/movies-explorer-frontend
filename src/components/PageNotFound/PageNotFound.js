import './PageNotFound.css';
import {useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <section className='notfound'>
      <h1 className='notfound__title'>404</h1>
      <p className='notfound__subtitle'>Страница не найдена</p>

      <button className='notfound__button' 
      onClick={handleClick}>
        Назад
      </button>
    </section>
  );
};

export default PageNotFound;