import React from 'react'
import { createImageUrl } from '../services/movieService';
import { FaHeart, FaRegHeart} from 'react-icons/fa'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const MovieItem = ({movie}) => {
    const {title, backdrop_path, poster_path} = movie;


  return (

<div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
        <img className='w-full h-40 block object-cover object-top' src={createImageUrl(backdrop_path ?? poster_path, 'w500')} alt={title}/>
        <div className='absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100'>
            <p className='whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold'>{movie.title}</p>
        </div>
</div>

  )
}

export default MovieItem