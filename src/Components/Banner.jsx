import React from 'react'
import axios from "axios" 
import { useState, useEffect } from 'react' 
import { BASE_URL } from './utilities'


const Banner = () => {
    const [data,setData] = useState({})
    let url="https://api.themoviedb.org/3/trending/movie/day?api_key=2634e9f079c604567d18059d526b4346"
    
   
    const fetch_data=(url)=>{
        axios.get(url)
        .then((res)=>setData(res.data.results))}
   
    useEffect(()=>{
        fetch_data(url)
    },[])
    let idx=Math.floor(Math.random()*20)

   
 
    if(data){
        return (
            <div className='relative'>
                <img className='w-screen h-screen object-cover' src={BASE_URL+data[idx]?.poster_path} ></img>
                <div className='absolute bottom-0 text-white bg-black bg-opacity-50 w-full p-4 text-center text-lg'>
                    <p>{data[idx]?.title}</p>
                </div>
                
            </div>
        )
    }
    else{
        return(
            <p>Loading</p>
        )
    }

}

export default Banner