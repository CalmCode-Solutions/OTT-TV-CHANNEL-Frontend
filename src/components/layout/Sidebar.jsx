import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Film, Tv, PlaySquare, Compass } from 'lucide-react';

export default function Sidebar() {
  const links = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Movies', path: '/movies', icon: <Film size={18} /> },
    { name: 'TV Shows', path: '/tv-shows', icon: <Tv size={18} /> },
  ];

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
      padding: '24px 16px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '36px', paddingLeft: '8px' }}>
        <PlaySquare size={28} color="var(--accent)" />
        <span style={{ fontSize: '20px', fontWeight: 'bold', letterSpacing: '-0.5px' }}>StreamVault</span>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontSize: '11px', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, padding: '4px 12px' }}>Menu</span>
        {links.map(link => (
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
              color: isActive ? '#fff' : 'var(--text-dim)',
              backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
              borderLeft: isActive ? '3px solid var(--accent)' : '3px solid transparent',
              transition: '0.2s'
            })}
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}