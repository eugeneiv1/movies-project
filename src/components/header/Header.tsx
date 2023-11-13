import {NavLink} from "react-router-dom";
import {FC, useState} from "react";

import {GenresComponent} from "../GenresContainer/GenresComponent/GenresComponent";
import css from './Header.module.css'
import {SearchComponent} from "./searchComponent/SearchComponent";

interface IProps {
    onSearchChange:(value:string) => void,
    show:boolean
}
const Header:FC<IProps> = ({onSearchChange, show}) => {
    const [hide, setHide] = useState<boolean>(true);
    const toggleHide = ():void => {
        setHide(!hide);
    }

    return (
        <div className={css.headerWrapper}>
            <div className={css.Header}>
                <NavLink to={'../movies'}>The MovieDB</NavLink>
                <ul className={css.headerList}>
                    <li><NavLink to={'../movies'}>Movies</NavLink></li>
                    <li onClick={toggleHide}><p>Genres</p></li>
                    {show && <li><SearchComponent onSearchChange={onSearchChange}/></li>}
                </ul>
                <div>The MovieDB</div>
            </div>
            <div className={hide? css.genresWrapper : [css.genresWrapper, css.show].join(' ')} id={'genres'}>
                <GenresComponent />
            </div>
        </div>
    );
};

export {Header};