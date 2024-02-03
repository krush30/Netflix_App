import React, { useRef } from 'react';
import lang from '../utils/langConstat';
import { useSelector } from 'react-redux';
import openai from './OpenAi';

const GptSearchBar = () => {
    const searchText = useRef(null);
    const langChange = useSelector(store => store.config.lang);

    const handleGptSearch = async () => {

        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: searchText.current.value }],
            model: 'gpt-3.5-turbo',
        });


        console.log(chatCompletion.choices)


    }
    return (
        <div>


            <div className='pt-[10%] flex justify-center '>

                <form className='w-1/2   bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={searchText}
                        type='text'
                        placeholder={lang[langChange].placeholder}
                        className='p-4 m-4 col-span-9 ' />
                    <button onClick={handleGptSearch} className='py-2 px-2 w- bg-red-600 text-white rounded-lg col-span-3 m-4'>{lang[langChange].search}</button>
                </form>
            </div></div>

    )
}

export default GptSearchBar;
