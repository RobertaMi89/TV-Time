import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { EndpointsProvider } from "./components/context/EndpointsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EndpointsProvider>
      <App />
    </EndpointsProvider>
  </React.StrictMode>
);
