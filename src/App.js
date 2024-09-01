import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import WatchList from "./Components/WatchList";
import Movies from "./Components/Movies";
import MovieContext from "./context/MovieContext";

function App() {
  const [isFav, setIsFav] = useState(false);
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const handleFav = (movie) => {
    let new_Watchlist = [...watchList, movie];
    setWatchList(new_Watchlist);
  };
  const removeFav = (movie) => {
    const new_list = watchList.filter((elem) => {
      return elem.id !== movie.id;
    });
    setWatchList(new_list);
  };

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <MovieContext.Provider
          value={{ watchList, handleFav, removeFav, setWatchList }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Movies />
                </>
              }
            />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
