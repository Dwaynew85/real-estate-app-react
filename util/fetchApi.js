import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '7e2dd22e72msh3c81622fa59215bp1cfd83jsn5cc2d4018f5b'
        }
    })
}