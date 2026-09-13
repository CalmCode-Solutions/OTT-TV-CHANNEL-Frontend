import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import heroImg from "../assets/hero.png";

// Direct playable video sources (HTML5 MP4 compatible)
const movies = [
  {
    id: "m-1",
    title: "THE LAST PULL",
    tone: "pink",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Dark_Knight_poster.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    id: "m-2",
    title: "CONSTRUCTED",
    tone: "purple",
    image: "https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    id: "m-3",
    title: "FRAME",
    tone: "orange",
    image: "https://upload.wikimedia.org/wikipedia/en/d/df/3_Idiots_poster.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "m-4",
    title: "FRACTURED",
    tone: "cyan",
    image: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dangal_Poster.jpg",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
];

export default function Home() {
  const navigate = useNavigate();

  
  const handlePlayMovie = (movieId, videoSrc) => {
    navigate(`/watch/${movieId}`, { state: { videoSrc } });
  };

  return (
    <div className="cinema-page">
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
             
              <button 
                className="watch-button"
                onClick={() => handlePlayMovie("hero-neon", "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")}
              >
                ▶ &nbsp; Watch Now
              </button>

              <button 
                className="info-button"
                onClick={() => navigate("/detail/hero-neon")}
              >
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
                key={movie.id}
                style={{
                  backgroundImage: `url(${movie.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer"
                }}
                onClick={() => handlePlayMovie(movie.id, movie.video)}
              >
                <div className="poster-glow" />
                <div className="movie-info">
                  <span>{movie.title}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePlayMovie(movie.id, movie.video);
                    }}
                  >
                    ▶
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}