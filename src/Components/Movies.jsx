import React, { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';
import Pagination from './Pagination';



const Movies = () => {
  const [movies,setMovies]=useState([])
  const [pageNo,setPageNo]=useState(1)
  const handlePrev=()=>{
    if(pageNo>1){
      setPageNo(pageNo-1)
    }
 
  }
  const handleNext=()=>{
    setPageNo(pageNo+1)
  }


  let url=`https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346&page=${pageNo}`
  
  const fetch_movies=(url)=>{
    axios.get(url)
    .then((res)=>{
      setMovies(res.data.results)
    }
  )}

  useEffect(()=>{
    fetch_movies(url)
  },[pageNo]) 
// it means that execute this callback on mounting as well as when the page changes
 

if(movies){
  return (
    <>
      <p className='text-center text-3xl font-bold mt-10 tracking-wider'>TRENDING MOVIES</p>
      <div className='bg-gray-200 flex flex-wrap justify-evenly gap-10 mt-2 p-10'>
        {movies.map((val,idx)=>{
          return( 
            <MovieCard key={idx} image_path={val.poster_path} title={val.title}/>
            
          )
        })}
      </div>  
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
    </>
    
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