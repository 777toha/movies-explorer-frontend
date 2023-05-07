import './Profile.css';
import Header from '../Header/Header';

type PropsProfile = {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
}

function Profile(props: PropsProfile) {

    const {isMenuActvite, onOpenMenu, onCloseMenu } = props;

    return (
        <section className='profile'>
            <Header 
            isMenuActvite={isMenuActvite}
            onOpenMenu={onOpenMenu}
            onCloseMenu={onCloseMenu}
            />
            <div className="profile__container">
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <form className='profile__form' action="">
                    <ul className="profile__input-list">
                        <li className="profile__input-item">
                            <label className='profile__label' htmlFor="">Имя</label>
                            <input className='profile__input' type="text" value="Виталий" />
                        </li>
                        <li className="profile__input-item">
                            <label className='profile__label' htmlFor="">E-mail</label>
                            <input className='profile__input' type="text" value="pochta@yandex.ru" />
                        </li>
                    </ul>
                </form>
                <button className="profile__edit">Редактировать</button>
                <button className="profile__out">Выйти из аккаунта</button>
            </div>
        </section>
    )
}

export default Profile;
