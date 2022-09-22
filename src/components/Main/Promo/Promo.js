import './Promo.css';
import mainImage from '../../../images/main-img.svg';

function Promo() {

  return (
    <section className='promo'>
      <div className='promo__content'>
        <h1 className='promo__title'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a className='promo__button' href='#about'>
          Узнать больше
        </a>
      </div>
      <img
        className='promo__image'
        alt='Земной шар из слова веб'
        src={mainImage}
      />
    </section>
  );
}

export default Promo;