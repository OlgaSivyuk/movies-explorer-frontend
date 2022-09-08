import React, {useState, useEffect} from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import * as MainApi from "../../utils/MainApi.js";
import * as MoviesApi from "../../utils/MoviesApi.js";
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isOkMessage, setOkMessage] = useState({text: ""});
  const [isErrorMessage, setErrorMessage] = useState({text: ""});



  const navigate = useNavigate();

  useEffect(() => {
    handleCheckToken();
  }, []);



  function handleRegister({ name, email, password }) {
    return MainApi.register(name, email, password)
      .then((res) => {
        console.log("res", res);
        setCurrentUser({ ...currentUser, email, name, password });
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        if (err === `Ошибка...: 409`) {
          return setErrorMessage(
            {text: 'Пользователь с указанным email уже зарегистрирован'});
        };
        console.log(`Ошибка...: ${err}`);
      });
  }

  function handleLogin({ email, password }) {
    return MainApi.authorize(email, password)
      .then((data) => {
        if (data.email) {
          // setLoggedIn(true);
          // setCurrentUser({ _id: data._id, email: data.email });
          localStorage.setItem('email', data.email);
          handleCheckToken();
          navigate('/movies');
        }
      })
      .catch((err) => {
        if (err === `Ошибка...: 401`) {
          return setErrorMessage(
            {text: 'Неправильные email или пароль'});
        };
        console.log(`Ошибка...: ${err}`);
      });
  }

  function handleCheckToken() {
    if (localStorage.getItem('email')) {
      MainApi.getUser()
        .then((res) => {
          const { _id, email, name } = res.data;
          setLoggedIn(true);
          setCurrentUser({ _id, email, name});
        })
        .catch((err) => {
          console.log(`Ошибка...: ${err}`);
        });
    }
  }

  function handleSignOut() {
    return MainApi.signout()
      .then(() => {
        localStorage.removeItem('email');
        setLoggedIn(false);
        setCurrentUser({});
        navigate('/signin');
    })
    .catch((err) => {
      console.log(`Ошибка...: ${err}`);
    });
  }

  function handleUpdateUser({ name, email }) {
    MainApi
      .updateUser(name, email)
      .then((res) => {
        console.log("update_user", res.data);
        const resData = res.data;
        setCurrentUser({
          ...currentUser,
          name: resData.name,
          email: resData.email,
        });
        setOkMessage({text: 'Данные профиля обновлены!'});
        setTimeout(() => {
          setOkMessage({text: ''})
        }, 3000);
      })
      .catch((err) => 
      console.error(`Ошибка...: ${err}`));
  }



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
          <Route
            path="/signup"
            element={<Register 
              handleRegister={handleRegister}
              errorMessage={isErrorMessage.text} />}
          />
          <Route path="/signin" element={<Login 
          handleLogin={handleLogin}
          errorMessage={isErrorMessage.text} />} />

        
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies loggedIn={loggedIn}/>
              </ProtectedRoute>
            }
          />
{/* 
          <Route
            path="/movies"
            element={
                <Movies loggedIn={loggedIn}/>
            }
          /> */}

          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies loggedIn={loggedIn} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile 
                loggedIn={loggedIn}  
                handleSignOut={handleSignOut}
                onUpdateUser={handleUpdateUser}
                statusProfile={isOkMessage.text}/>
              </ProtectedRoute>
            }
          />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
