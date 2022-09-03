import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='login'>
      <Link to='/' className='login__logo'>
        <img alt='лого в виде бублика' className='login__logo-img' src={logo} />
      </Link>
      <h2 className='login__title login__title-text'>Рады видеть!</h2>
      <form className='login__form'>
        <fieldset className='login__form-fields'>
          <label className='login__form-title'>E-mail</label>
          <input
            required
            className='login__form-input'
            type='email'
            placeholder='Введите адрес электронной почты'>
          </input>
          <span className='login__error'></span>
        </fieldset>
        <fieldset className='login__form-fields'>
          <label className='login__form-title'>Пароль</label>
          <input
            required
            type='password'
            className='login__form-input login__form-input_error'
            placeholder='Введите пароль'>
          </input>
          <span className='login__error' type='text'>
            Что-то пошло не так...
          </span>
        </fieldset>
      </form>
      <button className='login__submit_button' type='submit'>
        Войти
      </button>
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