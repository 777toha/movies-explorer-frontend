import './MoviesCardList.css';
import { useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

interface Movie {
    id: number;
    nameRU: string;
    image: string;
    likes: boolean;
    duration: string;
}

type MoviesListProps = {
    movies: Array<Movie>
  }

function MoviesCardList(props: MoviesListProps) {
    const [isMoreButton, setIsMoreButton] = useState(true);

    const { movies } = props;

    return (
        <section className='cards'>
            <div className='cards__list'>{
                movies.map((movie) => (
                    <MoviesCard movie={movie} />
                ))
            }</div>
            {isMoreButton ?
                <button className='cards__button'
                    type='button'>
                    Ещё
                </button> : ''}
        </section>
    )
}

export default MoviesCardList;
