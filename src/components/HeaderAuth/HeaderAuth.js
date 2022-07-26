import React, { useState, useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom'
import './HeaderAuth.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function HeaderAuth() {
  const currentUser = useContext(CurrentUserContext);
  const [isNavigate, setIsNavigate] = useState(false);
  const location = useLocation();

  function handleOpenMenu() {
    setIsNavigate(true)
  }

    return (
      <header className={`header ${ location.pathname === '/' ? 'header_pink' : '' }`}>
        <Link className='header__logo' to='/'>
          <img alt='Логотип в форме бублика' className='header__logo-img' src={logo} />
        </Link>
        <ul className='header__navigation'>
          <li className='header__navigation-link'>
          <NavLink to='/movies' className={`header__account-link ${ location.pathname === '/movies' ? 'header__account-link_active' : '' }`}>Фильмы</NavLink>
          </li>
          <li className='header__navigation-link'>
            <NavLink to='/saved-movies' className={`header__account-link ${ location.pathname === '/saved-movies' ? 'header__account-link_active' : '' }`}>Сохраненные фильмы</NavLink></li>
        </ul>
        <div className='header__buttons header__buttons_type_account'>
          <NavLink to='/profile' className='header__account-link'>{currentUser.name}
            <span className={`header__img-account ${ location.pathname === '/' ? 'header__img-account_pink' : ''}`}></span>
          </NavLink>
        </div>
        <div className='header__burger'>
          <button className={`header__burger_button ${ location.pathname === '/' ? 'header__burger_button_pink' : '' }`} aria-label='меню-бургер' type='button' onClick={handleOpenMenu}></button>
          <Navigation setIsNavigate={setIsNavigate} className={`navigation ${isNavigate ? 'navigation_visible' : '' }`}/>
        </div>
      </header>
    );
  }

  export default HeaderAuth;