import {FC} from "react";
import {IGenre} from "../../../../interfaces/genreInterface";

interface IProps {
    genre: IGenre
}
const GenresComponent:FC<IProps> = ({genre}) => {
    const {id, name} = genre
    return (
        <div>
            {name}
        </div>
    );
};

export {
    GenresComponent
};