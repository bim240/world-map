import axios from "axios";

// const VERSION_CODE = 'v0';

// this can only be used for auth!
const authInstance = axios.create({
  baseURL: `https://wikiapi.p.rapidapi.com/api/v1/wiki/geography/country/info`,
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "wikiapi.p.rapidapi.com",
    useQueryString: true,
  },
});

export { authInstance as axiosAuth };
