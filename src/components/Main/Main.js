import React, { useState, useEffect } from 'react';
import './Main.css';
import { useLocation } from 'react-router-dom';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from "../Header/Header";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Footer from '../Footer/Footer';

function Main() {
  const [ isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setIsLoggedIn(false);
    }
  }, [location]);

    return (
      <>
      {isLoggedIn ? <HeaderAuth/> : <Header/>}
        <main className='content'>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
      <Footer />
      </>
    );
  }

  export default Main;