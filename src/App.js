import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import WatchList from "./Components/WatchList";
import Movies from "./Components/Movies";
import MovieContext from "./context/MovieContext";
import PaginationContext from "./context/PaginationContext";

function App() {
  const [isFav, setIsFav] = useState(false);
  const [pageNo, setPageNo] = useState(1)
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

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1)
    }

  }
  const handleNext = () => {
    setPageNo(pageNo + 1)
  }

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
                    <PaginationContext.Provider value={{handlePrev,handleNext,pageNo}}>
                      <Movies />
                    </PaginationContext.Provider>
                  
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
