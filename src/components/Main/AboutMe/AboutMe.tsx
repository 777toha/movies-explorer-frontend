import './AboutMe.css';
import { Link } from 'react-router-dom';
import photo from '../../../images/photo-me.png';

function AboutMe() {
    return (
        <div className="about-me" id='about-me'>
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__flexbox">
                <div className='about-me__flex'>
                    <h2 className="about-me__flex_title">Антон</h2>
                    <h3 className="about-me__flex_subtitle">Фронтенд-разработчик, 27 лет</h3>
                    <p className="about-me__flex_paragraf">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <Link to='https://github.com/777toha' target="_blank" className="about-me__flex_link">Github</Link>
                </div>
                <img className="about-me__flex_me" src={photo} alt="me" />
            </div>
        </div>
    )
}

export default AboutMe;
