import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEndpoints } from "../context/EndpointsContext";
import { useWatchlist } from "../context/WatchListContext";
import Add from "../atoms/icons/Add";
import Check from "../atoms/icons/Check";

const Card = ({ endpoint }) => {
  const [data, setData] = useState([]);
  const endpoints = useEndpoints();
  const { addToWatchlist, removeFromWatchlist, isInWatchlist } = useWatchlist();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoints[endpoint]);
        const result = await response.json();
        setData(result.results.slice(0, 5));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [endpoint, endpoints]);

  const handleCardClick = (id, mediaType) => {
    if (mediaType === "movie") {
      navigate(`/movie/${id}`);
    } else if (mediaType === "series") {
      navigate(`/series/${id}`);
    }
  };

  return (
    <div className="flex gap-2">
      {data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="w-32 h-44 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative cursor-pointer"
            onClick={() => handleCardClick(item.id)}
          >
            <img
              src={`${endpoints.imageBaseUrl}${item.poster_path}`}
              alt={item.title || item.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <div
              className="absolute top-2 right-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (isInWatchlist(item.id)) {
                    removeFromWatchlist(item.id);
                  } else {
                    addToWatchlist(item);
                  }
                }}
              >
                {isInWatchlist(item.id) ? (
                  <Check className="text-black bg-green-500 rounded-full bg-opacity-70" />
                ) : (
                  <Add className="text-yellow-400 bg-black rounded-full bg-opacity-70" />
                )}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No items found
        </p>
      )}
    </div>
  );
};

export default Card;
