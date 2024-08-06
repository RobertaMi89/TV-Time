import React, { useState, useEffect } from "react";
import Like from "../atoms/icons/Like";
import Heart from "../atoms/icons/Heart";
import Calendar from "../atoms/icons/Calendar";
import Check from "../atoms/icons/Check";
import Bell from "../atoms/icons/Bell";
import { labels } from "../data/labels";

const icons = [
  {
    component: (
      <Like className="text-white bg-black rounded-full w-14 h-14 p-2" />
    ),
    text: labels.like,
  },
  {
    component: (
      <Heart className="text-white bg-black rounded-full w-14 h-14 p-2" />
    ),
    text: labels.heart,
  },
  {
    component: (
      <Calendar className="text-white bg-black rounded-full w-14 h-14 p-2" />
    ),
    text: labels.calendar,
  },
  {
    component: (
      <Check className="text-white bg-black rounded-full w-14 h-14 p-2" />
    ),
    text: labels.check,
  },
  {
    component: (
      <Bell className="text-white bg-black rounded-full w-14 h-14 p-2" />
    ),
    text: labels.bell,
  },
];

const IconCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % icons.length);
        setFading(false);
      }, 1000); // Durata della transizione
    }, 4000); // Tempo totale tra i cambi di icona

    return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
  }, []);

  return (
    <div className="flex flex-col items-center h-full justify-center">
      <div
        className={`flex flex-col items-center transition-opacity duration-1000 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        {icons[currentIndex].component}
        <span className="mt-2 text-white text-center">
          {icons[currentIndex].text}
        </span>
      </div>
    </div>
  );
};

export default IconCarousel;
