import { Link } from 'react-router-dom';
import './Promo.css'
import logo from '../../../images/logo_profile.svg';
import logo_middle from '../../../images/logo_middle.svg';
import { isLoggedIn } from '../../../types/index.type';
import Header from '../../Header/Header';

function Promo(props: isLoggedIn) {

    const { isLoggedIn, isMenuActvite, onOpenMenu, onCloseMenu } = props;

    return (
        <section className="promo">{
            isLoggedIn ? <Header
                isMenuActvite={isMenuActvite}
                onOpenMenu={onOpenMenu}
                onCloseMenu={onCloseMenu}
            /> : (
                <div className="promo__header">
                    <img src={logo} alt="logo" />
                    <div>
                        <Link to='/signup' className='promo__signup'>Регистрация</Link>
                        <Link to='/signin' className='promo__signin'>Войти</Link>
                    </div>
                </div>
            )
        }
            <div className="promo__body">
                <img className='promo__img' src={logo_middle} alt="logo-middle" />
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </section>
    );
};

export default Promo;
