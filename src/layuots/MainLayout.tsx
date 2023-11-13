import {Outlet} from "react-router-dom";

import 'normalize.css';

const MainLayout = () => {

    const hideGenres = (ev: { stopPropagation: () => void }) => {
        ev.stopPropagation();
        const genres:HTMLElement | null= document.getElementById('genres');
        if(genres.classList.length === 2) {
            genres.classList.remove('Header_show__2wD1t');
        }
    }

    return (
            <div onClick={hideGenres}>
                <Outlet/>
            </div>
    );
};

export {
    MainLayout
};