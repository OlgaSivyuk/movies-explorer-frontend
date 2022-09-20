import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register({ handleRegister, errorMessage }) {
  const {
    register,
    formState: { errors, isValid, },
    handleSubmit,
    // reset,
  } = useForm({
    mode: 'all',
    defaultValues: {
      name: '',
      email: '',
      password: '',
    }
  });

function onSubmit(data) {
  handleRegister(data);
  // reset()
}

  return (
    <section className='register'>
      <Link to='/' className='register__logo'>
        <img alt='лого в виде бублика' className='register__logo-img' src={logo} />
      </Link>
      <h2 className='register__title register__title-text'>
        Добро пожаловать!
      </h2>
      <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='register__form-fields'>
          <label className='register__form-title'>Имя</label>
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
            })}
            className={`register__form-input ${errors?.name ? 'register__form-input_error' : ''}`}
            type='text'
            placeholder=' '>
          </input>
          { errors?.name && <span className='register__error' type='text'>{errors?.name?.message}</span> }
        </fieldset>
        <fieldset className='register__form-fields'>
          <label className='register__form-title'>E-mail</label>
          <input
            {...register('email', {
              required: 'Поле «Email» не может быть пустым',
              pattern: {
                value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                message: 'Введен некорректный адрес электронной почты',
              },
            })}
            className={`login__form-input ${errors?.email ? 'login__form-input_error' : ''}`}
            type='email'
            placeholder=' '>
          </input>
          { errors?.email && <span className='register__error' type='text'>{errors?.email?.message}</span> }
        </fieldset>
        <fieldset className='register__form-fields'>
          <div className='register__form-title'>Пароль</div>
          <input
            {...register('password', {
              required: 'Поле «Пароль» не может быть пустым',
              minLength: {
                value: 8,
                message: 'Пароль должен содержать минимум 8 символов',
              },
            })}
            className={`login__form-input ${errors?.password ? 'login__form-input_error' : ''}`}
            type='password'
            placeholder=' '>
          </input>
          { errors?.password && <span className='register__error' type='text'>{errors?.password?.message}</span> }
        </fieldset>
        <span className="register__error-message">{errorMessage}</span>
        <button 
        className={`register__submit_button ${!isValid ? 'register__submit_button_disabled' : ''}`}
        disabled={!isValid} 
        type='submit'>
          Зарегистрироваться
        </button>
      </form>
      
      <div className='register__text'>
        <p className='register__signin'>
          Уже зарегистрированы?{' '}
          <Link to='/signin' className='register__signin_link'>
            Войти
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;