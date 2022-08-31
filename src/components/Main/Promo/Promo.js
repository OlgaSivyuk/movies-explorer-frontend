import './Promo.css';
import mainImage from '../../../images/main-img.svg';

function Promo() {
  // {aboutProjectRef}
  // function scrollToProject() {
  //   aboutProjectRef.current.scrollIntoView({
  //     behavior: 'smooth'
  //   })
  // }

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
        {/* <button className='promo__button' type='button' onMouseDown={scrollToProject}>Узнать больше</button> */}
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