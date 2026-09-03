<<<<<<< HEAD
import Home from "./pages/home";

function App() {
  return <Home />;
}

export default App;
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Placeholder Pages for Team Members
const HomePlaceholder = () => <div style={{ padding: '24px' }}><h2>Home (Member 2 will build here)</h2></div>;
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
              <Route path="/" element={<HomePlaceholder />} />
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
>>>>>>> 584c76add55ebdd7b752a10ebb1e1047d8925b76
