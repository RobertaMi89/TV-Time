import React from "react";

const ModalForm = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-black rounded-lg shadow-xl dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-white">Sign in</h2>
        <form className="mt-8 space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="font-medium text-gray-500 dark:text-gray-400"
              >
                Remember this device
              </label>
            </div>
            <a
              href="#"
              className="ml-auto text-sm font-medium text-yellow-600 hover:underline"
            >
              Lost Password?
            </a>
          </div>
          <button
            onClick={onClose}
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-yellow-600 rounded-lg hover:bg-yellow-800 sm:w-auto"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-600">
            Not registered yet?
            <a href="#" className="text-yellow-600 hover:underline">
              Create account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
