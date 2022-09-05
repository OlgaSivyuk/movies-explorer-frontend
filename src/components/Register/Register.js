import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <section className='register'>
      <Link to='/' className='register__logo'>
        <img alt='лого в виде бублика' className='register__logo-img' src={logo} />
      </Link>
      <h2 className='register__title register__title-text'>
        Добро пожаловать!
      </h2>
      <form className='register__form'>
        <fieldset className='register__form-fields'>
          <label className='register__form-title'>Имя</label>
          <input
            required
            className='register__form-input'
            type='text'
            placeholder='Введите ваше имя'>
          </input>
          <span className='register__error'></span>
        </fieldset>
        <fieldset className='register__form-fields'>
          <label className='register__form-title'>E-mail</label>
          <input
            required
            className='register__form-input'
            type='email'
            placeholder='Ваш адрес электронной почты'>
          </input>
          <span className='register__error'></span>
        </fieldset>
        <fieldset className='register__form-fields'>
          <div className='register__form-title'>Пароль</div>
          <input
            required
            type='password'
            className='register__form-input register__form-input_error'
            placeholder='Придумайте пароль'>
          </input>
          <span className='register__error' type='text'>
            Что-то пошло не так...
          </span>
        </fieldset>
      </form>
      <button className='register__submit_button' type='submit'>
        Зарегистрироваться
      </button>
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