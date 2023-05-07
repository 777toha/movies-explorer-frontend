import './SavedMovies.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Preloader from '../Movies/Preloader/Preloader';
import film1 from '../../images/film1.svg';
import film3 from '../../images/film3.svg';
import film4 from '../../images/film4.svg';
import film6 from '../../images/film6.svg';
import film7 from '../../images/film7.svg';

const movies = [
    {
        id: 1,
        nameRU: "33 слова о дизайне",
        image: film1,
        likes: true,
        duration: "1ч 42м",
    },
    {
        id: 3,
        nameRU: "В погоне за Бенкси",
        image: film3,
        likes: true,
        duration: "1ч 50м",
    },
    {
        id: 4,
        nameRU: "Баския: Взрыв реальности",
        image: film4,
        likes: true,
        duration: "1ч 42м",
    },
    {
        id: 6,
        nameRU: "Книготорговцы",
        image: film6,
        likes: true,
        duration: "1ч 50м",
    },
    {
        id: 7,
        nameRU: "Когда я думаю о Германии ночью",
        image: film7,
        likes: true,
        duration: "1ч 50м",
    },
];

type PropsSavedMovies = {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
}

function SavedMovies(props: PropsSavedMovies) {

    const { isMenuActvite, onOpenMenu, onCloseMenu } = props;

    const [isLoading, setIsLoading] = useState(false);

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
            <SearchForm />
            {isLoading ? <Preloader /> : renderMovies()}
            <Footer />
        </section>
    )
}

export default SavedMovies;
