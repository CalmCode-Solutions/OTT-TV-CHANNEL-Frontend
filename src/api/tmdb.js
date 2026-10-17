const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Get popular movies
export async function getPopularMovies() {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movies from TMDB');
  }

  const data = await response.json();

  return data.results;
}

// Get movie genres
export async function getMovieGenres() {
  const response = await fetch(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch movie genres from TMDB');
  }

  const data = await response.json();

  return data.genres;
}

// Get popular TV shows
export async function getPopularTVShows() {
  const response = await fetch(
    `${TMDB_BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch TV shows from TMDB');
  }

  const data = await response.json();

  return data.results;
}

// Get TV genres
export async function getTVGenres() {
  const response = await fetch(
    `${TMDB_BASE_URL}/genre/tv/list?api_key=${TMDB_API_KEY}&language=en-US`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch TV genres from TMDB');
  }

  const data = await response.json();

  return data.genres;
}

// Convert TMDB poster path into a complete image URL
export function getPosterUrl(posterPath) {
  if (!posterPath) {
    return null;
  }

  return `${TMDB_IMAGE_BASE_URL}${posterPath}`;
}
