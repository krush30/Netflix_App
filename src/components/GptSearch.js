import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_IMG } from '../utils/constant';

const GptSearch = () => {
    return (
        <div>
            <div className='absolute -z-10'>
                <img className='' src={BG_IMG}
                    alt='netflix-bg' />
            </div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearch;
