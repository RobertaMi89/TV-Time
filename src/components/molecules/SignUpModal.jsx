import React, { useState } from "react";
import { labels } from "../data/labels";

const SignupModal = ({ isVisible, onClose, onSignupSuccess }) => {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Logica di registrazione (simulata)
    // In realtà dovresti inviare i dati al server e gestire la risposta
    onSignupSuccess(); // Torna al login dopo la registrazione
  };

  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-black rounded-lg shadow-xl dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-white">{labels.signUp}</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div>
            <label
              htmlFor="nome"
              className="block mb-2 text-sm font-medium text-white"
            >
              {labels.nome}
            </label>
            <input
              type="nome"
              name="nome"
              id="nome"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
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
            {labels.signUp}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
