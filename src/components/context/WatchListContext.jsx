import React, { createContext, useContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (item) => {
    setWatchlist((prevList) => [...prevList, item]);
  };

  const removeFromWatchlist = (itemId) => {
    setWatchlist((prevList) => prevList.filter((item) => item.id !== itemId));
  };

  const isInWatchlist = (itemId) => {
    return watchlist.some((item) => item.id === itemId);
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist, isInWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchlist = () => useContext(WatchlistContext);
