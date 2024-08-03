import {BrowserRouter, Route, Routes} from "react-router-dom"

import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Pagination from './Components/Pagination';
import WatchList from './Components/WatchList';
import Movies from './Components/Movies';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={
            <>
              <Banner/>
              <Movies/>
              <Pagination/>
            </>
          }/>
          <Route path="/watchlist" element={<WatchList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
