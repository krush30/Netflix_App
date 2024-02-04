import React from 'react'

const MovieCards = ({ bg, title }) => {
    return (
        <div className='w-24 md:w-36 pr-4 '>
            <img src={'https://image.tmdb.org/t/p/w500/' + bg} alt='bg' />
            <h4 className='text-white'>{title}</h4>
        </div>
    )
}

export default MovieCards;
