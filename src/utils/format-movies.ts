import { MyMovie, Movie } from "../components/Movies/Movies.type";

export const formatMovie = (movie: Movie): MyMovie => {
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