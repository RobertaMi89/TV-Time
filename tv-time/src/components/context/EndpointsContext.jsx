import React, { createContext, useContext } from "react";
import { API_KEY } from "../keys.js";

const EndpointsContext = createContext();

export const EndpointsProvider = ({ children }) => {
  const endpoints = {
    BASE_URL: "https://api.themoviedb.org/3",
    imageBaseUrl: `https://image.tmdb.org/t/p/w500`,
    getPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    getTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    getUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
    getMovieDetails: (id) => `https://api.themoviedb.org/3/movie/${id}`,
  };

  return (
    <EndpointsContext.Provider value={endpoints}>
      {children}
    </EndpointsContext.Provider>
  );
};

export const useEndpoints = () => useContext(EndpointsContext);
