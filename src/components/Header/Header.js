import React from 'react';
import { Link, NavLink } from "react-router-dom"
import './Header.css';
import logo from '../../images/logo.svg';

function Header({ isLoggedIn }) {
    return (
      <header className={`header ${!isLoggedIn ? 'header_pink' : ''}`}>
        <Link className='header__logo' to='/'>
          <img alt='Логотип в форме бублика' className='header__logo-img' src={logo} />
        </Link>
        <div className={`header__buttons ${!isLoggedIn ? 'header__buttons_type_main' : ''}`}>
          <NavLink to='/signup' className='header__button-link header__button-signup'>Регистрация</NavLink>
          <NavLink to='/signin' className='header__button-link header__button-signin'>Войти</NavLink>
        </div>
      </header>
    );
}

  export default Header;