import React, { useEffect } from 'react'
import { BASE_URL, GENRES_ID_MAPPING } from './utilities'
import { MdDelete } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const WatchList = ({movies,removeFromWatchList,setWatchList}) => {
  const [genreList,setGenreList] =useState(["All Genres"])
  const [selectedGenre,setSelectedGenre]=useState("All Genres")
  const [searchVal,setSearchVal]=useState("")

  // function to handle genre change 
  const handleGenreChange=(genre)=>{
    setSelectedGenre(genre)
  }

  // this useeffect is used to change the genres list based on the movies added with different genre
  useEffect(()=>{
    let genres=movies.map((movie)=>{
      return GENRES_ID_MAPPING[movie.genre_ids[0]]
    })
    let unique_genres_list=new Set(genres)
    setGenreList(["All Genres",...unique_genres_list])

  },[movies])


  //  filtering movies based on selected genre
  let filteredMovies=movies.filter((movie)=>{
    if(selectedGenre==="All Genres"){
      return true
    }
    return selectedGenre===GENRES_ID_MAPPING[movie.genre_ids[0]]
  })

  // function to handle search  options
  const handleSearch=(e)=>{
    console.log(e.target.value)
    let input_val=e.target.value
    setSearchVal(input_val)
  }

  const sortAscending=(key)=>{
    let sorted_asc_data=[...movies].sort((movieA,movieB)=>{
      return movieA-movieB
    })
    setWatchList(sorted_asc_data)
  }
  const sortDescending=()=>{
    let sorted_desc_data=[...movies].sort((movieA,movieB)=>{
      return movieB-movieA
    })
    setWatchList(sorted_desc_data)
  }
  


  return (
    <>
    <div className='flex justify-evenly items-center p-5'>
    {genreList.map((each_genre)=>{
      return(
        <div className={`${each_genre===selectedGenre?'bg-blue-300':'bg-slate-200'} border border-slate-300 rounded p-1 text-slate-700 w-20 text-center text-sm font-semibold font-mono`} onClick={()=>handleGenreChange(each_genre)}>
          {each_genre}
        </div>
      )
    })}
    </div>
    
    
    <div className='flex justify-center mb-5'>
      <input className='border border-slate-300 w-[23rem] rounded-md h-8 focus:outline-none p-1 text-sm' onChange={(e)=>handleSearch(e)} val={searchVal}></input>
    </div>
    
    <table className='w-full text-left p-2'>
      <thead className='bg-[#1E2A5E] text-white h-10'>
        <th className='ml-2 text-center'>Name</th>
        <th>
          <i onClick={() => sortAscending("vote_average")}
            className="fa-solid fa-angle-up mr-2"></i>
          Ratings
          <i
            onClick={() => sortDescending("vote_average")}
            className="fa-solid fa-angle-down ml-2"
          ></i>
        </th>
        <th>
          <i
           
            className="fa-solid fa-angle-up mr-2"
          ></i>
          Ratings
          <i
           
            className="fa-solid fa-angle-down ml-2"
          ></i>
        </th>
        <th>Genre</th>
        <th></th>
      </thead>
      <tbody className='mb-2'>
        {filteredMovies.filter((movie)=>{
          return movie.title.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
        }).map((movie,id)=>{
          return(
            <tr className='mb-2'>
              <td className='m-4'>
                <div className='flex items-center m-2 justify-evenly '>
                 <img className='h-30 w-40 rounded-lg' src={BASE_URL+movie.backdrop_path}/>
                  <div className='font-bold'>{movie.title}</div>
                </div>
              </td>
              <td className='text-left'>
                {movie.vote_average}
              </td>
              <td className='text-left'>{movie.popularity}</td>
              <td>{GENRES_ID_MAPPING[movie.genre_ids[0]]}</td>
              <td className='text-red-600 cursor-pointer' onClick={()=>removeFromWatchList(movie)}><MdDelete size={20}/></td>
            </tr>
          )
           
        })}

        
      </tbody>
    </table>
    </>
    

  )
}

export default WatchList