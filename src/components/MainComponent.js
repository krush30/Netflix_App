import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoInfo from './VideoInfo';
import VideoTrailer from './VideoTrailer';
import { useSelector } from 'react-redux';

const MainComponent = () => {
    const movies = useSelector(store => store.movies.nowMoviePlaying);
    if (!movies) return;


    const mainMovie = movies[7];

    const { title, overview, release_date, id } = mainMovie;


    return (
        <div>

            <VideoInfo title={title} overview={overview} release_date={release_date} id={id} />
            <VideoTrailer />
        </div>
    )
}

export default MainComponent;
