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

type MovieData = {
    country: string;
    director: string;
    duration: number;
    year: string;
    description: string;
    image: string;
    trailer: string;
    thumbnail: string;
    movieId: number;
    nameRU: string;
    nameEN: string;
};

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
    try {
        const response = await fetch(`${MAIN_URL}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
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
    });
    return checkResponse(response);
};

export {
    register,
    login,
    checkToken,
    getUserInfo,
    patchUserInfo,
    getSavedMovies,
    saveMovie,
    deleteMovie,
};