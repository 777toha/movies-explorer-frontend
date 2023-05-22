export interface MyMovie {
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
    _id?: string
}

interface Url {
    url: string
    formats: {
        thumbnail: {
            url: string
        }
    }
}

export interface Movie {
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