import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';

export default function MediaCard({ item, wide = false }) {
  const cardWidth = wide ? '280px' : '190px';
  const cardHeight = wide ? '160px' : '270px';

  return (
    <Link to={`/detail/${item.id}`} style={{ textDecoration: 'none', display: 'inline-block' }}>
      <div style={{ width: cardWidth, margin: '8px', cursor: 'pointer', transition: 'transform 0.25s' }}
           onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
           onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
        
        <div style={{
          position: 'relative',
          width: '100%',
          height: cardHeight,
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          backgroundColor: 'var(--card)'
        }}>
          <img 
            src={wide ? (item.banner || item.poster) : item.poster} 
            alt={item.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          {item.isNew && (
            <span style={{
              position: 'absolute', top: 10, left: 10,
              backgroundColor: 'var(--accent)', color: '#fff',
              fontSize: '11px', fontWeight: 'bold', padding: '2px 8px',
              borderRadius: '4px', textTransform: 'uppercase'
            }}>New</span>
          )}

          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(6,6,16,0.8), transparent 60%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0, transition: 'opacity 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = 0}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '50%',
              backgroundColor: 'var(--accent)', display: 'flex',
              alignItems: 'center', justifyContent: 'center', color: '#fff'
            }}>
              <Play size={20} fill="#fff" style={{ marginLeft: 3 }} />
            </div>
          </div>
        </div>

        <div style={{ marginTop: '8px' }}>
          <h4 style={{ fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.title}</h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', fontSize: '12px', color: 'var(--text-dim)' }}>
            <span>{item.year}</span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--gold)' }}>
              <Star size={12} fill="var(--gold)" /> {item.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}