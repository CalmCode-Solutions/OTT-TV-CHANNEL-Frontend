import { useEffect, useMemo, useState } from "react";
import { getPopularMovies, getPosterUrl } from "../api/tmdb";
import { ChevronDown, Filter, Star } from "lucide-react";
import { Link } from "react-router-dom";
import "./movies.css";

const GENRES = [
  "All",
  "Action",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Horror",
  "Romance",
];

const YEARS = [
  "All Years",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
];

const RATINGS = [
  "Any Rating",
  "8.0+",
  "7.5+",
  "7.0+",
];

// TMDB genre IDs
const GENRE_IDS = {
  Action: 28,
  Comedy: 35,
  Drama: 18,
  "Sci-Fi": 878,
  Horror: 27,
  Romance: 10749,
};

function MovieCard({ movie }) {
  return (
    <Link
      to={`/detail/${movie.id}`}
      className="catalog-card-link"
    >
      <article className="catalog-card">
        <div className="catalog-poster">
          <img
            src={movie.poster}
            alt={movie.title}
            className="catalog-poster-image"
          />

          <div className="catalog-poster-overlay">
            <span className="catalog-play">▶</span>
          </div>
        </div>

        <div className="catalog-card-info">
          <h3>{movie.title}</h3>

          <p>
            {movie.year} • {movie.duration}
          </p>

          <div className="catalog-rating">
            <Star size={12} fill="currentColor" />
            <span>{movie.rating.toFixed(1)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Movies() {
  const [genre, setGenre] = useState("All");
  const [year, setYear] = useState("All Years");
  const [rating, setRating] = useState("Any Rating");
  const [sort, setSort] = useState("default");

  const [tmdbMovies, setTmdbMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load movies from TMDB
  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        setError("");

        const movies = await getPopularMovies();

        const formattedMovies = movies
          .filter((movie) => movie.poster_path)
          .map((movie) => ({
            id: movie.id,
            title: movie.title,
            year: movie.release_date
              ? movie.release_date.substring(0, 4)
              : "N/A",
            rating: movie.vote_average
              ? Number(movie.vote_average.toFixed(1))
              : 0,
            genreIds: movie.genre_ids || [],
            poster: getPosterUrl(movie.poster_path),
            duration: "N/A",
          }));

        console.log(
          "FORMATTED TMDB MOVIES:",
          formattedMovies
        );

        setTmdbMovies(formattedMovies);
      } catch (err) {
        console.error("TMDB MOVIES ERROR:", err);
        setError("Failed to load movies from TMDB.");
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  // Filter and sort TMDB movies
  const filteredMovies = useMemo(() => {
    const minimumRating =
      rating === "8.0+"
        ? 8.0
        : rating === "7.5+"
          ? 7.5
          : rating === "7.0+"
            ? 7.0
            : 0;

    const result = tmdbMovies.filter((movie) => {
      const matchesGenre =
        genre === "All" ||
        movie.genreIds.includes(GENRE_IDS[genre]);

      const matchesYear =
        year === "All Years" ||
        String(movie.year) === year;

      const matchesRating =
        movie.rating >= minimumRating;

      return (
        matchesGenre &&
        matchesYear &&
        matchesRating
      );
    });

    switch (sort) {
      case "year-desc":
        return [...result].sort(
          (a, b) => Number(b.year) - Number(a.year)
        );

      case "year-asc":
        return [...result].sort(
          (a, b) => Number(a.year) - Number(b.year)
        );

      case "rating-desc":
        return [...result].sort(
          (a, b) => b.rating - a.rating
        );

      case "rating-asc":
        return [...result].sort(
          (a, b) => a.rating - b.rating
        );

      case "title":
        return [...result].sort(
          (a, b) =>
            a.title.localeCompare(b.title)
        );

      default:
        return result;
    }
  }, [
    tmdbMovies,
    genre,
    year,
    rating,
    sort,
  ]);

  const clearFilters = () => {
    setGenre("All");
    setYear("All Years");
    setRating("Any Rating");
    setSort("default");
  };

  return (
    <section className="movies-page">
      <header className="movies-heading">
        <h1>Movies</h1>
      </header>

      <div className="movies-toolbar">
        <div
          className="genre-filters"
          aria-label="Movie genres"
        >
          {GENRES.map((item) => (
            <button
              key={item}
              type="button"
              className={`genre-button ${
                genre === item ? "active" : ""
              }`}
              onClick={() => setGenre(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="catalog-controls">
          <label className="select-control">
            <Filter size={14} />

            <select
              value={year}
              onChange={(e) =>
                setYear(e.target.value)
              }
            >
              {YEARS.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown size={14} />
          </label>

          <label className="select-control">
            <Star size={14} />

            <select
              value={rating}
              onChange={(e) =>
                setRating(e.target.value)
              }
            >
              {RATINGS.map((item) => (
                <option key={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown size={14} />
          </label>

          <label className="select-control sort-control">
            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >
              <option value="default">
                Sort: Default
              </option>

              <option value="year-desc">
                Newest
              </option>

              <option value="year-asc">
                Oldest
              </option>

              <option value="rating-desc">
                Highest Rated
              </option>

              <option value="rating-asc">
                Lowest Rated
              </option>

              <option value="title">
                Title A-Z
              </option>
            </select>

            <ChevronDown size={14} />
          </label>
        </div>
      </div>

      <div className="movies-result-meta">
        <span>
          {filteredMovies.length}{" "}
          {filteredMovies.length === 1
            ? "movie"
            : "movies"}
        </span>

        {(genre !== "All" ||
          year !== "All Years" ||
          rating !== "Any Rating" ||
          sort !== "default") && (
          <button
            type="button"
            className="clear-filters"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        )}
      </div>

      {loading && (
        <div className="empty-movies">
          <span>🎬</span>
          <h2>Loading movies...</h2>
          <p>
            Getting the latest movies from TMDB.
          </p>
        </div>
      )}

      {error && !loading && (
        <div className="empty-movies">
          <span>⚠️</span>
          <h2>Unable to load movies</h2>
          <p>{error}</p>
        </div>
      )}

      {!loading &&
        !error &&
        filteredMovies.length > 0 && (
          <div className="movies-grid">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        )}

      {!loading &&
        !error &&
        filteredMovies.length === 0 && (
          <div className="empty-movies">
            <span>🎬</span>
            <h2>No movies found</h2>
            <p>
              Try changing the genre, year, or
              rating filters.
            </p>
          </div>
        )}
    </section>
  );
}