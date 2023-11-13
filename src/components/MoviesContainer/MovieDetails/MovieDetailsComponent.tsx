import {FC} from "react";
import {Rating} from "@mui/material";

import {IMovieDetails} from "../../../interfaces/movieDetailsInterface";
import css from './MovieDetails.module.css'
import {GenreComponent} from "./genres/GenreComponent";
import {CastComponent} from "./cast/CastComponent";

interface IProps {
    movie: IMovieDetails
}
const MovieDetailsComponent:FC<IProps> = ({movie}) => {
    const {poster_path, genres,id, overview, release_date, runtime,vote_average, title } = movie;

    return (
        <div className={css.movieDetailsWrapper}>
            <div className={css.imageWrapper}>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt=""/>
            </div>
            <h2 className={css.title}>{title}</h2>
            <p className={css.overview}>{overview}</p>
            <div>
                <h4>Rating</h4>
                <Rating name="read-only" value={vote_average} max={10} readOnly precision={0.1}/>
            </div>
            <div>
                <h4>Genres:</h4>
                <ul>
                    {genres.map(genre => <GenreComponent key={genre.id} genre={genre}/>)}
                </ul>
            </div>
            <p>Release date: {release_date}</p>
            <p>Duration: {runtime} min</p>
            <div className={css.castWrapper}>
                <h4>Main cast:</h4>
                <CastComponent id={{id}}/>
            </div>
        </div>
    );
};

export {MovieDetailsComponent};