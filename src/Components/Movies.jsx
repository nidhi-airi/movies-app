import React, { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'


const BASE_URL="https://image.tmdb.org/t/p/original"
const Movies = () => {
  const [movies,setMovies]=useState([])
  let url="https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346"
  
  const fetch_movies=(url)=>{
    axios.get(url)
    .then((res)=>{
      setMovies(res.data.results)
    }
  )}

  useEffect(()=>{
    fetch_movies(url)
  },[])

if(movies){
  return (
    <div className='bg-gray-200 flex flex-wrap justify-evenly gap-10 mt-10 p-10'>
    {movies.map((val,idx)=>{
      return( 
        <div className='relative' >
            <img className='h-[20rem] w-[12rem] object-cover rounded-xl' src={BASE_URL+val.poster_path}/>
            <div className='absolute bottom-0 p-3 tracking-wide text-lg  text-center rounded-xl bg-black bg-opacity-50 text-white w-[12rem]'>{val["title"]}</div>
        </div>
        
      )
    })}
  </div>  
  )
}

}

export default Movies

{/* <>
       <div className='bg-gray-200 flex flex-wrap justify-evenly gap-10 mt-10 p-10'>
        <div className='relative' >
            <img className='h-[20rem] w-[12rem] object-cover rounded-xl' src="https://image.tmdb.org/t/p/original//wsgni4E1UnBuvFouUUanSdniQi0.jpg"/>
            <div className='absolute bottom-0 p-3 tracking-wide text-lg  text-center rounded-xl bg-black bg-opacity-50 text-white w-[18rem]'>The Fall Guy</div>
        </div>
        </div>
        </> */} 