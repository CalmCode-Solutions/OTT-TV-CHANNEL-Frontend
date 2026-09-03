import React, { useState, useEffect, useRef } from 'react';
import { Search, Bell, User, LogOut, Settings, Crown, CheckCircle2, Film } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  // Sample Notifications Mock Data
  const notifications = [
    {
      id: 1,
      title: 'New Release: Neon Nights',
      desc: 'A new cyberpunk thriller is now streaming.',
      time: '10m ago',
      unread: true
    },
    {
      id: 2,
      title: 'Subscription Active',
      desc: 'Your Premium plan renewed successfully.',
      time: '1h ago',
      unread: false
    }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header style={{
      height: 'var(--topbar-h)',
      padding: '0 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid var(--border)',
      backgroundColor: 'rgba(6, 6, 16, 0.85)',
      backdropFilter: 'blur(16px)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      {/* Search Input */}
      <div style={{ position: 'relative', width: '340px' }}>
        <Search size={16} color="var(--text-muted)" style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)' }} />
        <input 
          type="text" 
          placeholder="Search movies, TV shows..."
          style={{
            width: '100%',
            padding: '10px 16px 10px 42px',
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '24px',
            color: 'var(--text)',
            fontSize: '13px',
            outline: 'none'
          }}
        />
      </div>

      {/* Right Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        
        {/* === Notification Bell === */}
        <div style={{ position: 'relative' }} ref={notifRef}>
          <button 
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfileMenu(false);
            }}
            style={{
              position: 'relative',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: showNotifications ? 'var(--accent)' : 'var(--text-dim)',
              backgroundColor: showNotifications ? 'var(--accent-soft)' : 'transparent',
              transition: '0.2s'
            }}
          >
            <Bell size={20} />
            {/* Red Notification Dot */}
            <span style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--accent)',
              borderRadius: '50%'
            }} />
          </button>

          {/* Notifications Dropdown */}
          {showNotifications && (
            <div style={{
              position: 'absolute',
              top: '50px',
              right: 0,
              width: '320px',
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              animation: 'fadeIn 0.2s ease'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 600 }}>Notifications</h4>
                <span style={{ fontSize: '11px', color: 'var(--accent)', cursor: 'pointer' }}>Mark all read</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {notifications.map(n => (
                  <div key={n.id} style={{
                    padding: '10px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: n.unread ? 'var(--surface)' : 'transparent',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    cursor: 'pointer'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{n.title}</span>
                      <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{n.time}</span>
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--text-dim)', lineHeight: 1.4 }}>{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* === User Profile Avatar === */}
        <div style={{ position: 'relative' }} ref={profileRef}>
          <div 
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              setShowNotifications(false);
            }}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontSize: '13px',
              fontWeight: 'bold',
              cursor: 'pointer',
              border: showProfileMenu ? '2px solid var(--accent)' : '2px solid transparent',
              transition: '0.2s'
            }}
          >
            JD
          </div>

          {/* Profile Dropdown Menu */}
          {showProfileMenu && (
            <div style={{
              position: 'absolute',
              top: '50px',
              right: 0,
              width: '240px',
              backgroundColor: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.5)',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              {/* User Details */}
              <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--border)', marginBottom: '4px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 600 }}>John Doe</h4>
                <p style={{ fontSize: '11px', color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <Crown size={12} /> Premium Member
                </p>
              </div>

              {/* Menu Links */}
              <button style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '9px 12px', borderRadius: 'var(--radius-sm)',
                color: 'var(--text-dim)', fontSize: '13px', textAlign: 'left',
                width: '100%', transition: '0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--surface)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              onClick={() => alert('Profile settings coming soon!')}
              >
                <User size={15} /> My Profile
              </button>

              <button style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '9px 12px', borderRadius: 'var(--radius-sm)',
                color: 'var(--text-dim)', fontSize: '13px', textAlign: 'left',
                width: '100%', transition: '0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--surface)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              onClick={() => alert('Settings coming soon!')}
              >
                <Settings size={15} /> Account Settings
              </button>

              <div style={{ height: '1px', backgroundColor: 'var(--border)', margin: '4px 0' }} />

              <button style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '9px 12px', borderRadius: 'var(--radius-sm)',
                color: 'var(--accent)', fontSize: '13px', textAlign: 'left',
                width: '100%', transition: '0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--accent-soft)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              onClick={() => alert('Sign out clicked')}
              >
                <LogOut size={15} /> Sign Out
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}