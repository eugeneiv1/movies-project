import {FC, useEffect, useState} from "react";
import {IActor} from "../../../../interfaces/actorInterface";
import {movieService} from "../../../../services/movieService";
import {ActorComponent} from "./ActorComponent";

interface IProps {
    id: { id: number }
}

const CastComponent:FC<IProps> = ({id}) => {
    const {id:movieId} = id;
    const [cast, setCast] = useState<IActor[]>([]);

    useEffect(() => {
        movieService.getMovieCast(movieId).then(({data:{cast}}) => setCast(cast.filter((item:IActor) => item['known_for_department'] === "Acting").slice(0, 16)))
    }, [movieId]);

    return (
        <div>
            {cast.map(actor => <ActorComponent key={actor.id} actor={actor}/>)}
        </div>
    );
};

export {CastComponent};