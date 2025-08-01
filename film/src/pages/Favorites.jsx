import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import { MovieCard } from "../components/MovieCard";
    
export const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div>
        <h2 className="favorites">Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorite movies yet</h2>
      <p>Start adding movies and they will appear here</p>
    </div>
  );
};
