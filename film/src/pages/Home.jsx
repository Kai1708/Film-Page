import { MovieCard } from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../service/api";
import "../css/Home.css";

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Function calls > update states > states update page
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);
  // () => {} is the changing value IF [] is changed, else: render ONCE
  // This won't interfere with the state change

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return {/*trim remove spaces */}
    if (loading) return
    
    setLoading(true)

    try {
      const searchResults = await searchMovies (searchQuery)
      setMovies (searchResults)
      setError (null)
    } catch (err) {
      console.log (err)
      setError("Failed to search movies :(")
    } finally {
      setLoading(false)
    }

  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

        {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {/* This is to render the movies accordingly to what we search */}
          {movies.map((movie) => (
            // Assigned distinctive keys to each movie
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
