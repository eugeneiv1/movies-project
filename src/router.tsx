import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layuots/MainLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";
import {MovieDetailsPage} from "./pages/MoviesPage/MovieDetailsPage";
import {movieService} from "./services/movieService";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout />, children: [
            {
                index: true, element: <Navigate to={'movies'} />
            },
            {
                path:'movies', element: <MoviesPage/>
            },
            {
                path: '/movieDetails/:id',
                element: <MovieDetailsPage />,
                loader: async ({params: {id}}) => {
                    return await movieService.getMovieById(id)
                }
            }
        ]
    }
])

export {
    router
}