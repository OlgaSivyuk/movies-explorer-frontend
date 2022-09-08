import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import logo from '../../images/logo.svg';

function Register({ handleRegister, errorMessage }) {
  const [data, setData] = useState({
    name: '',
    password: '',
    email: '',
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('data', data)
    const { name, password, email } = data;
    handleRegister({ name, password, email });
}

  return (
    <section className='register'>
      <Link to='/' className='register__logo'>
        <img alt='лого в виде бублика' className='register__logo-img' src={logo} />
      </Link>
      <h2 className='register__title register__title-text'>
        Добро пожаловать!
      </h2>
      <form className='register__form' onSubmit={handleSubmit}>
      <span className="register__error-message">{errorMessage}</span>
        <fieldset className='register__form-fields'>
          <label className='register__form-title'>Имя</label>
          <input
            required
            className='register__form-input'
            type='text'
            placeholder='Введите ваше имя'
            name='name'
            onChange={handleChange}
            value={data.name}>
          </input>
          <span className='register__error'></span>
        </fieldset>
        <fieldset className='register__form-fields'>
          <label className='register__form-title'>E-mail</label>
          <input
            required
            className='register__form-input'
            type='email'
            placeholder='Ваш адрес электронной почты'
            name='email'
            onChange={handleChange}
            value={data.email}>
          </input>
          <span className='register__error'></span>
        </fieldset>
        <fieldset className='register__form-fields'>
          <div className='register__form-title'>Пароль</div>
          <input
            required
            type='password'
            className='register__form-input register__form-input_error'
            placeholder='Придумайте пароль'
            name='password'
            onChange={handleChange}
            value={data.password}>
          </input>
          <span className='register__error' type='text'>
            Что-то пошло не так...
          </span>
        </fieldset>
        <button className='register__submit_button' type='submit'>
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