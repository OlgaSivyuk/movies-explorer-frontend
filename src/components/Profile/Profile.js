import React, {useContext, useState, useEffect} from 'react';
import './Profile.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import { Link } from 'react-router-dom';

function Profile({ handleSignOut, onUpdateUser, statusProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [activeButton, setActiveButton] = useState(false);
  // const [errorName, setErrorName] = useState("");
  // const [errorEmail, setErrorEmail] = useState("");
  

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log('userData', currentUser)
    onUpdateUser({
      name, email
    });
  }

  function checkInputs() {
    if (!name || !email) return;
    if (name !== currentUser.name || email !== currentUser.email) {
      setActiveButton(true)
    } else {
      setActiveButton(false)
    }
}

useEffect(() => { 
  setName(currentUser.name);
  setEmail(currentUser.email);
}, [currentUser]);

useEffect(() => {
  checkInputs()
})

  return (
    <>
      <HeaderAuth />
      <section className='profile'>
        {/* <h2 className='profile__title profile__title-text'>{`Привет, ${currentUser.name}!`}</h2> */}
        <h2 className='profile__title profile__title-text'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' onSubmit={handleSubmit} noValidate>
        <span className="profile__error-message">{statusProfile}</span>
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
            {/* <span className="profile__form-error-message">{errorName}</span> */}
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
            {/* <span className="profile__form-error-message">{errorEmail}</span> */}
          </fieldset>
        <div className='profile__links'>
          <button disabled={activeButton ? false : true} className={activeButton ? 'profile__change_button profile__change_button_active' : 'profile__change_button'} type='submit' >Редактировать</button>
          {/* <button disabled={!(isValidEmail || isValidName)} className='profile__change_button_active' type='submit' >Редактировать</button> */}
          <button className='profile__signout_link' type='button' onClick={handleSignOut}>Выйти из аккаунта</button>
        </div>
        </form>
      </section>
    </>
  );
}

export default Profile;