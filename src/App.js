import { useState } from "react";

import "./styles.css";
import movies from "./movies-db";

export default function App() {
  const movieGeners = Object.keys(movies);

  const [activeGeners, setActiveGeners] = useState(movieGeners[0]);
  const [movieListPreview, setMovieListPreview] = useState(
    movies[movieGeners[0]]
  );

  const onMovieGenerClickHandler = (gener) => {
    setActiveGeners(gener);
    setMovieListPreview(movies[gener]);
  };

  const geners = movieGeners.map((genre) => (
    <button
      key={genre}
      className={activeGeners === genre ? "active" : ""}
      onClick={() => onMovieGenerClickHandler(genre)}
    >
      {genre}
    </button>
  ));

  const movieList = movieListPreview.map((movie) => (
    <div className="movie" key={movie.name}>
      <h3>{movie.name}</h3>
      <small>Rating: {movie.rating}</small>
    </div>
  ));

  return (
    <div className="App">
      <h1>
        Movie Recommendations
        <span role="img" aria-label="pushpin emoji">
          📍
        </span>
      </h1>
      {geners}

      <h2>{movieList}</h2>
    </div>
  );
}
