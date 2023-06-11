import './Portfolio.css';
import {Link} from 'react-router-dom';
import Arrow from '../../../images/arrow_land.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className="portfolio__paragraf">Портфолио</h2>
            <Link to='https://777toha.github.io/how-to-learn/' target="_blank" className="portfolio__flex">
                <p className="portfolio__flex-title">Статичный сайт</p>
                <img src={Arrow} alt="Arrow" />
            </Link>
            <Link to='https://777toha.github.io/russian-travel/' target="_blank" className="portfolio__flex">
                <p className="portfolio__flex-title">Адаптивный сайт</p>
                <img src={Arrow} alt="Arrow" />
            </Link>
            <Link to='https://777toha.github.io/mesto/' target="_blank" className="portfolio__flex">
                <p className="portfolio__flex-title">Одностраничное приложение</p>
                <img src={Arrow} alt="Arrow" />
            </Link>
        </section>
    )
}

export default Portfolio;
