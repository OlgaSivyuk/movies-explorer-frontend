import './Register.css';
import logo from '../../images/logo.svg';

function Register() {
    return (
      <section className='register'>
         <div className='register__logo'>
          <img alt='o' className='register__logo-img' src={logo} />
        </div>
        <h2 className='register__title register__title-text'>Добро пожаловать!</h2>
        <form className='register__form'>
                <fieldset className='register__form-fields'>
                    <label className='register__form-title'>Имя</label>
                    <input required className='register__form-input' type='text'></input>
                </fieldset>
                <span className='register__error'>текст ошибки</span>
                <fieldset className='register__form-fields'>
                    <label className='register__form-title'>E-mail</label>
                    <input required className='register__form-input' type='email'></input>
                </fieldset>
                <span className='register__error'>текст ошибки</span>
                <fieldset className='register__form-fields'>
                    <div className='register__form-title'>Пароль</div>
                    <input required type='password' className='register__form-input register__form-input_error '></input>
                </fieldset>
                <span className='register__error' type='text'>Что-то пошло не так...</span>
                
            </form>
            <button className='register__submit' type='submit'>Зарегистрироваться</button>
            <div className='register__text'>
            <p className='register__signin'>Уже зарегистрированы? <a href='#' className='register__signin_link'>Войти</a></p>
            </div>
      </section>
    );
  }
  
    export default Register;