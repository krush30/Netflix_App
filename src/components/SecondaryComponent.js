import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryComponent = () => {
    const movies = useSelector(store => store.movies);
    // if (!movies) return;




    return (
        movies.nowMoviePlaying && (<div className='bg-black'>
            <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
                <MovieList title={"Now Playing"} movies={movies.nowMoviePlaying} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
            </div>


        </div>)
    )
}

export default SecondaryComponent;
