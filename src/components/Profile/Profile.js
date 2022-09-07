import React, {useContext, useState, useEffect} from 'react';
import './Profile.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { Link } from 'react-router-dom';

function Profile({ handleSignOut }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  useEffect(() => { 
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  return (
    <>
      <HeaderAuth />
      <section className='profile'>
        <h2 className='profile__title profile__title-text'>{`Привет, ${currentUser.name}!`}</h2>
        <form className='profile__form'>
          <fieldset className='profile__form-fields'>
            <label className='profile__form-title'>Имя</label>
            <input
              required
              className='profile__form-input'
              type='text'
              name='name'
              value={name || ''}
              placeholder={currentUser.name}
              minLength={2}
              maxLength={100}
              onChange={handleNameChange}
            ></input>
          </fieldset>
          <fieldset className='profile__form-fields'>
            <label className='profile__form-title'>E-mail</label>
            <input
              required
              className='profile__form-input'
              type='email'
              name='email'
              value={email || ''}
              placeholder={currentUser.email}
              onChange={handleEmailChange}
            ></input>
          </fieldset>
        </form>
        <div className='profile__links'>
          <button className='profile__change_button'>Редактировать</button>
          <button className='profile__signout_link' type='button' onClick={handleSignOut}>Выйти из аккаунта</button>
        </div>
      </section>
    </>
  );
}

export default Profile;