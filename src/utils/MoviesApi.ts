import { MOVIES_URL } from "./constants";

const checkResponse = async (res: Response) => {
    if (res.ok) {
        return await res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

const moviesApi = async () => {
    const response = await fetch(MOVIES_URL, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
    });
    return checkResponse(response);
};

export default moviesApi;