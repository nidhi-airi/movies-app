import React, { useEffect,useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import WatchList from './Components/WatchList';
import Movies from './Components/Movies';

function App() {
  const [isFav, setIsFav] = useState(false)
  const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem('fav')) || [])
  
  const handleFav = (movie) => {
    let new_Watchlist = [...watchList, movie]
    setWatchList(new_Watchlist)
  }
  const removeFav = (movie) => {
    const new_list = watchList.filter((elem) => {
      return elem.id !== movie.id
    })
    setWatchList(new_list)
  }

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(watchList))
  }, [watchList])


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Banner/>
              <Movies handleFav={handleFav} removeFav={removeFav} watchList={watchList}/>
              
            </>
          }/>
          <Route path="/watchlist" element={<WatchList movies={watchList} removeFromWatchList={removeFav} setWatchList={setWatchList}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
