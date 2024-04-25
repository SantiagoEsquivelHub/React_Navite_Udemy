import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher = new AxiosAdapter({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '32c3d1f4634f78491fb4e42346c2df52',
        language: 'es'
    }
})