import React, {useContext, useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import './Profile.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Profile({ handleSignOut, onUpdateUser, statusProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const [activeButton, setActiveButton] = useState(false);
  const {
    register,
    formState: { errors, isValid, },
    handleSubmit,
    getValues,
    clearErrors,
    
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    }
  });

  useEffect(() => {
    checkInputs()
  });

  function onSubmit(data){
    onUpdateUser(data)
  }

  function validateValues(){
    const name = getValues('name');
    const email = getValues('email');

    if (name !== currentUser.name || email !== currentUser.email) {
      clearErrors('name');
      clearErrors('email');
      return true;
    } 
  }

  function checkInputs() {
    const name = getValues('name');
    const email = getValues('email');
    
    if (!name || !email) return;
    if (name !== currentUser.name || email !== currentUser.email) {
      setActiveButton(true)
    } else {
      setActiveButton(false)
    }
}

  return (
    <>
      <HeaderAuth />
      <section className='profile'>
        <h2 className='profile__title profile__title-text'>Привет, {currentUser.name}!</h2>
        <form className='profile__form' onSubmit={handleSubmit(onSubmit)}>

          <fieldset className='profile__form-fields'>
            <label className='profile__form-title'>Имя</label>
            <input
            {...register('name', {
              required: 'Поле «Имя» не может быть пустым',
              pattern: {
                value: /[A-Za-zА-Яа-я-\s]+$/,
                message: 'Поле «Имя» должно содержать только буквы латиницы, кириллицы, пробел или дефис',
              },
              minLength: {
                value: 2,
                message: 'Имя должно содержать минимум 2 символа',
              },
              maxLength: {
                value: 30,
                message: 'Имя не должно содержать более 30 символов',
              },
              validate: validateValues,
            })}
              className={`profile__form-input ${errors?.name ? 'profile__form-input_error' : ''}`}
              type='text'
              name='name'
              placeholder={currentUser.name}
            ></input>
            
            {/* <span className='profile__form-error-message'>{errorName}</span> */}
          </fieldset>
          <div className='profile__error-place'>
          { errors?.name && <span className='profile__error' type='text'>{errors?.name?.message}</span> }
          </div>
          <fieldset className='profile__form-fields'>
            <label className='profile__form-title'>E-mail</label>
            <input
               {...register('email', {
                required: 'Поле «Email» не может быть пустым',
                pattern: {
                  value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                  message: 'Введен некорректный адрес электронной почты',
                },
                validate: validateValues,
              })}
              className={`profile__form-input ${errors?.email ? 'profile__form-input_error' : ''}`}
              type='email'
              name='email'
              placeholder={currentUser.email}>
            </input>
          </fieldset>
          <div className='profile__error-place'>
          { errors?.email && <span className='profile__error' type='text'>{errors?.email?.message}</span> }
          </div>
          <div className='profile__error-place'>
         <span className='profile__error-message'>{statusProfile}</span>
        </div>
        <div className='profile__links'>
          <button disabled={activeButton && isValid ? false : true} className={activeButton && isValid ? 'profile__change_button profile__change_button_active' : 'profile__change_button'} type='submit' >Редактировать</button>
          <button className='profile__signout_link' type='button' onClick={handleSignOut}>Выйти из аккаунта</button>
        </div>
        </form>
      </section>
    </>
  );
}

export default Profile;