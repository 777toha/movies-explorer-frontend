import './Techs.css';

const technologies = [
    'HTML',
    'CSS',
    'Js',
    'React',
    'Git',
    'Express.js',
    'mongoDB',
    // 'TypeScript'
]


function Techs() {
    return (
        <section className='techs' id='techs'>
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__about">7 технологий</h3>
            <p className="techs__paragraf">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className="techs__stec">
                {technologies.map((technology) => (
                    <div className="techs__stec-about">{technology}</div>
                ))}
            </div>
        </section>
    )
}

export default Techs;
