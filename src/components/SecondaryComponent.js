import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryComponent = () => {
    const movies = useSelector(store => store.movies);
    // if (!movies) return;




    return (
        movies.nowMoviePlaying && (<div className='bg-black'>
            <div className='-mt-52 pl-12 relative z-20'>
                <MovieList title={"Now Playing"} movies={movies.nowMoviePlaying} />
                <MovieList title={"Popular"} movies={movies.popularMovies} />
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
            </div>


        </div>)
    )
}

export default SecondaryComponent;
