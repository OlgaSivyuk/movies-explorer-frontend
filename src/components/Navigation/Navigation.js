import React from 'react';
import './Navigation.css';
import { Link, NavLink, useLocation } from 'react-router-dom'

function Navigation(props) {

  const location = useLocation();

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
          <NavLink to='/' className={`navigation__link ${ location.pathname === '/' ? 'navigation__link_active' : ''}`} >
            Главная
          </NavLink>
          <NavLink to='/movies' className={`navigation__link ${ location.pathname === '/movies' ? 'navigation__link_active' : ''}`}>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' className={`navigation__link ${ location.pathname === '/saved-movies' ? 'navigation__link_active' : ''}`}>
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