import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import TVShows from './pages/TVShows';
import MyList from './pages/MyList';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <div className="navbar">
          <h1>My Streaming App</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/tv-shows">TV Shows</Link></li>
            <li><Link to="/my-list">My List</Link></li>
          </ul>
        </div>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/my-list" element={<MyList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
