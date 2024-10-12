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
import Story from "./Story.jsx";
import LoginPage from "./components/LoginPage.jsx";
import SignupPage from "./components/SignupPage.jsx";
import Profile from "./components/Profile.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />

      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<BalanceBike />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/cart" element={<BalanceBike />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
