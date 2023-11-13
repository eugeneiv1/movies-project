import {FC} from "react";

import {IActor} from "../../../../interfaces/actorInterface";
import css from './Actor.module.css'
interface IProps {
    actor: IActor
}

const ActorComponent:FC<IProps> = ({actor}) => {
    const {name, character, profile_path} = actor
    return (
        <div className={css.actorWrapper}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${profile_path}`} alt=""/>
            </div>
            <p>{name} ({character})</p>
        </div>
    );
};

export {ActorComponent};