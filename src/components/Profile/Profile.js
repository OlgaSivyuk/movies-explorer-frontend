import './Profile.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <>
      <HeaderAuth />
      <section className='profile'>
        <h2 className='profile__title profile__title-text'>Привет, Oльга!</h2>
        <form className='profile__form'>
          <fieldset className='profile__form-fields'>
            <label className='profile__form-title'>Имя</label>
            <input
              required
              className='profile__form-input'
              type='text'
              name='name'
              placeholder='Имя'
              minLength={2}
              maxLength={100}
            ></input>
          </fieldset>
          <fieldset className='profile__form-fields'>
            <label className='profile__form-title'>E-mail</label>
            <input
              required
              className='profile__form-input'
              type='email'
              name='email'
              placeholder='E-mail'
            ></input>
          </fieldset>
        </form>
        <div className='profile__links'>
          <button className='profile__change_button'>Редактировать</button>
          <Link to='/signin' className='profile__signout_link'>
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </>
  );
}

export default Profile;