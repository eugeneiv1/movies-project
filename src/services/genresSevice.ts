import {axiosService} from "./axiosService";

import {urls} from "../constants/urls";

const genresSevice = {
    getAllGenres: ()=> axiosService.get(urls.genres.allGenres)
}

export {
    genresSevice
}