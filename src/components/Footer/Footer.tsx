import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className="footer__flex">
                <p className="footer__coopirate">© 2020</p>
                <div className='footer__flex_links'>
                    <Link to='https://practicum.yandex.ru/' target="_blank" className="footer__flex_links-paragraf">Яндекс.Практикум</Link>
                    <Link to='https://github.com/777toha' target="_blank" className="footer__flex_links-paragraf">Github</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;
