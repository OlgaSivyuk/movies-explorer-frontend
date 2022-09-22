import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';


function Login({ handleLogin, errorMessage }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data) {
    handleLogin(data);
    reset();
  }

  return (
    <section className='login'>
      <Link to='/' className='login__logo'>
        <img alt='лого в виде бублика' className='login__logo-img' src={logo} />
      </Link>
      <h2 className='login__title login__title-text'>Рады видеть!</h2>
      <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='login__form-fields'>
          <label className='login__form-title'>E-mail</label>
          <input
            {...register('email', {
              required: 'Поле «Email» не может быть пустым',
              pattern: {
                value: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
                message: 'Введен некорректный адрес электронной почты',
              },
            })}
            className={`login__form-input ${
              errors?.email ? 'login__form-input_error' : ''
            }`}
            type='email'
            placeholder=' '
          ></input>
          {errors?.email && (
            <span className='login__error' type='text'>
              {errors?.email?.message}
            </span>
          )}
        </fieldset>
        <fieldset className='login__form-fields'>
          <label className='login__form-title'>Пароль</label>
          <input
            {...register('password', {
              required: 'Поле «Пароль» не может быть пустым',
              minLength: {
                value: 8,
                message: 'Пароль должен содержать минимум 8 символов',
              },
            })}
            className={`login__form-input ${
              errors?.password ? 'login__form-input_error' : ''
            }`}
            type='password'
            placeholder=' '
          ></input>
          {errors?.password && (
            <span className='login__error' type='text'>
              {errors?.password?.message}
            </span>
          )}
        </fieldset>
        <span className='login__error-message'>{errorMessage}</span>
        <button
          className={`login__submit_button ${
            !isValid ? 'login__submit_button_disabled' : ''
          }`}
          disabled={!isValid}
          type='submit'
        >
          Войти
        </button>
      </form>

      <div className='login__text'>
        <p className='login__signin'>
          Еще не зарегистрированы?{' '}
          <Link to='/signup' className='login__signin_link'>
            Регистрация
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Login;