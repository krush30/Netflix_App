import React, { useEffect } from 'react'
import { API_REQUEST } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_REQUEST)



        const json = await data.json();

        dispatch(addPopularMovies(json.results));


    }

    useEffect(() => {
        nowPlayingMovies();
    }, [])



}

export default usePopularMovies;
