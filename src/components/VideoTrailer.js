import React from 'react'
import useNewTrailerMovies from '../hooks/useNewTrailerMovies';
import { useSelector } from 'react-redux';

const VideoTrailer = () => {
    const movies = useSelector(store => store.movies?.newTrailerMovies)
    useNewTrailerMovies();
    if (!movies) return;


    return (
        <div>
            <iframe
                className="w-screen aspect-video "
                src={"https://www.youtube.com/embed/t5khm-VjEu4?si=AqxBn2X_lNy4dyS6" + "&autoplay=1&mute=1"}
                title="YouTube video player"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoTrailer;
