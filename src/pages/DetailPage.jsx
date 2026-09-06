import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock movie data
  const movie = {
    title: "Stranger Things",
    banner: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    synopsis: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    year: "2026",
    rating: "16+",
    duration: "4 Seasons",
    cast: [
      { name: "Millie Bobby Brown", role: "Eleven" },
      { name: "Finn Wolfhard", role: "Mike Wheeler" },
      { name: "Winona Ryder", role: "Joyce Byers" },
      { name: "David Harbour", role: "Jim Hopper" }
    ]
  };

  const handlePlayNow = () => {
    // Watch Page එකට navigate වීම
    navigate(`/watch/${id || 1}`);
  };

  return (
    <div style={{ color: 'white', backgroundColor: '#141414', minHeight: '100vh', padding: '20px' }}>
      {/* Banner Section */}
      <div 
        style={{ 
          backgroundImage: `linear-gradient(to top, #141414, transparent), url(${movie.banner})`, 
          height: '400px', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          borderRadius: '12px', 
          display: 'flex', 
          alignItems: 'flex-end', 
          padding: '30px' 
        }}
      >
        <div>
          <h1 style={{ fontSize: '3rem', margin: '0 0 10px 0' }}>{movie.title}</h1>
          <p style={{ color: '#aaa', margin: '0 0 20px 0' }}>
            {movie.year} | <span style={{ border: '1px solid #aaa', padding: '2px 6px', borderRadius: '4px' }}>{movie.rating}</span> | {movie.duration}
          </p>
          <button 
            onClick={handlePlayNow} 
            style={{ 
              padding: '12px 28px', 
              fontSize: '1.2rem', 
              fontWeight: 'bold',
              backgroundColor: '#e50914', 
              color: 'white', 
              border: 'none', 
              borderRadius: '6px', 
              cursor: 'pointer' 
            }}
          >
            ▶ Play Now
          </button>
        </div>
      </div>

      {/* Synopsis Section */}
      <div style={{ marginTop: '30px', maxWidth: '800px' }}>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '8px' }}>Synopsis</h2>
        <p style={{ lineHeight: '1.6', color: '#ccc' }}>{movie.synopsis}</p>
      </div>

      {/* Cast Grid */}
      <div style={{ marginTop: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '8px' }}>Cast</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '20px', marginTop: '15px' }}>
          {movie.cast.map((actor, idx) => (
            <div key={idx} style={{ backgroundColor: '#222', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
              <strong style={{ display: 'block', fontSize: '1rem' }}>{actor.name}</strong>
              <span style={{ fontSize: '0.85rem', color: '#888' }}>{actor.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;