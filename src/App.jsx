import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import { WatchlistProvider } from './context/WatchListContext';


function App() {

  return (
    <WatchlistProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </WatchlistProvider>
  );
};

export default App;
