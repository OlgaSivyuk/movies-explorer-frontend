import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './HeaderAuth.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';


function HeaderAuth({ isLoggedIn }) {
  const [isNavigate, setIsNavigate] = useState(false);

  function handleOpenMenu() {
    setIsNavigate(true)
  }

    return (
      <header className='header'>
        <Link className='header__logo' to='/'>
          <img alt='Логотип в форме бублика' className='header__logo-img' src={logo} />
        </Link>
        <ul className='header__navigation'>
          <li className='header__navigation-link header__navigation-link_active'>
          <NavLink to='/movies' className='header__account-link header__account-link_active'>Фильмы</NavLink>
          </li>
          <li className='header__navigation-link'>
            <NavLink to='/saved-movies' className='header__account-link'>Сохраненные фильмы</NavLink></li>
        </ul>
        <div className='header__buttons header__buttons_type_account'>
          <NavLink to='/profile' className='header__account-link'>Аккаунт
            <span className='header__img-account'></span>
          </NavLink>
        </div>
        <div className='header__burger'>
          <button className='header__burger_button' aria-label='меню-бургер' type='button' onClick={handleOpenMenu}></button>
          <Navigation setIsNavigate={setIsNavigate} className={`navigation ${isNavigate ? 'navigation_visible' : ''}`}/>
        </div>
      </header>
    );
  }

  export default HeaderAuth;