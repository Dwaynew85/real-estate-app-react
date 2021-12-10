import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

const API_KEY = process.env.REACT_APP_BAYUT_API_KEY;

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    });

    return data;
}