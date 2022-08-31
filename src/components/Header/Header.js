import React from 'react';
import { Link } from "react-router-dom"
import './Header.css';
import logo from '../../images/logo.svg';

function Header({isLoggedIn}) {
    return (
      <header className={`header ${!isLoggedIn ? 'header_pink' : ''}`}>
        <Link className='header__logo' to='/'>
          <img alt='Логотип в форме бублика' className='header__logo-img' src={logo} />
        </Link>
        {/* <ul className='header__navigation'>
          <li className='header__navigation-link header__navigation-link_active'>Фильмы</li>
          <li className='header__navigation-link'>Сохраненные фильмы</li>
        </ul> */}
        <div className='header__buttons header__buttons_type_main'>
          <a href='#' className='header__button-link header__button-signup'>Регистрация</a>
          <a href='#' className='header__button-link header__button-signin'>Войти</a>
        </div>
        {/* <div className='header__buttons header__buttons_type_account'>
          <a href='#' className='header__button-link'>Аккаунт</a>
          <button className='header__button-account'/>
        </div> */}
        {/* <div className='header__buttons header__buttons_burger'>
          <button className='header__button-burger'>Аккаунт</button>
        </div> */}
      </header>
    );
  }

  export default Header;