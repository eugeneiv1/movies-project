import {useEffect, useState} from "react";

import {IGenre} from "../../../interfaces/genreInterface";
import {genresSevice} from "../../../services/genresSevice";
import {GenreComponent} from "../../MoviesContainer/MovieDetails/genres/GenreComponent";
import css from './GenresComponent.module.css';


const GenresComponent = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        genresSevice.getAllGenres().then(({data: {genres}}) => setGenres(genres));
    }, []);

    return (
        <div className={css.genreWrapper}>
            {genres.map(genre => <GenreComponent genre={genre} key={genre.id}/>)}
        </div>
    );
};

export {GenresComponent};