import './Menu.css'
import {Link ,useLocation} from 'react-router-dom';

type propsMenu = {
    isMenuActvite: boolean
    onCloseMenu: React.MouseEventHandler<HTMLElement>
}

function Menu(props: propsMenu) {

    const location = useLocation();
    const { pathname } = location;

    const { isMenuActvite, onCloseMenu } = props;

    return (
        <section className={isMenuActvite ? 'menu menu__opened' : 'menu'}>
            <div className={isMenuActvite ? 'menu__container menu__container_opened' : 'menu__container'}>
                <button className="menu__button" onClick={onCloseMenu}></button>
                <Link to='/' className="menu__title">Главная</Link>
                <Link to='/movies' className={pathname === '/movies' ? 'menu__title menu__title_border' : 'menu__title'} onClick={onCloseMenu}>Фильмы</Link>
                <Link to='/saved-movies' className={pathname === '/saved-movies' ? 'menu__title menu__title_border' : 'menu__title'} onClick={onCloseMenu}>Сохранённые фильмы</Link>
                <Link to='/profile' className='menu__account' onClick={onCloseMenu}>Аккаунт</Link>
            </div>
        </section>
    )
}

export default Menu;
