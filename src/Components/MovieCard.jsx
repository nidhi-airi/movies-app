import React, { useContext } from 'react'
import { BASE_URL } from './utilities'
import { ImCross } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import MovieContext from '../context/MovieContext';

const MovieCard = ({image_path,title,  movie, isFav,movie_id}) => {
  const{handleFav,removeFav}=useContext(MovieContext)
  return (
    <div>
        <div className='relative hover:scale-110 duration-200 cursor-pointer' >
            <img className='h-[20rem] w-[12rem] object-cover rounded-xl' src={BASE_URL+image_path}/>
            <div className='absolute bottom-0 p-3 tracking-wide text-lg  text-center rounded-xl bg-black bg-opacity-50 text-white w-[12rem]'>{title}</div>
            {isFav?<ImCross size={25} className='absolute top-2 right-1 text-red-700 bg-black bg-opacity-30 rounded p-1' onClick={()=>{removeFav(movie)}}></ImCross>:
            <FaHeart size={25} className='absolute top-2 right-1 text-red-700 bg-black bg-opacity-30 rounded p-1' onClick={()=>{handleFav(movie)}}></FaHeart>}
            
        </div>
    </div>
  )
}

export default MovieCard