import { useMemo, useState } from "react";
import { ChevronDown, Filter, Play, Star, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./tvshows.css";

const TV_SHOW_CATALOG = [
  {
    id: "s-1",
    title: "The Last Kingdom",
    year: 2024,
    seasons: 5,
    episodes: 8,
    rating: 7.5,
    genre: "Drama",
    emoji: "🎬",
    tone: "coral",
  },
  {
    id: "s-2",
    title: "Code Black",
    year: 2023,
    seasons: 2,
    episodes: 10,
    rating: 7.6,
    genre: "Drama",
    emoji: "🎭",
    tone: "blue",
  },
  {
    id: "s-3",
    title: "Empire Falls",
    year: 2022,
    seasons: 3,
    episodes: 12,
    rating: 7.7,
    genre: "Drama",
    emoji: "🚀",
    tone: "purple",
  },
  {
    id: "s-4",
    title: "Night Watch",
    year: 2021,
    seasons: 4,
    episodes: 14,
    rating: 7.8,
    genre: "Reality",
    emoji: "🌊",
    tone: "pink",
  },
  {
    id: "s-5",
    title: "Silent Witness",
    year: 2024,
    seasons: 1,
    episodes: 16,
    rating: 7.9,
    genre: "Documentary",
    emoji: "🦁",
    tone: "teal",
  },
  {
    id: "s-6",
    title: "The Crown",
    year: 2023,
    seasons: 2,
    episodes: 18,
    rating: 8.0,
    genre: "Drama",
    emoji: "⚔️",
    tone: "orange",
  },
  {
    id: "s-7",
    title: "Dark Matter",
    year: 2022,
    seasons: 3,
    episodes: 20,
    rating: 8.1,
    genre: "Documentary",
    emoji: "🎪",
    tone: "green",
  },
  {
    id: "s-8",
    title: "Altered Carbon",
    year: 2021,
    seasons: 4,
    episodes: 22,
    rating: 8.2,
    genre: "Sci-Fi",
    emoji: "🏴‍☠️",
    tone: "red",
  },
  {
    id: "s-9",
    title: "Stranger Tides",
    year: 2024,
    seasons: 1,
    episodes: 24,
    rating: 8.3,
    genre: "Reality",
    emoji: "🦸",
    tone: "violet",
  },
  {
    id: "s-10",
    title: "The Expanse",
    year: 2023,
    seasons: 2,
    episodes: 26,
    rating: 8.4,
    genre: "Sci-Fi",
    emoji: "🧠",
    tone: "emerald",
  },
  {
    id: "s-11",
    title: "Breaking Point",
    year: 2022,
    seasons: 3,
    episodes: 28,
    rating: 8.5,
    genre: "Documentary",
    emoji: "🌋",
    tone: "rose",
  },
  {
    id: "s-12",
    title: "Lost City",
    year: 2021,
    seasons: 4,
    episodes: 30,
    rating: 8.6,
    genre: "Animation",
    emoji: "🏰",
    tone: "sky",
  },
  {
    id: "s-13",
    title: "Shadow Line",
    year: 2024,
    seasons: 1,
    episodes: 32,
    rating: 8.7,
    genre: "Reality",
    emoji: "🕵️",
    tone: "amber",
  },
  {
    id: "s-14",
    title: "Iron Fist",
    year: 2023,
    seasons: 2,
    episodes: 34,
    rating: 8.8,
    genre: "Drama",
    emoji: "🐉",
    tone: "brick",
  },
];

const GENRES = ["All", "Drama", "Reality", "Documentary", "Animation"];
const YEARS = ["All Years", "2024", "2023", "2022", "2021"];
const RATINGS = ["Any Rating", "8.5+", "8.0+", "7.5+"];

const EPISODE_NAMES = [
  "The Beginning",
  "New Horizons",
  "A Hidden Truth",
  "The Turning Point",
  "Into the Unknown",
  "The Final Choice",
  "Aftermath",
  "The Last Stand",
];

function buildEpisodes(show, season) {
  const count = Math.min(EPISODE_NAMES.length, Math.max(4, show.episodes - (season - 1) * 2));

  return Array.from({ length: count }, (_, index) => ({
    number: index + 1,
    title: EPISODE_NAMES[index],
    duration: `${42 + ((index + season) % 9)} min`,
  }));
}

function TVShowCard({ show, onEpisodes }) {
  const navigate = useNavigate();

  return (
    <article className="tv-card">
      <button
        type="button"
        className="tv-card-main"
        onClick={() => navigate(`/detail/${show.id}`)}
        aria-label={`Open ${show.title}`}
      >
        <div className={`tv-poster tv-poster-${show.tone}`}>
          <span className="tv-poster-emoji" aria-hidden="true">
            {show.emoji}
          </span>

          <div className="tv-poster-overlay">
            <span className="tv-play" aria-hidden="true">
              <Play size={18} fill="currentColor" />
            </span>
          </div>
        </div>

        <div className="tv-card-info">
          <h3>{show.title}</h3>
          <p>
            S{show.seasons} • {show.episodes} Ep
          </p>

          <div className="tv-rating">
            <Star size={12} fill="currentColor" />
            <span>{show.rating.toFixed(1)}</span>
          </div>
        </div>
      </button>

      <button
        type="button"
        className="tv-episodes-button"
        onClick={() => onEpisodes(show)}
      >
        Episodes
      </button>
    </article>
  );
}

function EpisodeModal({ show, season, setSeason, onClose }) {
  const episodes = buildEpisodes(show, season);

  return (
    <div className="episode-modal-backdrop" onMouseDown={onClose}>
      <section
        className="episode-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="episode-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="episode-modal-header">
          <div>
            <p className="episode-modal-label">TV SERIES</p>
            <h2 id="episode-modal-title">{show.title}</h2>
            <p className="episode-modal-meta">
              {show.genre} • {show.seasons} Seasons • {show.episodes} Episodes
            </p>
          </div>

          <button
            type="button"
            className="episode-close"
            onClick={onClose}
            aria-label="Close episodes"
          >
            <X size={18} />
          </button>
        </header>

        <div className="episode-season-row">
          <label htmlFor="season-select">Season</label>

          <div className="episode-season-select">
            <select
              id="season-select"
              value={season}
              onChange={(event) => setSeason(Number(event.target.value))}
            >
              {Array.from({ length: show.seasons }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  Season {index + 1}
                </option>
              ))}
            </select>
            <ChevronDown size={15} />
          </div>
        </div>

        <div className="episode-list">
          {episodes.map((episode) => (
            <div className="episode-row" key={episode.number}>
              <span className="episode-number">
                {String(episode.number).padStart(2, "0")}
              </span>

              <div className="episode-details">
                <h3>
                  Episode {episode.number}: {episode.title}
                </h3>
                <p>{episode.duration}</p>
              </div>

              <button
                type="button"
                className="episode-play"
                aria-label={`Play episode ${episode.number}`}
              >
                <Play size={14} fill="currentColor" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function TVShows() {
  const [genre, setGenre] = useState("All");
  const [year, setYear] = useState("All Years");
  const [rating, setRating] = useState("Any Rating");
  const [sort, setSort] = useState("default");
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(1);

  const filteredShows = useMemo(() => {
    const minimumRating =
      rating === "8.5+" ? 8.5 :
      rating === "8.0+" ? 8.0 :
      rating === "7.5+" ? 7.5 : 0;

    const result = TV_SHOW_CATALOG.filter((show) => {
      const matchesGenre = genre === "All" || show.genre === genre;
      const matchesYear =
        year === "All Years" || String(show.year) === year;
      const matchesRating = show.rating >= minimumRating;

      return matchesGenre && matchesYear && matchesRating;
    });

    switch (sort) {
      case "year-desc":
        return [...result].sort((a, b) => b.year - a.year);
      case "year-asc":
        return [...result].sort((a, b) => a.year - b.year);
      case "rating-desc":
        return [...result].sort((a, b) => b.rating - a.rating);
      case "rating-asc":
        return [...result].sort((a, b) => a.rating - b.rating);
      case "title":
        return [...result].sort((a, b) => a.title.localeCompare(b.title));
      default:
        return result;
    }
  }, [genre, year, rating, sort]);

  const clearFilters = () => {
    setGenre("All");
    setYear("All Years");
    setRating("Any Rating");
    setSort("default");
  };

  const openEpisodes = (show) => {
    setSelectedShow(show);
    setSelectedSeason(1);
  };

  return (
    <section className="tvshows-page">
      <header className="tvshows-heading">
        <h1>TV Shows</h1>
      </header>

      <div className="tvshows-toolbar">
        <div className="tv-genre-filters" aria-label="TV show genres">
          {GENRES.map((item) => (
            <button
              key={item}
              type="button"
              className={`tv-genre-button ${
                genre === item ? "active" : ""
              }`}
              onClick={() => setGenre(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="tv-catalog-controls">
          <label className="tv-select-control">
            <Filter size={14} />
            <select
              value={year}
              onChange={(event) => setYear(event.target.value)}
              aria-label="Filter by year"
            >
              {YEARS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <ChevronDown size={14} />
          </label>

          <label className="tv-select-control">
            <Star size={14} />
            <select
              value={rating}
              onChange={(event) => setRating(event.target.value)}
              aria-label="Filter by rating"
            >
              {RATINGS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <ChevronDown size={14} />
          </label>

          <label className="tv-select-control tv-sort-control">
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="Sort TV shows"
            >
              <option value="default">Sort: Default</option>
              <option value="year-desc">Newest</option>
              <option value="year-asc">Oldest</option>
              <option value="rating-desc">Highest Rated</option>
              <option value="rating-asc">Lowest Rated</option>
              <option value="title">Title A-Z</option>
            </select>
            <ChevronDown size={14} />
          </label>
        </div>
      </div>

      <div className="tv-result-meta">
        <span>
          {filteredShows.length}{" "}
          {filteredShows.length === 1 ? "show" : "shows"}
        </span>

        {(genre !== "All" ||
          year !== "All Years" ||
          rating !== "Any Rating" ||
          sort !== "default") && (
          <button
            type="button"
            className="tv-clear-filters"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        )}
      </div>

      {filteredShows.length > 0 ? (
        <div className="tvshows-grid">
          {filteredShows.map((show) => (
            <TVShowCard
              key={show.id}
              show={show}
              onEpisodes={openEpisodes}
            />
          ))}
        </div>
      ) : (
        <div className="tv-empty">
          <span>📺</span>
          <h2>No TV shows found</h2>
          <p>Try changing the genre, year, or rating filters.</p>
        </div>
      )}

      {selectedShow && (
        <EpisodeModal
          show={selectedShow}
          season={selectedSeason}
          setSeason={setSelectedSeason}
          onClose={() => setSelectedShow(null)}
        />
      )}
    </section>
  );
}
