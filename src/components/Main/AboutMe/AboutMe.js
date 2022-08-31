import './AboutMe.css';
import avatar from '../../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студентка</h2>
      <div className='about-me__content'>
        <div className='about-me__description'>
          <h3 className='about-me__description-title'>Ольга</h3>
          <p className='about-me__description-subtitle'>
            Фронтенд-разработчик, 32 года
          </p>
          <p className='about-me__description-text'>
            Я родилась и живу в Саратове, закончила факультет экономики СГУ. Я
            люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начала кодить.
            С 2014 года работала в компании «QIWI». После того, как прошла курс
            по веб-разработке, начала заниматься фриланс-заказами и ушёла с
            постоянной работы.
          </p>
          <ul className='about-me__social'>
            <li className='about-me__social-item'>
              <a
                className='about-me__link'
                target='_blank'
                href='https://www.facebook.com/olga.sivyuk/'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>
            <li className='about-me__social-item'>
              <a
                className='about-me__link'
                target='_blank'
                href='https://github.com/OlgaSivyuk'
                rel='noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className='about-me__avatar' alt='Фото профиля' src={avatar} />
      </div>
    </section>
  );
}

export default AboutMe;