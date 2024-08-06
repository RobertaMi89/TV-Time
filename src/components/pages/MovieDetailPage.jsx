import Calendar from "../atoms/icons/Calendar";
import Eye from "../atoms/icons/Eye";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEndpoints } from "../context/EndpointsContext";
import { labels } from "../data/labels";
const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isWatched, setIsWatched] = useState(false);
  const endpoints = useEndpoints();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(endpoints.getMovieDetails(id));
        const result = await response.json();
        setMovie(result);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id, endpoints]);

  const handleWatchToggle = () => {
    const watchedMovies =
      JSON.parse(localStorage.getItem("watchedMovies")) || [];
    if (isWatched) {
      const updateMovies = watchedMovies.filter((movieId) => movieId !== id);
      localStorage.setItem("watchedMovies", JSON.stringify(updateMovies));
    } else {
      watchedMovies.push(id);
      localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
    }
    setIsWatched(!isWatched);
  };

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full bg-gray-50">
      <div className="w-4/5 bg-white mx-auto px-4">
        {/* HERO SECTION */}
        <div className="relative w-full h-80 mb-4">
          <img
            src={`${endpoints.imageBaseUrl}${movie.backdrop_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4 text-white z-10">
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
            <p className="text-lg mb-2">
              <span>{movie.runtime} min</span> •
              <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
            </p>
          </div>
          <div className="flex items-center gap-5 text-lg w-full">
            <Calendar className="mr-2" /> {movie.release_date}
            <button
              onClick={handleWatchToggle}
              className={`flex items-center gap-2 ${
                isWatched ? "text-green-500" : "text-gray-500"
              }`}
            >
              <Eye
                className={`w-6 h-6 ${
                  isWatched ? "text-green-500" : "text-gray-500"
                }`}
              />
              {isWatched ? labels.visto : labels.nonVisto}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailPage;
