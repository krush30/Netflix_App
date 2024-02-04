import React from 'react'
import MovieCards from './MovieCards';

const MovieList = ({ title, movies }) => {

    console.log(movies);
    if (!movies) return;
    return (
        <div>
            <h1 className='text-lg md:text-3xl py-6 text-white'>{title}</h1>
            <div className='flex overflow-x-scroll px-6'>
                <div className='flex'>{movies.map(movie => <MovieCards bg={movie.poster_path} title={movie.title} />)}</div>

            </div>

        </div>
    )
}

export default MovieList;
