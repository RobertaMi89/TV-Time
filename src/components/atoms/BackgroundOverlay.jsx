import React, { useState, useEffect } from "react";
import { useEndpoints } from "../context/EndpointsContext";

function BackgroundOverlay() {
  const [movies, setMovies] = useState([]);
  const { getPopularMovies, imageBaseUrl } = useEndpoints();

  useEffect(() => {
    fetch(getPopularMovies)
      .then((resp) => resp.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, [getPopularMovies]);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-5 gap-0 w-full h-full">
        {movies.map((movie) => (
          <div key={movie.id} className="relative w-full h-full">
            <img
              src={`${imageBaseUrl}${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black opacity-80"></div>
    </div>
  );
}

export default BackgroundOverlay;
