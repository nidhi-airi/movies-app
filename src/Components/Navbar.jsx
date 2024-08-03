import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center gap-2 p-5 bg-slate-200 h-[5rem]'>
        <img className="h-[55px]" src="https://cdn-icons-png.flaticon.com/512/3938/3938627.png" height={"200px"}/>
        <div className='flex items-end gap-4'>
            <a className='text-blue-600 text-2xl font-bold'>Movies</a>
            <a className="text-blue-600 text-2xl font-bold" href="/watchlist">WatchList</a>
        </div>
    </div>
  )
}

export default Navbar