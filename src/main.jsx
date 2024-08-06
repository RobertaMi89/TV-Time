import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DefaultLayout from "./components/pages/DefaultLayout.jsx";
import "./index.css";
import ErrorPage from "./components/pages/ErrorPage.jsx";
import Discover from "./components/pages/Discover.jsx";
import MovieDetailPage from "./components/pages/MovieDetailPage.jsx";
import SeriesDetailPage from "./components/pages/SeriesDetailPage.jsx";
import { EndpointsProvider } from "./components/context/EndpointsContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from "./components/context/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/discover",
        element: <Discover />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetailPage />,
      },
      {
        path: "/series/:id",
        element: <SeriesDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EndpointsProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </EndpointsProvider>
  </React.StrictMode>
);
