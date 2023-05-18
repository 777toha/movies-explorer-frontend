import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import moviesApi from '../../utils/MoviesApi';

type propsMovies = {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
}
interface PropsMovie {
    nameRU: string
    duration: number
}

function Movies(props: propsMovies) {

    const { isMenuActvite, onOpenMenu, onCloseMenu } = props;

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isShort, setIsShort] = useState(false);

    const fetchMovies = useCallback(async () => {
        const response = await moviesApi();

        setMovies(response);
    }, []);

    useEffect(() => {
        fetchMovies();
    }, []);

    const filtredMovies = useMemo(() => {
        if (!search) {
            return []
        }

        return movies.filter((movie: PropsMovie) => {
            const nameRU = movie.nameRU.toLowerCase();
            const str = search.toLowerCase();
            if(!isShort && movie.duration > 40) {
                return false;
            }
            return nameRU.includes(str)
        },
        )
    }, [search, movies, isShort])

    const renderMovies = () => {
        return (
            <MoviesCardList movies={filtredMovies} />
        )
    };

    return (
        <section>
            <Header
                isMenuActvite={isMenuActvite}
                onOpenMenu={onOpenMenu}
                onCloseMenu={onCloseMenu}
            />
            <SearchForm onSearch={setSearch} onShort={setIsShort} isShort={isShort} />
            {isLoading ? <Preloader /> : renderMovies()}
            <Footer />
        </section>
    )
};

export default Movies;
