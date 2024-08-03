import React from 'react'

const Banner = () => {
  return (
    <div className='relative'>
        <img className='h-[52rem] w-full object-cover' src="https://image.tmdb.org/t/p/original/sRLC052ieEzkQs9dEtPMfFxYkej.jpg"></img>
        <div className='absolute bottom-0 text-white bg-black bg-opacity-50 w-full p-4 text-center text-lg'>
            <p>Rebel Moon-Part One: A Child of Fire</p>
        </div>
    </div>
  )
}

export default Banner