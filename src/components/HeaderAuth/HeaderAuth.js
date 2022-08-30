import React from 'react';
// import { Link } from "react-router-dom"
import './HeaderAuth.css';
import logo from '../../images/logo.svg';
import burger from '../../images/burger.svg'
// import HeaderLogo from '../../images/logo-header.svg';
// import BurgerMenu from '../../images/burger-menu-header.svg';

function HeaderAuth() {
    return (
      <header className='header'>
        <div className='header__logo'>
          <img alt='o' className='header__logo-img' src={logo} />
        </div>
        {/* <ul className='header__navigation'>
          <li className='header__navigation-link header__navigation-link_active'>
          <a href='#' className='header__account-link'>Фильмы</a>
          </li>
          <li className='header__navigation-link'>
            <a href='#' className='header__account-link'>Сохраненные фильмы</a></li>
        </ul> */}
        {/* <div className='header__buttons header__buttons_type_account'>
          <a href='#' className='header__account-link'>Аккаунт
            <span className='header__img-account'></span>
          </a>
        </div> */}
        <div className='header__burger'>
          <img className='header__burger-img' src={burger}></img>
        </div>
      </header>
    );
  }

  export default HeaderAuth;