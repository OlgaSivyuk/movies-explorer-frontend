import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
        <ul className='portfolio__list'>
          <li className='portfolio__list-item'>
            <a className='portfolio__link' target={'_blank'} href='#'>
              Статичный сайт
              <span className="portfolio__symbol-arrow">↗</span>
            </a>
          </li>
          <li className='portfolio__list-item'>
            <a className='portfolio__link' target={'_blank'} href='#'>
              Адаптивный сайт
              <span className="portfolio__symbol-arrow">↗</span>
            </a>
          </li>
          <li className='portfolio__list-item'>
            <a className='portfolio__link' target={'_blank'} href='#'>
              Одностраничное приложение
              <span className="portfolio__symbol-arrow">↗</span>
            </a>
          </li>
        </ul>
    </section>
  );
}

  export default Portfolio;