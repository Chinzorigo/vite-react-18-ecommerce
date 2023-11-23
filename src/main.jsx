import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index.jsx";
import About from "./pages/about.jsx";
import Product from "./pages/product.jsx";
import Layout from "./components/Layout.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Index />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/product/:id",
//     element: <Product />,
//   },
//   {
//     path: "/*",
//     element: <h1>404 NOT FOUND</h1>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<h1>404 - Page NOT FOUND</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
