import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { labels } from "../data/labels";
import { useUser } from "../context/UserContext";

const LoginModal = ({
  isVisible,
  onClose,
  onLoginSuccess,
  onSwitchToSignup,
}) => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    setUser(userData);
    onLoginSuccess();
    navigate("/discover");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-black rounded-lg shadow-xl dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-white">{labels.logIn}</h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              {labels.email}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              {labels.password}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-yellow-800 sm:w-auto"
          >
            {labels.logInAccount}
          </button>
          <div className="text-sm font-medium text-gray-700">
            {labels.notSignUp}
            <button
              onClick={onSwitchToSignup} // Passa la funzione per cambiare la modale
              className="text-yellow-600 hover:underline"
            >
              {labels.createAccount}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
