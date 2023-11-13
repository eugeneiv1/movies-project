import {FC} from "react";

import {IMovie} from "../../../interfaces/movieInterface";
import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";
interface IProps {
    movie: IMovie
}
const MovieComponent:FC<IProps> = ({movie}) => {
    const {original_title, poster_path, vote_average, id} = movie;
    const navigate = useNavigate();

    return (
        <div className={css.Movie} onClick={() => navigate(`/movieDetails/${id}`, {state: id})}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt=""/>
            </div>
            <Rating name="read-only" value={vote_average} max={10} readOnly precision={0.1}/>
            <div>{original_title}</div>
        </div>
    );
};

export {MovieComponent};