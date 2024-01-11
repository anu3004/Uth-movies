import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTZkZTI2MWNjZjczZGQyYjhlNjdkY2Q5MDZlNDAyYyIsInN1YiI6IjY1N2VkZWRlMTI0YzhkMDc0OTM5NDI1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QSQNSj_4_K4f7vScErJkyaREJLYEaHpfiN-B4buoCUw";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers, 
            params,
        });
        return data;

    } catch (err) {
        return err;
    }
};