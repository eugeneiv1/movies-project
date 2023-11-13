import {NavLink, useNavigate} from "react-router-dom";
import {FC, useState} from "react";

import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import { useTheme} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from "../../layuots/MainLayout";

import {GenresComponent} from "../GenresContainer/GenresComponent/GenresComponent";
import css from './Header.module.css'
import {SearchComponent} from "./searchComponent/SearchComponent";

interface IProps {
    onSearchChange:(value:string) => void,
    show:boolean
}
const Header:FC<IProps> = ({onSearchChange, show}) => {
    const [hide, setHide] = useState<boolean>(true);
    const navigate = useNavigate()

    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const toggleHide = ():void => {
        setHide(!hide);
    }

    return (
        <div className={css.headerWrapper}>
            <div className={css.Header}>
                <p onClick={() => navigate('../movies')}>The MovieDB</p>
                <ul className={css.headerList}>
                    <li><p onClick={() => navigate('../movies')}>Movies</p></li>
                    <li onClick={toggleHide}><p>Genres</p></li>
                    {show && <li><SearchComponent onSearchChange={onSearchChange}/></li>}
                </ul>
                <div>The MovieDB</div>
                {theme.palette.mode} mode
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </div>
            <div className={hide? css.genresWrapper : [css.genresWrapper, css.show].join(' ')} id={'genres'}>
                <GenresComponent />
            </div>
        </div>
    );
};

export {Header};