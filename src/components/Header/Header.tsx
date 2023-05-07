import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo_profile.svg';
import Menu from './Menu/Menu';

type propsHeader = {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
}

function Header(props: propsHeader) {

    const {isMenuActvite, onOpenMenu, onCloseMenu } = props;

    const location = useLocation();
    const { pathname } = location;

    return (
        <div className='header'>
            <Link to="/">
            <img src={logo} alt="logo" />
            </Link>
            <div className='header__route'>
                <Link to='' className={pathname === 'movies' ? 'header__route_medium' : 'header__route_regular'}>Фильмы</Link>
                <Link to='' className={pathname === 'saved-movies' ? 'header__route_medium' : 'header__route_regular'}>Сохранённые фильмы</Link>
            </div>
            <Link to='' className='header__account'>Аккаунт</Link>
            <button className='header__button' onClick={onOpenMenu}></button>
            <Menu 
            isMenuActvite={isMenuActvite}
            onCloseMenu={onCloseMenu}
            />
        </div>
    )
};

export default Header;
