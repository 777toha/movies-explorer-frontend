import './AboutProject.css';

function about() {
    return (
        <div className='about' id='about'>
            <h2 className="about__title">О проекте</h2>
            <div className="about__project">
                <div className="about__project_column">
                    <h3 className="about__project_subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__project_paragraf">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__project_column">
                    <h3 className="about__project_subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__project_paragraf">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__week">
                <div className="about__week_column">
                    <h3 className="about__week_subtitle-green">1 неделя</h3>
                    <p className="about__week_paragraf">Back-end</p>
                </div>
                <div className="about__week_column">
                    <h3 className="about__week_subtitle-gray">4 недели</h3>
                    <p className="about__week_paragraf">Front-end</p>
                </div>
            </div>
        </div>
    );
}

export default about;