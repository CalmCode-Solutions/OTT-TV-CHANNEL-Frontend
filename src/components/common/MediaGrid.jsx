import React from 'react';
import MediaCard from './MediaCard';

export default function MediaGrid({ items = [], title }) {
  return (
    <section style={{ margin: '24px 0' }}>
      {title && <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>{title}</h3>}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(190px, 1fr))',
        gap: '16px'
      }}>
        {items.map(item => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}