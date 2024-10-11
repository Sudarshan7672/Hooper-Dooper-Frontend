import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import BalanceBike from "./BalanceBike";
import "./Roboto.css";
import Footer from "./Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<BalanceBike />} />
        <Route path="/our-story" element={<BalanceBike />} />
        <Route path="/cart" element={<BalanceBike />} />
        <Route path="/profile" element={<BalanceBike />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
