import React, { useState } from 'react';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchForm from './SearchForm/SearchForm';
import Preloader from './Preloader/Preloader';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import film1 from '../../images/film1.svg';
import film2 from '../../images/film2.svg';
import film3 from '../../images/film3.svg';
import film4 from '../../images/film4.svg';
import film5 from '../../images/film5.svg';
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
        id: 2,
        nameRU: "Киноальманах «100 лет дизайна»",
        image: film2,
        likes: false,
        duration: "2ч 15м",
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
        id: 5,
        nameRU: "Бег это свобода",
        image: film5,
        likes: false,
        duration: "2ч 15м",
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

type propsMovies = {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
}

function Movies(props: propsMovies) {

    const { isMenuActvite,
        onOpenMenu, onCloseMenu } = props;

    const [isLoading, setIsLoading] = useState(false);

    const renderMovies = () => {

        return (
            <MoviesCardList movies={movies}/>
        )
    }

    return (
        <div>
            <Header 
            isMenuActvite={isMenuActvite}
            onOpenMenu={onOpenMenu}
            onCloseMenu={onCloseMenu}
            />
            <SearchForm />
            {isLoading ? <Preloader /> : renderMovies()}
            <Footer />
        </div>
    )
};

export default Movies;
