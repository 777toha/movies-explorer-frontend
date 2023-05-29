import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';
import { getSavedMovies } from '../../utils/MainApi';
import { MyMovie, Movie } from './Movies.type';
import { formatMovie } from '../../utils/format-movies';

type propsMovies = {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
}

function Movies(props: propsMovies) {

    const { isMenuActvite, onOpenMenu, onCloseMenu } = props;

    const [movies, setMovies] = useState<Array<MyMovie>>([]);
    const [search, setSearch] = useState<string>((localStorage.getItem('search') || ''));
    const [filteredMoviesState, setFilteredMoviesState] = useState<Array<MyMovie>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShort, setIsShort] = useState<boolean>(() => {
        const short = localStorage.getItem('isShort');
        return short ? JSON.parse(short) as boolean : false;
    });



    const fetchMovies = useCallback(async () => {
        const [allMovies, savedMovies] = await Promise.all([
            moviesApi(),
            getSavedMovies()
        ]);

        setMovies(
            allMovies.map((movie: Movie) => ({
                ...formatMovie(movie),
                _id: savedMovies.find((m: MyMovie) => m.movieId === movie.id)?._id
            }))
        );
    }, []);

    useEffect(() => {
        const cachedMovies = JSON.parse(localStorage.getItem('filteredMoviesState') || '[]');
        if (cachedMovies.length === 0) {
            fetchMovies();
            return;
        }
        setFilteredMoviesState(cachedMovies);
    }, []);

    useEffect(() => {
        localStorage.setItem('search', search);
    }, [search]);

    useEffect(() => {
        localStorage.setItem('isShort', isShort.toString());
    }, [isShort]);

    const filtredMovies = useMemo(() => {

        if (!search) {
            return []
        }

        const filtredMoviesArr = movies.filter((movie: MyMovie) => {
            const nameRU = movie.nameRU.toLowerCase();
            const str = search.toLowerCase();
            if (isShort && movie.duration > 40) {
                return false;
            }
            return nameRU.includes(str)
        },
        )
        localStorage.setItem('filteredMoviesState', JSON.stringify(filtredMoviesArr));
        return filtredMoviesArr;
    }, [search, movies, isShort]);

    useEffect(() => {
        setFilteredMoviesState(filtredMovies);
    }, [filtredMovies]);

    const renderMovies = () => {
        return (
            <MoviesCardList movies={filteredMoviesState} />
        )
    };

    return (
        <section>
            <Header
                isMenuActvite={isMenuActvite}
                onOpenMenu={onOpenMenu}
                onCloseMenu={onCloseMenu}
            />
            <SearchForm onSearch={setSearch} onShort={setIsShort} isShort={isShort} search={search}/>
            {isLoading ? <Preloader /> : renderMovies()}
            <Footer />
        </section>
    )
};

export default Movies;
