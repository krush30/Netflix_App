import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_REQUEST } from '../utils/constant';
import { addNewTrailerMovies, addPopularMovies, addTopRatedMovies } from '../utils/movieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const trailerData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_REQUEST)

        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));

    }

    useEffect(() => {
        trailerData();
    }, [])

}

export default useTopRatedMovies;
