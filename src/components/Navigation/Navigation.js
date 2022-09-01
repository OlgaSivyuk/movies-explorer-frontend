import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation(props) {
  function handleCloseMenu() {
    props.setIsNavigate(false);
  }

  return (
    <div className={`${props.className}`}>
      <div className='navigation__container'>
        <div className='navigation__button'>
          <button
            className='navigation__button_type_close'
            onClick={handleCloseMenu}
          ></button>
        </div>
        <div className='navigation__links'>
          <Link className='navigation__link' to='/'>
            Главная
          </Link>
          <Link
            className='navigation__link navigation__link-active'
            to='/movies'>
            Фильмы
          </Link>
          <Link className='navigation__link' to='/saved-movies'>
            Сохранённые фильмы
          </Link>
        </div>
        <div className='navigation__button navigation__button_type_account'>
          <Link to='/profile' className='navigation__account-link'>
            Аккаунт
            <span className='navigation__img-account'></span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;