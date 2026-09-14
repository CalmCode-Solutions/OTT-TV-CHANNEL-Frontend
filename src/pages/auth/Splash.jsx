import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play } from 'lucide-react';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/onboarding'), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div id="splash" className="page active" style={{ display: 'flex', height: '100vh' }}>
      <div className="splash-logo">
        <div className="logo-icon"><Play size={64} color="var(--accent)" /></div>
        <h1>StreamVault</h1>
        <p>Premium IPTV Experience</p>
      </div>
      <div className="splash-loader"></div>
    </div>
  );
}