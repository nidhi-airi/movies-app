import React, { useContext, useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import MovieContext from '../context/MovieContext';
import PaginationContext from '../context/PaginationContext';

const Pagination = () => {
  const {pageNo,handleNext,handlePrev}=useContext(PaginationContext)
  return (
    <div className='flex justify-center items-center gap-2 p-2'>
        <div onClick={handlePrev}  className='cursor-pointer hover:text-blue-600'><FaArrowLeft size={20}/></div>
        <div className='bg-black bg-opacity-20 p-3 rounded-lg'>{pageNo}</div>
        <div onClick={handleNext} className='cursor-pointer hover:text-blue-600'><FaArrowRight size={20}/></div>
    </div>
  )
}

export default Pagination