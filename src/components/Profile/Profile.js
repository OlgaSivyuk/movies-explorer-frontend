import './Profile.css';
import HeaderAuth from '../HeaderAuth/HeaderAuth';

function Profile() {
    return (
      <>
      <HeaderAuth />
      <section className='profile'>
        <h2 className='profile__title profile__title-text'>Привет, Виталий!</h2>
        <form className='profile__form'>
                <fieldset className='profile__form-fields'>
                    <label className='profile__form-title'>Имя</label>
                    <input required className='profile__form-input' type='text' placeholder='Имя'></input>
                </fieldset>
                <fieldset className='profile__form-fields'>
                    <label className='profile__form-title'>E-mail</label>
                    <input required className='profile__form-input' type='email' placeholder='E-mail'></input>
                </fieldset>
            </form>
            <div className='profile__text'>
            <a href='#' className='profile__change_button'>Редактировать</a>
            <a href='#' className='profile__signout_link'>Выйти из аккаунта</a>
            </div>
      </section>
      </>
    );
  }
  
    export default Profile;