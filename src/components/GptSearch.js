import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG } from '../utils/constant';

const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10 '>
                <img className='h-screen md:h-auto' src={BG_IMG}
                    alt='netflix-bg' />
            </div>
            <div className='pt-[30%] md:pt-0'>

                <GptSearchBar />
                <GptMovieSuggestions />
            </div>
        </>
    )
}

export default GptSearch;
