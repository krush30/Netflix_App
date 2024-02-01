import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_REQUEST } from '../utils/constant';
import { addNewTrailerMovies } from '../utils/movieSlice';

const useNewTrailerMovies = () => {
    const dispatch = useDispatch();
    const trailerData = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/508883/videos?language=en-US', API_REQUEST);
        const json = await data.json();

        dispatch(addNewTrailerMovies(json));

    }

    useEffect(() => {
        trailerData();
    }, [])

}

export default useNewTrailerMovies;
