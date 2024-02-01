import React, { useEffect } from 'react'
import { API_REQUEST } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_REQUEST)

        const json = await data.json();

        dispatch(addUpcomingMovies(json.results));


    }

    useEffect(() => {
        nowPlayingMovies();
    }, [])



}

export default useUpcomingMovies;
