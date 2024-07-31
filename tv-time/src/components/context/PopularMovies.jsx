import React, { useEffect, useState } from "react";
import { useEndpoints } from "./EndpointsContext";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const { getPopularMovies, imageBaseUrl } = useEndpoints();

  useEffect(() => {
    fetch(getPopularMovies)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching popular movies:", error));
  }, [getPopularMovies]);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul className="flex flex-wrap">
        {movies.map((movie) => (
          <li key={movie.id} className="m-4">
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className="w-32 h-48 object-cover"
            />
            <p>{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
