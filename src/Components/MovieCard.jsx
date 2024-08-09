import React from 'react'
import { BASE_URL } from './utilities'
const MovieCard = ({image_path,title}) => {
  return (
    <div>
        <div className='relative hover:scale-110 duration-200 cursor-pointer' >
            <img className='h-[20rem] w-[12rem] object-cover rounded-xl' src={BASE_URL+image_path}/>
            <div className='absolute bottom-0 p-3 tracking-wide text-lg  text-center rounded-xl bg-black bg-opacity-50 text-white w-[12rem]'>{title}</div>
        </div>
    </div>
  )
}

export default MovieCard