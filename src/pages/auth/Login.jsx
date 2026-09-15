import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#060610',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '420px',
        padding: '40px',
        boxSizing: 'border-box'
      }}>
        <h2 style={{ fontSize: '32px', color: '#fff', marginBottom: '8px', fontWeight: '700', marginTop: 0 }}>
          Welcome Back
        </h2>
        <p style={{ color: '#8888a8', marginBottom: '32px', fontSize: '15px', marginTop: 0 }}>
          Sign in to continue watching
        </p>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#8888a8', marginBottom: '8px', fontWeight: '500' }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#111125',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '15px',
                boxSizing: 'border-box',
                outline: 'none'
              }}
            />
          </div>

          {/* Password Input */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#8888a8', marginBottom: '8px', fontWeight: '500' }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              style={{
                width: '100%',
                padding: '14px 16px',
                backgroundColor: '#111125',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '15px',
                boxSizing: 'border-box',
                outline: 'none'
              }}
            />
          </div>

          {/* Options Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#8888a8', cursor: 'pointer' }}>
              <input type="checkbox" style={{ accentColor: '#ff2d55', width: '16px', height: '16px' }} />
              Remember me
            </label>
            <a href="#" style={{ fontSize: '14px', color: '#ff2d55', textDecoration: 'none' }}>
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#ff2d55',
              color: '#fff',
              border: 'none',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(255, 45, 85, 0.3)'
            }}
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p style={{ textAlign: 'center', marginTop: '32px', fontSize: '14px', color: '#8888a8' }}>
          Don't have an account?{' '}
          <a href="#" style={{ color: '#ff2d55', textDecoration: 'none', fontWeight: '500' }}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}