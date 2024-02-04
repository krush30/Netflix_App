import React from 'react'

const VideoInfo = ({ title, overview, release_date, id }) => {
    return (
        <div className='w-screen aspect-video  pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black  '>
            <h1 className='md:text-6xl font-bold text-2xl '>{title}</h1>
            <h4 className='py-6 text-lg hidden '>Only in Cinemas {release_date}</h4>
            <h4 className='py-3 text-lg w-1/2 hidden md:inline-block'>{overview}</h4>
            <div className='my-4 md:my-0'>
                <button className='bg-white py-2 md:py-4 hover:opacity-50  text-black rounded-lg p-4 px-2 md:px-12 text-xl mx-3 '>▶️ Play</button>
                <button className='bg-gray-600 hidden md:inline-block hover:opacity-50  text-white rounded-lg p-4 px-12 text-xl '>!More Info</button>
            </div>
        </div>
    )
}

export default VideoInfo;
