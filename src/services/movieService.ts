import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const movieService = {
    getAllMovies: (page?:number, with_genres?:number) => axiosService.get(urls.movies.allMovies, {params: {page, with_genres}}),
    getMovieById:(id:string | undefined) => axiosService.get(urls.movies.byId(id)),
    getMovieCast:(id:number) => axiosService.get(urls.movies.cast(id)),
    searchMovies: (query?:string) => axiosService.get(urls.movies.search, {params: {query}})
}

export {
    movieService
}