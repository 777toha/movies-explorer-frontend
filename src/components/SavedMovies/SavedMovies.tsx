import './SavedMovies.css';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';
import { getSavedMovies } from '../../utils/MainApi';
import { MyMovie } from '../Movies/Movies.type';

type PropsSavedMovies = {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
}

function SavedMovies(props: PropsSavedMovies) {

    const { isMenuActvite, onOpenMenu, onCloseMenu } = props;

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState<string>((localStorage.getItem('searchSavedMovies') || ''));
    const [filteredMoviesState, setFilteredMoviesState] = useState<Array<MyMovie>>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isShort, setIsShort] = useState<boolean>(() => {
        const short = localStorage.getItem('isShortSavedMovies');
        return short ? JSON.parse(short) as boolean : false;
    });

    const fetchMovies = useCallback(async () => {
        const response = await getSavedMovies();

        setMovies(response);
    }, []);


    const filtredMovies = useMemo(() => {

        const filtredMoviesArr = movies.filter((movie: MyMovie) => {
            const nameRU = movie.nameRU.toLowerCase();
            const str = search.toLowerCase();
            if (isShort && movie.duration > 40) {
                return false;
            }
            return nameRU.includes(str)
        },
        )
        localStorage.setItem('filteredSavedMoviesState', JSON.stringify(filtredMoviesArr));
        return filtredMoviesArr;
    }, [search, movies, isShort]);

    useEffect(() => {
        setFilteredMoviesState(filtredMovies);
    }, [filtredMovies]);

    useEffect(() => {
        const cachedMovies = JSON.parse(localStorage.getItem('filteredSavedMoviesState') || '[]');
        if (cachedMovies.length === 0) {
            fetchMovies();
            return;
        }
        setFilteredMoviesState(cachedMovies);
    }, []);

    useEffect(() => {
        localStorage.setItem('searchSavedMovies', search);
    }, [search]);

    useEffect(() => {
        localStorage.setItem('isShortSavedMovies', isShort.toString());
    }, [isShort]);

    const renderMovies = () => {
        return (
            <MoviesCardList movies={filteredMoviesState} fetchMovies={fetchMovies} />
        )
    }

    return (
        <section className='saved-movies'>
            <Header
                isMenuActvite={isMenuActvite}
                onOpenMenu={onOpenMenu}
                onCloseMenu={onCloseMenu}
            />
            <SearchForm onSearch={setSearch} onShort={setIsShort} isShort={isShort} search={search} />
            {isLoading ? <Preloader /> : renderMovies()}
            <Footer />
        </section>
    )
}

export default SavedMovies;
