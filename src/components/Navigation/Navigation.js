import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <div className='navigation navigation_visible'>
      <div className='navigation__container'>
        <div className='navigation__button'>
          <button className='navigation__button_type_close'></button>
        </div>
        <div className='navigation__links'>
          <a className='navigation__link' href='#'>
            Главная
          </a>
          <a className='navigation__link navigation__link-active' href='#'>
            Фильмы
          </a>
          <a className='navigation__link' href='#'>
            Сохранённые фильмы
          </a>
        </div>
        <div className='navigation__button navigation__button_type_account'>
          <a href='#' className='navigation__account-link'>
            Аккаунт
            <span className='navigation__img-account'></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;