import {FC, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

import {movieService} from "../../../services/movieService";
import {MovieComponent} from "../Movie/MovieComponent";
import {IMovie} from "../../../interfaces/movieInterface";
import css from './Movies.module.css';
import {Header} from "../../header/Header";

interface IProps {
    page: number,
    with_genres?:number,
    query?: string
}
const MoviesComponent:FC<IProps> = ({page}) => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [inputValue, setInputValue] = useState<string>();
    const [searchMovies, setSearchMovies] = useState([]);
    const {state} = useLocation();

    useEffect(() => {
        movieService.getAllMovies(page, state).then(({data: {results}}) => setMovies(results))
    }, [page, state]);

    useEffect(() => {
        if (!inputValue) {
            return;
        }

        movieService.searchMovies(inputValue).then(({data:{results}}) => {
            setSearchMovies(results);
        })
    }, [inputValue]);


    return (
        <>
            <Header onSearchChange={setInputValue} show={true}/>
            <div className={css.Movies}>
                {(searchMovies.length ? searchMovies : movies).map(movie => <MovieComponent movie={movie} key={movie.id}/>)}
            </div>
        </>
    );
};

export {MoviesComponent};