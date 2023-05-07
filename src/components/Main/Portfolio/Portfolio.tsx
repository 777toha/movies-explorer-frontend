import './Portfolio.css';
import {Link} from 'react-router-dom';
import Arrow from '../../../images/arrow_land.svg';

function Portfolio() {
    return (
        <div className='portfolio'>
            <h2 className="portfolio__paragraf">Портфолио</h2>
            <div className="portfolio__flex">
                <Link to='https://777toha.github.io/how-to-learn/' className="portfolio__flex_title">Статичный сайт</Link>
                <img src={Arrow} alt="Arrow" />
            </div>
            <div className="portfolio__flex">
                <Link to='https://777toha.github.io/russian-travel/' className="portfolio__flex_title">Адаптивный сайт</Link>
                <img src={Arrow} alt="Arrow" />
            </div>
            <div className="portfolio__flex">
                <Link to='https://777toha.github.io/mesto/' className="portfolio__flex_title">Одностраничное приложение</Link>
                <img src={Arrow} alt="Arrow" />
            </div>
        </div>
    )
}

export default Portfolio;
