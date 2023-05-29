import './SavedMovies.css';
import { useState, useEffect, useCallback } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';
import { getSavedMovies } from '../../utils/MainApi';

type PropsSavedMovies = {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
}

function SavedMovies(props: PropsSavedMovies) {

    const { isMenuActvite, onOpenMenu, onCloseMenu } = props;

    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isShort, setIsShort] = useState(false);

    const fetchMovies = useCallback(async() => {
        const response = await getSavedMovies();

        setMovies(response);
    }, []);

    useEffect(() => {
        fetchMovies();
    }, []);

    const renderMovies = () => {
        return (
            <MoviesCardList movies={movies}/>
        )
    }

    return (
        <section className='saved-movies'>
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
}

export default SavedMovies;
