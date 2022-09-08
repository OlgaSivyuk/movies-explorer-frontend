import React, { useState, useEffect } from 'react';
import './Main.css';
import { useLocation } from 'react-router-dom';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import Footer from '../Footer/Footer';

function Main({loggedIn}) {
  // const [isLoggedIn, setIsLoggedIn] = useState(loggedIn);
  // const location = useLocation();
  // const aboutProjectRef = useRef();

  // useEffect(() => {
  //   if (location.pathname === '/') {
  //     setIsLoggedIn(false);
  //   }
  // }, [location]);

  return (
    <>
      {loggedIn ? <HeaderAuth /> : <Header />}
      <main className='content'>
        {/* <Promo aboutProjectRef={aboutProjectRef}/> */}
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