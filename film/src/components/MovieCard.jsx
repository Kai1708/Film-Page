import "../css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";

export const MovieCard = ({movie}) => { 
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
  const favorite = isFavorite(movie.id)

  function onFavoriteClick (e) {
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }

  return (
    <div>
      <div className="movie-card">
        {/* A standard card including: poster, description, starring */}
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>

        <div className="movie-overlay">
          <button className= {`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
            ♡
          </button>
        </div>
      </div>
      <div className="movie-info"> 
          <h3> {movie.title} </h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

