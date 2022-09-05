import React from 'react';
import './Navigation.css';
import { NavLink, Link } from 'react-router-dom';

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
          <NavLink to='/' activeclassname='navigation__link_active' className='navigation__link' >
            Главная
          </NavLink>
          <NavLink to='/movies' activeclassname='navigation__link_active' className='navigation__link'>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' activeclassname='navigation__link_active' className='navigation__link'>
            Сохранённые фильмы
          </NavLink>
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