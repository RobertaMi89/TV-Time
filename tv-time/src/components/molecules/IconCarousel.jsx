import React, { useState, useEffect } from "react";
import Like from "../atoms/icons/Like";
import Heart from "../atoms/icons/Heart";

const icons = [
  {
    component: (
      <Like className="text-white bg-black rounded-full w-10 h-10 p-1" />
    ),
    text: "Like",
  },
  {
    component: (
      <Heart className="text-white bg-black rounded-full w-10 h-10 p-1" />
    ),
    text: "Another Icon",
  },
  // Aggiungi altre icone e testo qui
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
    }, 3000); // Tempo totale tra i cambi di icona

    return () => clearInterval(interval); // Pulisce l'intervallo quando il componente viene smontato
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        className={`transition-opacity duration-1000 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        {icons[currentIndex].component}
        <span className="mt-2 text-white">{icons[currentIndex].text}</span>
      </div>
    </div>
  );
};

export default IconCarousel;
