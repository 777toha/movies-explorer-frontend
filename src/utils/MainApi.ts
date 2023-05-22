import { MAIN_URL } from './constants';

type Headers = {
    authorization: string;
} | {};

type ProfileData = {
    name: string;
    email: string;
};

type RegisterData = ProfileData & {
    password: string;
};

type LoginData = {
    email: string;
    password: string;
};

interface MovieData {
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
}

const checkResponse = async (res: Response) => {
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject(res.statusText);
};

const register = async (data: RegisterData) => {
    const response = await fetch(`${MAIN_URL}/signup`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return checkResponse(response);
};

const login = async (data: LoginData) => {
    const response = await fetch(`${MAIN_URL}/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(data),
    });
    return checkResponse(response);
};

const logout = async () => {
    const response = await fetch(`${MAIN_URL}/signout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
    });
    return checkResponse(response);
};

const getUserInfo = async () => {
    const headers: Headers = {
        "Content-Type": "application/json",
    };
    const response = await fetch(`${MAIN_URL}/users/me`, {
        method: "GET",
        headers,
        credentials: 'include',
    });
    return checkResponse(response);
};

const checkToken = async () => {
    const response = await fetch(`${MAIN_URL}/check-cookie`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
    });
    return checkResponse(response);
};


const patchUserInfo = async (data: ProfileData) => {
    const headers: Headers = {
        "Content-Type": "application/json",
    };
    const response = await fetch(`${MAIN_URL}/users/me`, {
        method: "PATCH",
        headers,
        credentials: 'include',
        body: JSON.stringify(data),
    });
    return checkResponse(response);
};

const getSavedMovies = async () => {
    const headers: Headers = {
        "Content-Type": "application/json",
    };
    const response = await fetch(`${MAIN_URL}/movies`, {
        headers,
        credentials: 'include',
    });
    return checkResponse(response);
};

const saveMovie = async (movie: MovieData) => {
    const headers: Headers = {
        "Content-Type": "application/json",
    };
    const response = await fetch(`${MAIN_URL}/movies`, {
        method: "POST",
        headers,
        credentials: 'include',
        body: JSON.stringify(movie),
    });
    return checkResponse(response);
};

const deleteMovie = async (movieId: number) => {
    const headers: Headers = {
        "Content-Type": "application/json",
    };
    const response = await fetch(`${MAIN_URL}/movies/${movieId}`, {
        method: "DELETE",
        headers,
        credentials: 'include',
    });
    return checkResponse(response);
};

export {
    register,
    login,
    logout,
    checkToken,
    getUserInfo,
    patchUserInfo,
    getSavedMovies,
    saveMovie,
    deleteMovie,
};