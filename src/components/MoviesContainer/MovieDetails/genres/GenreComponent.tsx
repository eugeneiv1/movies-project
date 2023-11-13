import {FC} from "react";
import {useNavigate} from "react-router-dom";

import {IGenre} from "../../../../interfaces/genreInterface";
import css from './GenreComponent.module.css'

interface IProps {
    genre: IGenre
}
const GenreComponent:FC<IProps> = ({genre}) => {
    const {id, name} = genre;
    const navigate = useNavigate();

    const showMovies = () => {
        navigate('../movies', {state: id})
    }

    return (
        <div className={css.genreWrapper} onClick={showMovies}>
            {name}
        </div>
    );
};

export {
    GenreComponent
};