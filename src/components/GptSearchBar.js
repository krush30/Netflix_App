import React from 'react';
import lang from '../utils/langConstat';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langChange = useSelector(store => store.config.lang)
    return (
        <div>


            <div className='pt-[10%] flex justify-center '>

                <form className='w-1/2   bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault}>
                    <input
                        type='text'
                        placeholder={lang[langChange].placeholder}
                        className='p-4 m-4 col-span-9 ' />
                    <button className='py-2 px-2 w- bg-red-600 text-white rounded-lg col-span-3 m-4'>{lang[langChange].search}</button>
                </form>
            </div></div>

    )
}

export default GptSearchBar;
