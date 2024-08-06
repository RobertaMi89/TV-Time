import React, { createContext, useContext } from "react";
import { API_KEY } from "../keys.js";
import { enumEndpoints } from "../data/endpointsEnum.js";

const EndpointsContext = createContext();

export const EndpointsProvider = ({ children }) => {
  const endpoints = {
    BASE_URL: "https://api.themoviedb.org/3",
    imageBaseUrl: `https://image.tmdb.org/t/p/w500`,
    [enumEndpoints.GET_POPULAR_MOVIES]: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
    [enumEndpoints.GET_TOP_RATED_MOVIES]: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
    [enumEndpoints.GET_UPCOMING_MOVIES]: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`,
    [enumEndpoints.GET_MOVIE_DETAILS]: (id) =>
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`,
    [enumEndpoints.GET_SIMILAR_SERIES]: (id) =>
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`,
    [enumEndpoints.GET_RECOMMENDED_SERIES]: (id) =>
      `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`,
  };

  return (
    <EndpointsContext.Provider value={endpoints}>
      {children}
    </EndpointsContext.Provider>
  );
};

export const useEndpoints = () => useContext(EndpointsContext);
