import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo.svg';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../utils/movieArrey';


function Login({handleLogin, errorMessage }) {

// первоначальный вариант  
  // const [data, setData] = useState({
  //   password: '',
  //   email: '',
  // });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [validEmail, setValidEmail] = useState(false);
  // const [validPassword, setValidPassword] = useState(false);

  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const [visibleError, setVisibleError] = useState(true);

  // function handleChange(e) {
  //   const target = e.target;
  //   const name = target.name;
  //   const value = target.value;
  //   setData({ ...data, [name]: value });
  // }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    // console.log('data', data)
    // const { password, email } = data;
    handleLogin({ password, email });
}

// useEffect(() => {
//   setValidEmail(EMAIL_REGEX.test(email));
//   if (!validEmail) {
//     setErrorEmail('Введите email');
//     return;
//   }
//   setErrorEmail('Введено невалидное значение');
// // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [email]);

// useEffect(() => {
//   setValidPassword(PASSWORD_REGEX.test(password));
//   if (!validPassword) {
//     setErrorPassword(
//       'Введите пароль - прописные и строчные латинские буквы, цифры'
//     );
//     return;
//   }
//   setErrorPassword('Введено невалидное значение');
// // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [password]);


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
            placeholder=' '
            name='email'
            onChange={handleChangeEmail}
            value={email || ''}

            // visibleError={validEmail}

            >
          </input>
          <span className= {`${ visibleError ? 'login_error_hide' : 'login__error'}`} type='text'>{errorEmail}</span>
        </fieldset>
        <fieldset className='login__form-fields'>
          <label className='login__form-title'>Пароль</label>
          <input
            required
            type='password'
            className='login__form-input login__form-input_error'
            placeholder=' '
            name='password'
            onChange={handleChangePassword}
            value={password || ''}

            // visibleError={validPassword}
          
          >
          </input>
          <span className= {`${ visibleError ? 'login_error_hide' : 'login__error'}`} type='text'>{errorPassword}</span>
        </fieldset>
        <button 
        className='login__submit_button' 
        type='submit'
        // disabled={!validEmail || !validPassword}
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