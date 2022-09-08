import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';

function Login({handleLogin, errorMessage }) {
// вариант рекомендация 

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
//     const [isValidEmail, setIsValidEmail] = useState(false);
//     const [isValidPassword, setIsValidPassword] = useState(false);
//     const [errorEmail, setErrorEmail] = useState("");
//     const [errorPassword, setErrorPassword] = useState("");

//     function handleEmailChange(evt) {
//         const input = evt.target;
//         setEmail(input.value);
//         setIsValidEmail(input.validity.valid);
//         if(!isValidEmail) {
//             setErrorEmail(input.validationMessage)
//         } else {
//             setErrorEmail("");
//         }
//     }

//     function handlePasswordChange(evt) {
//         const input = evt.target;
//         setPassword(input.value);
//         setIsValidPassword(input.validity.valid);
//         if(!isValidPassword) {
//             setErrorPassword(input.validationMessage)
//         } else {
//             setErrorPassword("");
//         }
//     }

//     function handleSubmit(evt) {
//         evt.preventDefault();
//         handleLogin(email, password);
//     }

// первоначальный вариант  
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
    console.log('data', data)
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
      <span className="login__error-message">{errorMessage}</span>
        <fieldset className='login__form-fields'>
          <label className='login__form-title'>E-mail</label>
          <input
            required
            className='login__form-input'
            type='email'
            placeholder='Введите адрес электронной почты'
            name='email'
            onChange={handleChange}
            value={data.email || ''}>
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
            value={data.password || ''}>
          </input>
          <span className='login__error' type='text'></span>
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