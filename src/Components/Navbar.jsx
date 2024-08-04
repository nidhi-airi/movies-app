import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex items-center gap-2 p-5 bg-slate-200 h-[4rem]'>
      <img className="h-[55px]" src="https://cdn-icons-png.flaticon.com/512/3938/3938627.png" alt="Logo" height={"200px"}/>
      <div className='flex items-end gap-4'>
        <Link to="/" className='text-blue-600 text-2xl font-bold'>Movies</Link>
        <Link to="/watchlist" className="text-blue-600 text-2xl font-bold">WatchList</Link>
      </div>
    </div>
  )
}

export default Navbar;
