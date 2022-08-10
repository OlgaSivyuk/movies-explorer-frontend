import './PageNotFound.css';

function PageNotFound() {

  return (
    <section className='notfound'>
      <h1 className='notfound__title'>404</h1>
      <p className='notfound__subtitle'>Страница не найдена</p>

      <p className='notfound__link'>
        Назад
      </p>
    </section>
  );
};

export default PageNotFound;