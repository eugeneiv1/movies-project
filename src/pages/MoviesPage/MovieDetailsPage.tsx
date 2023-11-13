import {MovieDetailsComponent} from "../../components/MoviesContainer/MovieDetails/MovieDetailsComponent";
import {useLoaderData} from "react-router-dom";
import {Header} from "../../components/header/Header";

const MovieDetailsPage = () => {
    // const {data} = useLoaderData();
    const data = useLoaderData();
    // @ts-ignore
    const movie = data.data


    return (
        <>
            <Header onSearchChange={()=>null} show={false}/>
            <MovieDetailsComponent movie={movie}/>
        </>
    );
};

export {MovieDetailsPage}