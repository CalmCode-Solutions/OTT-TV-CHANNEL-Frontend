import React from 'react';

export default function Footer() {
  return (
    <footer style={{
      marginTop: 'auto',
      padding: '24px 32px',
      borderTop: '1px solid var(--border)',
      color: 'var(--text-muted)',
      fontSize: '13px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <p>© 2026 StreamVault OTT. All rights reserved.</p>
      <div style={{ display: 'flex', gap: '16px' }}>
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
      </div>
    </footer>
  );
}