import './AboutMe.css';
import avatar from '../../../images/avatar.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__content'>
      <div className='about-me__description'>
        <h3 className='about-me__description-title'>Виталий</h3>
        <p className='about-me__description-subtitle'>
          Фронтенд-разработчик, 30 лет
        </p>
        <p className='about-me__description-text'>
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня
          есть жена и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.
        </p>
        <ul className='about-me__social'>
          <li className='about-me__social-item'>
            <a className='about-me__link' target={'_blank'} href='#'>
              Facebook
            </a>
          </li>
          <li className='about-me__social-item'>
            <a className='about-me__link' target={'_blank'} href='#'>
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