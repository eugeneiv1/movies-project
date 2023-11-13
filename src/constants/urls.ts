
const baseURL = 'https://api.themoviedb.org/3';

const discover='/discover';
const movie = '/movie';
const genre ='/genre';

const urls ={
    movies: {
        allMovies: `${discover}${movie}`,
        byId: (id: string | undefined): string => `${movie}/${id}`,
        cast: (id: number): string => `${movie}/${id}/credits`,
        search: `/search${movie}`

    },
    genres: {
        allGenres: `${genre}${movie}/list`,
    }
}

export {
    baseURL,
    urls
}