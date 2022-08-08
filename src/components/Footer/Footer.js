import './Footer.css';

function Footer() {
  return (
    <section className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__info'>
        <p className="footer__tag">&copy; 2022</p>
        <ul className='footer__social'>
          <li className='footer__socialt-item'>
            <a className='footer__link' target={'_blank'} href='#'>
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__socialt-item'>
            <a className='footer__link' target={'_blank'} href='#'>
              Github
            </a>
          </li>
          <li className='footer__socialt-item'>
            <a className='footer__link' target={'_blank'} href='#'>
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

  export default Footer;