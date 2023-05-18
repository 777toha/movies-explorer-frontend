import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

interface Movie {
    id: number;
    nameRU: string;
    image: {
        url: string
    }
    likes: boolean;
    duration: number;
}

type MoviesCardProps = {
    movie: Movie
}

function MoviesCard(props: MoviesCardProps) {

    const location = useLocation();
    const { pathname } = location;

    const { movie } = props;

    function minutesToHours(movie: Movie): string {
        const hours = Math.floor(movie.duration / 60);
        const minutes = (movie.duration % 60).toString().padStart(2, '0');
        return `${hours}ч ${minutes}м`;
    }

    return (

        <section className='movies-card'>
            <div className='movies-card__container'>
                <h3 className="movies-card__title">{movie.nameRU}</h3>
                <p className='movies-card__duration'>{minutesToHours(movie)}</p>
                {pathname === '/movies' ? (
                    <button className={movie.likes === false ? 'movies-card__like' : "movies-card__like movies-card__like-active"}></button>
                ) : (
                    <button className='movies-card__delete'></button>
                )}
            </div>
            <img className='movies-card__image' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
        </section>

    )
}

export default MoviesCard;
