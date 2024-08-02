import React, { useState, useEffect } from "react";
import Like from "../atoms/icons/Like";
import Heart from "../atoms/icons/Heart";
import Calendar from "../atoms/icons/Calendar";
import Check from "../atoms/icons/Check";
import Bell from "../atoms/icons/Bell";

const icons = [
  {
    component: (
      <Like className="text-white bg-black rounded-full w-14 h-14 p-2" />
    ),
    text: "Contribuisci a rendere le tue serie preferite ancora miglioriTieni traccia dei tuoi film e delle tue serie TV",
  },
  {
    component: (
      <Heart className="text-white bg-black rounded-full w-14 h-14 p-2" />
    ),
    text: "Scopri la tua nuova serie preferita",
  },
  {
    component: (
      <Calendar className="text-white bg-black rounded-full w-14 h-14 p-2" />
    ),
    text: "Ricorda il punto in cui avevi interrotto la visione",
  },
  {
    component: (
      <Check className="text-white bg-black rounded-full w-14 h-14 p-2" />
    ),
    text: "Tieni traccia dei tuoi film e delle serie tv",
  },
  {
    component: (
      <Bell className="text-white bg-black rounded-full w-14 h-14 p-2" />
    ),
    text: "Non perderti nemmeno un episodio",
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
