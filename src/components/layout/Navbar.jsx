import React from 'react';
import { Search, Bell, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header style={{
      height: 'var(--topbar-h)',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid var(--border)',
      backgroundColor: 'rgba(6, 6, 16, 0.8)',
      backdropFilter: 'blur(16px)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{ position: 'relative', width: '320px' }}>
        <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
        <input 
          type="text" 
          placeholder="Search movies, TV shows..."
          style={{
            width: '100%',
            padding: '9px 16px 9px 40px',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '20px',
            color: 'var(--text)',
            fontSize: '13px',
            outline: 'none'
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button style={{ color: 'var(--text-dim)', padding: '8px' }}><Bell size={20} /></button>
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: '13px', fontWeight: 'bold'
        }}>
          JD
        </div>
      </div>
    </header>
  );
}