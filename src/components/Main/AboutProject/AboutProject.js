import './AboutProject.css';

function AboutProject() {
    return (
      <section className='about'>
        <h2 className='about__title'>О проекте</h2>
        <div className='about__description'>
          <div className='about__description-item'>
            <h3 className='about__description-title'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='about__description-text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className='about__description-item'>
            <h3 className='about__description-title'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='about__description-text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='about__timeline'>
          <div className='about__timeline-item about__timeline-item_left-position'>
            <p className='about__timeline-text about__timeline-text_black-style'>
              1 неделя
            </p>
            <p className='about__timeline-text about__timeline-text_white-style'>
              Back-end
            </p>
          </div>
          <div className='about__timeline-item about__timeline-item_right-position'>
            <p className='about__timeline-text about__timeline-text_grey-style'>
              4 недели
            </p>
            <p className='about__timeline-text about__timeline-text_white-style'>
              Front-end
            </p>
          </div>
        </div>
      </section>
    );
  }

  export default AboutProject;