import './PageNotFound.css';

function PageNotFound() {
    return(
        <section className="page-not-found">
            <h1 className="page-not-found__title">404</h1>
            <p className="page-not-found__subtitle">Страница не найдена</p>
            <a href='/signin' className="page-not-found__button">Назад</a>
        </section>
    )
}

export default PageNotFound;
