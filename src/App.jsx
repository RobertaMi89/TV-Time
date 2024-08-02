import { useState } from "react";
import "./App.css";
import BackgroundOverlay from "./components/atoms/BackgroundOverlay";
import Logo from "./components/atoms/Logo";
import Button from "./components/atoms/Button";
import IconCarousel from "./components/molecules/IconCarousel";
import ModalForm from "./components/molecules/ModalForm";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundOverlay />
      <div className="relative z-10 w-80 mx-auto flex-grow flex flex-col justify-between ">
        <Logo />
        <div>
          <IconCarousel />
        </div>
        {!isModalVisible && (
          <div className="flex justify-center">
            <Button
              text="Registrati/Accedi"
              className="bg-yellow-400 rounded-2xl px-4 py-2 mb-5"
              onClick={handleOpenModal}
            />
          </div>
        )}
      </div>
      <ModalForm isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
