import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'c137a92bfcmsh6ef476c31a8800fp17f36bjsn03b5f5f5c736',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}