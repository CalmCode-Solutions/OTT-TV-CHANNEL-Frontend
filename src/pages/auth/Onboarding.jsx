import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tv, Globe, Download, ArrowRight } from 'lucide-react';

export default function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const slides = [
    { icon: <Tv size={64} color="#a78bfa" />, bg: 'linear-gradient(135deg,#1a0a3e,#2d1b69)', title: 'Unlimited Entertainment', desc: 'Access thousands of live TV channels, movies, and shows.' },
    { icon: <Globe size={64} color="#86efac" />, bg: 'linear-gradient(135deg,#1a2e0a,#3d6b2d)', title: 'Watch Anywhere', desc: 'Stream on your phone, tablet, computer, or smart TV.' },
    { icon: <Download size={64} color="#fca5a5" />, bg: 'linear-gradient(135deg,#2e0a1a,#6b2d3d)', title: 'Download & Go', desc: 'Save your favorite content offline for travel.' }
  ];

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else navigate('/login');
  };

  return (
    <div 
      id="onboarding" 
      className="page active" 
      style={{ 
        display: 'flex', 
        flexDirection: 'column',  
        alignItems: 'center',     
        justifyContent: 'center', 
        height: '100vh', 
        width: '100%',
        backgroundColor: 'var(--bg)' 
      }}
    >
      <div 
        className="onboard-slide active" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          maxWidth: '500px',
          padding: '40px'
        }}
      >
        <div className="onboard-illustration" style={{ background: slides[step].bg }}>
          {slides[step].icon}
        </div>
        <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px' }}>
          {slides[step].title}
        </h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '16px', lineHeight: '1.7', marginBottom: '40px' }}>
          {slides[step].desc}
        </p>
      </div>

      <div className="onboard-dots" style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
        {[0, 1, 2].map(i => (
          <div 
            key={i} 
            className={`dot ${step === i ? 'active' : ''}`} 
            onClick={() => setStep(i)} 
            style={{
              width: step === i ? '32px' : '10px',
              height: '10px',
              borderRadius: step === i ? '5px' : '50%',
              backgroundColor: step === i ? 'var(--accent)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
          />
        ))}
      </div>

     
      <div className="onboard-actions" style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '20px' }}>
        
        {/* Skip Button */}
        <button 
          onClick={() => navigate('/login')}
          style={{ 
            color: '#8888a8', 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer', 
            fontSize: '16px',
            padding: '12px 24px'
          }}
        >
          Skip
        </button>

        {/* Next / Get Started Button */}
        <button 
          onClick={handleNext}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            background: 'var(--accent, #ff2d55)', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '8px', 
            padding: '12px 28px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(255, 45, 85, 0.3)'
          }}
        >
          {step === 2 ? 'Get Started' : 'Next'} <ArrowRight size={18} />
        </button>
        
      </div>
    </div>
  );
}