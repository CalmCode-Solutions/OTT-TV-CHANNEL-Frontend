import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// --- Layout Components ---
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// --- Auth Pages ---
import Splash from './pages/auth/Splash';
import Onboarding from './pages/auth/Onboarding';
import Login from './pages/auth/Login';

// --- App Pages ---
import Home from './pages/home';
import Watch from './pages/Watch';
import DetailPage from './pages/DetailPage';
import Movies from './pages/movies';
import TVShows from './pages/tvshows';


const MainAppLayout = () => (
  <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
    <Sidebar />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TVShows />} />

          <Route path="/my-list" element={<div style={{ padding: '32px', color: 'var(--text)' }}><h2>My Saved List</h2><p style={{ color: 'var(--text-dim)' }}>Your bookmarked movies and shows will appear here.</p></div>} />
          <Route path="/history" element={<div style={{ padding: '32px', color: 'var(--text)' }}><h2>Watch History</h2><p style={{ color: 'var(--text-dim)' }}>Recently watched content will appear here.</p></div>} />
          <Route path="/settings" element={<div style={{ padding: '32px', color: 'var(--text)' }}><h2>Account & App Settings</h2><p style={{ color: 'var(--text-dim)' }}>Manage profile preferences, playback quality, and subtitles.</p></div>} />

          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/watch/:id" element={<Watch />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Flow */}
        <Route path="/splash" element={<Splash />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />

       
        <Route path="/*" element={<MainAppLayout />} />
      </Routes>
    </Router>
  );
}