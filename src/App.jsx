import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Real Home Page
import Home from './pages/home';

// Placeholders for other members
const MoviesPlaceholder = () => <div style={{ padding: '24px' }}><h2>Movies Catalog (Member 3 will build here)</h2></div>;
const TVShowsPlaceholder = () => <div style={{ padding: '24px' }}><h2>TV Shows (Member 3 will build here)</h2></div>;
const DetailPlaceholder = () => <div style={{ padding: '24px' }}><h2>Detail Page (Member 4 will build here)</h2></div>;
const WatchPlaceholder = () => <div style={{ padding: '24px' }}><h2>Video Player (Member 4 will build here)</h2></div>;

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
        <Sidebar />
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
             
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<MoviesPlaceholder />} />
              <Route path="/tv-shows" element={<TVShowsPlaceholder />} />
              <Route path="/detail/:id" element={<DetailPlaceholder />} />
              <Route path="/watch/:id" element={<WatchPlaceholder />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}