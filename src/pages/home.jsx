import "./home.css";

import heroImg from "../assets/hero.png";

const movies = [
  {
    title: "THE LAST PULL",
    tone: "pink",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Dark_Knight_poster.jpg",
    video: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
  {
    title: "CONSTRUCTED",
    tone: "purple",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
    video: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    title: "FRAME",
    tone: "orange",
    image: "https://upload.wikimedia.org/wikipedia/en/d/df/3_Idiots_poster.jpg",
    video: "https://www.youtube.com/watch?v=K0eDlFX9GMc",
  },
  {
    title: "FRACTURED",
    tone: "cyan",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dangal_Poster.jpg",
    video: "https://www.youtube.com/watch?v=x_7YlGv9u1g",
  },
];

function Home() {
  return (
    <div className="cinema-page">

      {/* ================= SIDEBAR ================= */}
      <aside className="cinema-sidebar">

        <div className="brand">
          <span className="brand-icon">◈</span>
          CINEMA
        </div>

        <nav className="side-nav">

          <button className="nav-item active">
            <span>⌂</span>
            Home
          </button>

          <button className="nav-item">
            <span>▣</span>
            Live TV
          </button>

          <button className="nav-item">
            <span>▤</span>
            Movies
          </button>

          <button className="nav-item">
            <span>♡</span>
            My List
          </button>

          <button className="nav-item">
            <span>◷</span>
            History
          </button>

          <button className="nav-item">
            <span>⚙</span>
            Settings
          </button>

        </nav>
      </aside>


      {/* ================= MAIN ================= */}
      <main className="cinema-main">

        {/* ================= HERO ================= */}
        <section
          className="cinema-hero"
          style={{ backgroundImage: `url(${heroImg})` }}
        >

          <div className="hero-dark"></div>

          <div className="hero-content">

            <div className="hero-meta">
              <span>● LIVE PREMIERE</span>
              <span>◉ NEW MATCH</span>
              <span>2024</span>
            </div>

            <h1>NEON SYNDICATE</h1>

            <p>
              In a city where memories are currency, a rogue detective
              uncovers a conspiracy that reaches the highest echelons
              of the synthetic elite. Trust no one in the neon-soaked
              streets of New Angeles.
            </p>

            <div className="hero-actions">

              <button className="watch-button">
                ▶ &nbsp; Watch Now
              </button>

              <button className="info-button">
                ⓘ &nbsp; More Info
              </button>

            </div>

            <div className="genre-list">

              <span>All Genres</span>
              <span>Sci-Fi</span>
              <span>Cyber Punk</span>
              <span>Action Thriller</span>
              <span>Psychological</span>
              <span>Dystopian</span>
              <span>Crime</span>

            </div>

          </div>
        </section>


        {/* ================= TRENDING ================= */}
        <section className="trending-section">

          <div className="trending-header">

            <h2>Trending Now</h2>

            <div className="slide-buttons">
              <button>‹</button>
              <button>›</button>
            </div>

          </div>


          <div className="movies-container">

            {movies.map((movie) => (

              <div
                className={`movie poster-${movie.tone}`}
                key={movie.title}
                style={{
                  backgroundImage: `url(${movie.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="poster-glow" />
                <div className="movie-info">
                  <span>{movie.title}</span>
                  <button
                    type="button"
                    onClick={() => window.open(movie.video, "_blank", "noopener,noreferrer")}
                  >
                    ▶
                  </button>
                </div>
              </div>

            ))}

          </div>

        </section>


        {/* ================= FOOTER ================= */}
        <footer className="cinema-footer">

          <div className="footer-description">

            <h3>CINEMA</h3>

            <p>
              Discover cinematic experiences
              beyond ordinary storytelling.
            </p>

          </div>


          <div className="footer-links">

            <h4>NAVIGATION</h4>

            <a href="#">Home</a>
            <a href="#">Movies</a>
            <a href="#">TV Shows</a>

          </div>


          <div className="footer-links">

            <h4>SUPPORT</h4>

            <a href="#">FAQ</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>

          </div>


          <div className="footer-social">

            <h4>SOCIAL</h4>

            <div className="social-icons">
              <span>◎</span>
              <span>◉</span>
              <span>◌</span>
            </div>

          </div>


          <div className="copyright">
            © 2026 Cinema. All rights reserved.
          </div>

        </footer>

      </main>

    </div>
  );
}

export default Home;