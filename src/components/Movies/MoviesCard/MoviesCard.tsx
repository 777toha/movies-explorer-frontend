import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

interface Movie {
    id: number;
    nameRU: string;
    image: string;
    likes: boolean;
    duration: string;
}

type MoviesCardProps = {
    movie: Movie
}

function MoviesCard(props: MoviesCardProps) {

    const location = useLocation();
    const { pathname } = location;

    const { movie } = props;

    return (

        <section className='movies-card'>
            <div className='movies-card__container'>
                <h3 className="movies-card__title">{movie.nameRU}</h3>
                <p className='movies-card__duration'>{movie.duration}</p>
                {pathname === '/movies' ? (
                    <button className={movie.likes === false ? 'movies-card__like' : "movies-card__like movies-card__like-active"}></button>
                ) : (
                    <button className='movies-card__delete'></button>
                )}
            </div>
            <img className='movies-card__image' src={movie.image } alt={movie.nameRU} />
        </section>

    )
}

export default MoviesCard;
