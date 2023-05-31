import './MoviesCardList.css';
import { useCallback, useEffect, useState, useMemo } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import { MyMovie } from '../Movies.type';

type MoviesListProps = {
    movies: Array<MyMovie>
    fetchMovies: () => void
}

function MoviesCardList(props: MoviesListProps) {

    const { movies, fetchMovies } = props;

    const [isMoreButton, setIsMoreButton] = useState(false);
    const [page, setPage] = useState(1);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleResize = useCallback(() => {
        setScreenWidth(window.innerWidth)
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (screenWidth > 1279) {
            setPage(7)
        } else if (screenWidth <= 1279 && screenWidth > 768) {
            setPage(7)
        } else if (screenWidth <= 500) {
            setPage(5);
        }
    }, [screenWidth])

    const movieRender = useMemo(() => {
        setIsMoreButton(true)
        return movies.slice(0, page);
    }, [page, movies])

    const handleMoreClick = useCallback(() => {
        setPage((prev) => prev + 3);
    }, []);

    return (
        <section className='cards'>
            <div className='cards__list'>{
                movieRender.map((movie) => (
                    <MoviesCard movie={movie} fetchMovies={fetchMovies} />
                ))
            }</div>
            {movies > movieRender && (
                <button 
                className='cards__button'
                type='button'
                onClick={handleMoreClick}
                >
                    Ещё
                </button>)}
        </section>
    )
}

export default MoviesCardList;
