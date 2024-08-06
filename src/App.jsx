import React, { useState } from "react";
import BackgroundOverlay from "./components/atoms/BackgroundOverlay";
import Logo from "./components/atoms/Logo";
import Button from "./components/atoms/Button";
import IconCarousel from "./components/molecules/IconCarousel";
import LoginModal from "./components/molecules/LoginModal";
import SignupModal from "./components/molecules/SignUpModal";
import { labels } from "./components/data/labels";
import { useNavigate } from "react-router-dom";

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const navigate = useNavigate();

  const handleOpenLoginModal = () => {
    setActiveModal("login");
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleLoginSuccess = () => {
    handleCloseModal();
    navigate("/discover"); // Reindirizza alla pagina Discover dopo il login
  };

  const handleSignupSuccess = () => {
    setActiveModal("login"); // Dopo la registrazione, torna alla modale di login
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundOverlay />
      <div className="relative z-10 w-80 mx-auto flex-grow flex flex-col justify-between">
        <Logo />
        <div>
          <IconCarousel />
        </div>
        {!activeModal && (
          <div className="flex justify-center">
            <Button
              text={labels.signUpLogIn}
              className="bg-yellow-400 rounded-2xl px-4 py-2 mb-5"
              onClick={handleOpenLoginModal}
            />
          </div>
        )}
      </div>
      {activeModal === "login" && (
        <LoginModal
          isVisible={true}
          onClose={handleCloseModal}
          onLoginSuccess={handleLoginSuccess}
          onSwitchToSignup={() => setActiveModal("signup")}
        />
      )}
      {activeModal === "signup" && (
        <SignupModal
          isVisible={true}
          onClose={handleCloseModal}
          onSignupSuccess={handleSignupSuccess}
        />
      )}
    </div>
  );
}

export default App;
