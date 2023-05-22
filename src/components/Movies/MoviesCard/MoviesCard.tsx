import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { saveMovie, deleteMovie } from '../../../utils/MainApi';
import { MyMovie } from '../Movies.type';

type MoviesCardProps = {
    movie: MyMovie
}

function MoviesCard(props: MoviesCardProps) {

    const location = useLocation();
    const { pathname } = location;

    const { movie } = props;

    const [savedMovies, setSavedMovies] = useState<MyMovie[]>([]);

    function filterMoviesWithId(movie: MyMovie) {
        return !!movie._id
    }

    const filteredMovies = pathname === '/movies' ? movie : filterMoviesWithId(movie);

    function putLikeOrDeleteLike() {
        if (!getSavedMovieCard(movie)) {
            saveMovies(movie)
        }
        else {
            onDelete(movie.movieId)
        }
    }

    function getSavedMovieCard(movie: MyMovie) {
        return savedMovies.find(savedMovie => savedMovie.movieId === movie.movieId)
    };

    const saveMovies = useCallback(async (movie: MyMovie): Promise<void> => {
        const card = await saveMovie(movie);
        setSavedMovies(prev => [card, ...prev]);
    }, []);

    const onDelete = useCallback(async (id: number) => {
        await deleteMovie(id);
        setSavedMovies(prev => prev.filter(c => c.movieId !== id));
    }, [])


    function minutesToHours(movie: MyMovie): string {
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
                    <button className={`movies-card__like ${!!movie._id ? 'movies-card__like-active' : ''}`} onClick={putLikeOrDeleteLike}></button>
                ) : (
                    <button className='movies-card__delete' onClick={() => onDelete(movie.movieId)}></button>
                )}
            </div>
            <img className='movies-card__image' src={movie.image} alt={movie.nameRU} />
        </section>
    )
}

export default MoviesCard;
