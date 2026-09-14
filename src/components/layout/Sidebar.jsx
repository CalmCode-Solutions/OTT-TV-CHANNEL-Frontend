import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Film, 
  Tv, 
  PlaySquare, 
  Heart, 
  Clock, 
  Settings 
} from 'lucide-react';

export default function Sidebar() {
  const mainLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Movies', path: '/movies', icon: <Film size={18} /> },
    { name: 'TV Shows', path: '/tv-shows', icon: <Tv size={18} /> },
  ];

  const personalLinks = [
    { name: 'My List', path: '/my-list', icon: <Heart size={18} /> },
    { name: 'History', path: '/history', icon: <Clock size={18} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
  ];

  const renderNavLink = (link) => (
    <NavLink
      key={link.path}
      to={link.path}
      style={({ isActive }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '10px 14px',
        borderRadius: 'var(--radius-sm)',
        fontSize: '14px',
        fontWeight: 500,
        textDecoration: 'none',
        color: isActive ? '#fff' : 'var(--text-dim)',
        backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
        borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
        transition: 'all 0.2s ease',
        cursor: 'pointer'
      })}
    >
      {link.icon}
      <span>{link.name}</span>
    </NavLink>
  );

  return (
    <aside style={{
      width: 'var(--sidebar-w)',
      backgroundColor: 'var(--bg-alt)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      height: '100vh',
      padding: '24px 16px',
      boxSizing: 'border-box'
    }}>
      {/* Brand Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px', paddingLeft: '8px' }}>
        <PlaySquare size={28} color="var(--accent)" />
        <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-0.5px', color: '#fff' }}>
          StreamVault
        </span>
      </div>

      {/* Main Menu */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, padding: '4px 12px' }}>
          Menu
        </span>
        {mainLinks.map(renderNavLink)}

        <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, padding: '16px 12px 4px 12px' }}>
          Personal
        </span>
        {personalLinks.map(renderNavLink)}
      </nav>
    </aside>
  );
}