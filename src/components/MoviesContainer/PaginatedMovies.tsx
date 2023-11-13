import React from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import {MoviesComponent} from "./Movies/MoviesComponent";
import css from './PaginatedMovies.module.css'

const PaginatedMovies = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Stack spacing={2}>
            <MoviesComponent page={page}/>
            <Pagination count={10}
                        page={page}
                        onChange={handleChange}
                        showFirstButton={true}
                        showLastButton={true}
                        className={css.moviesPagination}
            />
        </Stack>
    );
};

export {PaginatedMovies};