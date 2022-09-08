import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext'; //для проверки,  удалить

function Login({handleLogin}) {

  //const userData = useContext(CurrentUserContext);//для проверки,  удалить
  const [data, setData] = useState({
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
    // console.log('data', data)
    // console.log('userData', userData)
    const { password, email } = data;
    handleLogin({ password, email });
}

  return (
    <section className='login'>
      <Link to='/' className='login__logo'>
        <img alt='лого в виде бублика' className='login__logo-img' src={logo} />
      </Link>
      <h2 className='login__title login__title-text'>Рады видеть!</h2>
      <form className='login__form' onSubmit={handleSubmit}>
        <fieldset className='login__form-fields'>
          <label className='login__form-title'>E-mail</label>
          <input
            required
            className='login__form-input'
            type='email'
            placeholder='Введите адрес электронной почты'
            name='email'
            onChange={handleChange}
            value={data.email}>
          </input>
          <span className='login__error'></span>
        </fieldset>
        <fieldset className='login__form-fields'>
          <label className='login__form-title'>Пароль</label>
          <input
            required
            type='password'
            className='login__form-input login__form-input_error'
            placeholder='Введите пароль'
            name='password'
            onChange={handleChange}
            value={data.password}>
          </input>
          <span className='login__error' type='text'>
            Что-то пошло не так...
          </span>
        </fieldset>
        <button className='login__submit_button' type='submit'>
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