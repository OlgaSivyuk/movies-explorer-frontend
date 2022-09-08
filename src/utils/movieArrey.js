// попробовать подставить массив карточек для проверки полей
import movieImg from '../images/movie-img.svg';

const movieArrey = [
    {
      image: movieImg,
      title: '33 слова о дизайне',
      duration: '1ч 47м',
      like: true,
      added: true,
      id: 1,
    },
    {
      image: movieImg,
      title: 'Киноальманах «100 лет дизайна»',
      duration: '1ч 3м',
      like: false,
      added: false,
      id: 2
    },
    {
      image: movieImg,
      title: 'В погоне за Бенкси',
      duration: '1ч 42м',
      like: true,
      added: true,
      id: 3
    },
    {
      image: movieImg,
      title: 'Баския: Взрыв реальности',
      duration: '1ч 21м',
      like: false,
      added: false,
      id: 4
    },
    {
      image: movieImg,
      title: 'Бег это свобода',
      duration: '1ч 44м',
      like: false,
      added: false,
      id: 5
    },
    {
      image: movieImg,
      title: 'Книготорговцы',
      duration: '1ч 37м',
      like: true,
      added: true,
      id: 6
    },
    {
      image: movieImg,
      title: 'Когда я думаю о Германии ночью',
      duration: '1ч 56м',
      like: false,
      added: false,
      id: 7
    },
    {
      image: movieImg,
      title: 'Gimme Danger: История Игги и The Stooge...',
      duration: '1ч 59м',
      like: false,
      added: false,
      id: 8
    },
    {
      image: movieImg,
      title: 'Дженис: Маленькая девочка грустит',
      duration: '1ч 42м',
      like: true,
      added: false,
      id: 9
    },
    {
      image: movieImg,
      title: 'Соберись перед прыжком',
      duration: '1ч 10м',
      like: true,
      added: false,
      id: 10
    },
    {
      image: movieImg,
      title: 'Пи Джей Харви: A dog called money',
      duration: '1ч 4м',
      like: false,
      added: false,
      id: 11
    },
    {
      image: movieImg,
      title: 'По волнам: Искусство звука в кино',
      duration: '1ч 7м',
      like: false,
      added: false,
      id: 12
    },
  ];
  

  const EMAIL_REGEX = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
  const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

  export { 
    movieArrey, 
    EMAIL_REGEX,
    PASSWORD_REGEX, 
  };