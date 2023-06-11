import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio'
import Footer from '../Footer/Footer';
import { isLoggedIn } from '../../types/index.type';
import './Main.css';

function Main(props: isLoggedIn) {
    const { isLoggedIn, isMenuActvite, onOpenMenu, onCloseMenu } = props;
    return (
        <section className='main'>
            <Promo
                isMenuActvite={isMenuActvite}
                onOpenMenu={onOpenMenu}
                onCloseMenu={onCloseMenu}
                isLoggedIn={isLoggedIn}
            />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </section>
    );
};

export default Main;
