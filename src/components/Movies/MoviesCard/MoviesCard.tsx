import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { saveMovie, deleteMovie } from '../../../utils/MainApi';

interface Url {
    url: string
    formats: {
        thumbnail: {
            url: string
        }
    }
}

interface Movie {
    country: string,
    description: string;
    director: string;
    duration: number;
    id: number;
    image: Url;
    nameEN: string;
    nameRU: string;
    trailerLink: string;
    year: string;
    thumbnail: Url
}

interface MyMovie {
    country: string,
    description: string;
    director: string;
    duration: number;
    movieId: number;
    image: string;
    nameEN: string;
    nameRU: string;
    trailerLink: string;
    year: string;
    thumbnail: string;
}

type MoviesCardProps = {
    movie: Movie
}

function MoviesCard(props: MoviesCardProps) {

    const location = useLocation();
    const { pathname } = location;

    const { movie } = props;

    const [savedMovies, setSavedMovies] = useState<MyMovie[]>([]);

    const formatMovie = (movie: Movie): MyMovie => {
        const image = `https://api.nomoreparties.co/${movie.image.url}`;
        const thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`

        const myMovie: MyMovie = {
            country: movie.country,
            description: movie.description,
            director: movie.director,
            duration: movie.duration,
            movieId: movie.id,
            image,
            nameEN: movie.nameEN,
            nameRU: movie.nameRU,
            trailerLink: movie.trailerLink,
            year: movie.year,
            thumbnail,
        };

        return myMovie;
    }

    function putLikeOrDeleteLike() {
        if (!getSavedMovieCard(movie)) {
            saveMovies(movie)
        }
        else {
            onDelete(movie.id)
        }
    }

    function getSavedMovieCard(movie: Movie) {
        return savedMovies.find(savedMovie => savedMovie.movieId === movie.id)
    };

    const saveMovies = useCallback(async (movie: Movie): Promise<void> => {
        const card = await saveMovie(formatMovie(movie));
        setSavedMovies(prev => [card, ...prev]);
    }, []);

    const onDelete = useCallback(async (id: number) => {
        await deleteMovie(id);
        setSavedMovies(prev => prev.filter(c => c.movieId !== id));
    }, [])


    function minutesToHours(movie: Movie): string {
        const hours = Math.floor(movie.duration / 60);
        const minutes = (movie.duration % 60).toString().padStart(2, '0');
        return `${hours}ч ${minutes}м`;
    }

    return (

        <section className='movies-card'>
            <div className='movies-card__container'>
                <h3 className="movies-card__title">{
                    pathname === '/movies' ? (
                        movie.nameRU
                    ) : (
                        savedMovies.map((savedMovie) => {
                            return savedMovie.nameRU
                        })
                    )}</h3>
                <p className='movies-card__duration'>{minutesToHours(movie)}</p>
                {pathname === '/movies' ? (
                    <button className='movies-card__like' onClick={putLikeOrDeleteLike}></button>
                ) : (
                    <button className='movies-card__delete' onClick={() => onDelete(movie.id)}></button>
                )}
            </div>
            <img className='movies-card__image' src={`https://api.nomoreparties.co/${movie.image.url}`} alt={movie.nameRU} />
        </section>
    )
}

export default MoviesCard;
