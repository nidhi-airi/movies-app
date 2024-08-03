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
      <Navbar/>
      <Banner/>
      <Movies/>
      <Pagination/>
      <WatchList/>
    </div>
  );
}

export default App;
