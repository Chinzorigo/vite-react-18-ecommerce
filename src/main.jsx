import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./pages/about.jsx";
import Product from "./pages/product.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/*",
    element: <h1>404 NOT FOUND</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
