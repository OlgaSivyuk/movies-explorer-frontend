import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from '../../utils/MainApi.js';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
// import * as MoviesApi from '../../utils/MoviesApi.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isOkMessage, setOkMessage] = useState({ text: '' });
  const [isErrorMessage, setErrorMessage] = useState({ text: '' });

  // const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    handleCheckToken()
    .catch((err) => {
      
    });
  }, []);

  function handleRegister({ name, email, password }) {
    return MainApi.register(name, email, password)
      .then((res) => {
        console.log('res', res);
        setCurrentUser({ ...currentUser, email, name, password });
        setLoggedIn(true);
        handleLogin({ email, password });
        navigate('/movies');
      })
      .catch((err) => {
        if (err === `Ошибка...: 409`) {
          setErrorMessage({
            text: 'Пользователь с указанным email уже зарегистрирован',
          });
          setTimeout(() => {
            setErrorMessage(false);
          }, 3000);
        }
        console.log(`Ошибка...: ${err}`);
      });
  }

  function handleLogin({ email, password }) {
    MainApi.authorize(email, password)
      .then((data) => {
        if (data.email) {
          localStorage.setItem('email', data.email);
          handleCheckToken().then(() => {
            navigate('/movies');
          });
        }
      })
      .catch((err) => {
        if (err === `Ошибка...: 401`) {
          setErrorMessage({ text: 'Неправильные email или пароль' });
          setTimeout(() => {
            setErrorMessage(false);
          }, 3000);
        }
        console.log(`Ошибка...: ${err}`);
      });
  }

  function handleCheckToken() { // debugger;
    if (localStorage.getItem('email')) {
      return MainApi.getUser()
        .then((res) => {
          const { _id, email, name } = res.data;
          setLoggedIn(true);
          setCurrentUser({ _id, email, name });
        })
        .catch((err) => {
          if (err.includes('401')){
            localStorage.removeItem('email');
          }
          console.log(`Ошибка...: ${err}`);
        });
    } else {
      setLoggedIn(false);
      setCurrentUser({});
      return Promise.reject();
    }
  }

  function handleSignOut() {
    return MainApi.signout()
      .then(() => {
        localStorage.removeItem('email');
        localStorage.removeItem('filteredMoviesData');
        localStorage.removeItem('moviesData');
        localStorage.removeItem('shortsTumbOn');
        localStorage.removeItem('searchValue');
        setLoggedIn(false);
        setCurrentUser({});
        navigate('/');
      })
      .catch((err) => {
        console.log(`Ошибка...: ${err}`);
      });
  }

  function handleUpdateUser({ name, email }) {
    MainApi.updateUser(name, email)
      .then((res) => {
        console.log('update_user', res.data);
        const resData = res.data;
        setCurrentUser({
          ...currentUser,
          name: resData.name,
          email: resData.email,
        });
        setOkMessage({ text: 'Данные профиля обновлены!' });
        setTimeout(() => {
          setOkMessage({ text: '' });
        }, 3000);
      })
      .catch((err) => console.error(`Ошибка...: ${err}`));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Routes>
          <Route exact path='/' element={<Main loggedIn={loggedIn} />} />
          <Route
            path='/signup'
            element={
              <Register
                handleRegister={handleRegister}
                errorMessage={isErrorMessage.text}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <Login
                handleLogin={handleLogin}
                errorMessage={isErrorMessage.text}
              />
            }
          />

          <Route
            path='/movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies />
              </ProtectedRoute>
            }
          />

          <Route
            path='/saved-movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  loggedIn={loggedIn}
                  handleSignOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                  statusProfile={isOkMessage.text}
                />
              </ProtectedRoute>
            }
          />
          <Route exact path='*' element={<PageNotFound />} />
          <Route element={<Navigate to='/*' />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
