import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  return (
    <div className='flex justify-center items-center gap-2 p-2'>
        <div><FaArrowLeft size={20}/></div>
        <div className='bg-black bg-opacity-20 p-3 rounded-lg'>1</div>
        <div><FaArrowRight size={20}/></div>
    </div>
  )
}

export default Pagination