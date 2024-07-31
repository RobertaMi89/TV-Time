import React from "react";
import "./App.css";
import BackgroundOverlay from "./components/atoms/BackgroundOverlay";
import Logo from "./components/atoms/Logo";
import Button from "./components/atoms/Button";
import IconCarousel from "./components/molecules/IconCarousel";

function App() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundOverlay />
      <div className="relative z-10 w-80 mx-auto flex-grow flex flex-col justify-between mt-10">
        <Logo />
        <div>
          <IconCarousel />
        </div>
        <div className="flex justify-center mb-10">
          <Button
            text="registrati/accedi"
            className="bg-yellow-400 font-bold uppercase rounded-2xl px-4 py-2"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
