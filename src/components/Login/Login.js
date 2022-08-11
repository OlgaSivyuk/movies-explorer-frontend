import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
    return (
      <section className='login'>
         <div className='login__logo'>
          <img alt='o' className='login__logo-img' src={logo} />
        </div>
        <h2 className='login__title login__title-text'>Рады видеть!</h2>
        <form className='login__form'>
                <fieldset className='login__form-fields'>
                    <label className='login__form-title'>E-mail</label>
                    <input required className='login__form-input' type='email'></input>
                </fieldset>
                <span className='login__error'></span>
                <fieldset className='login__form-fields'>
                    <div className='login__form-title'>Пароль</div>
                    <input required type='password' className='login__form-input login__form-input_error '></input>
                </fieldset>
                <span className='login__error' type='text'></span>
                
            </form>
            <button className='login__submit' type='submit'>Войти</button>
            <div className='login__text'>
            <p className='login__signin'>Еще не зарегистрированы? <a href='#' className='login__signin_link'>Регистрация</a></p>
            </div>
      </section>
    );
  }
  
    export default Login;