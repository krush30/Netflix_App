import React from 'react'
import Header from './Header';
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Home = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    return (
        <div>
            <Header />
            {!showGptSearch ? (<GptSearch />) :
                (<><MainComponent />
                    <SecondaryComponent /></>)}


        </div>
    )
}

export default Home;
