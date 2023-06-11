import './AboutProject.css';

function about() {
    return (
        <section className='about' id='about'>
            <h2 className="about__title">О проекте</h2>
            <div className="about__project">
                <div className="about__project-column">
                    <h3 className="about__project-subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__project-paragraf">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__project-column">
                    <h3 className="about__project-subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__project-paragraf">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__week">
                <div className="about__week-column">
                    <h3 className="about__week-green">1 неделя</h3>
                    <p className="about__week-paragraf">Back-end</p>
                </div>
                <div className="about__week-column">
                    <h3 className="about__week-gray">4 недели</h3>
                    <p className="about__week-paragraf">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default about;