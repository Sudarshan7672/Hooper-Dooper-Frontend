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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./components/Profile.jsx";
import AddressPage from "./components/AddressPage.jsx";
import FAQ from "./components/FAQ.jsx";
import Cart from "./components/Cart.jsx";
import OurVideo from "./components/OurVideo.jsx";

import ResetPassword from "./ResetPassword.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<App />} />
        <Route path="/products" element={<BalanceBike />} />
        <Route path="/our-story" element={<Story />} />
        <Route path="/user/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/ourvideo" element={<OurVideo />} />
        <Route
          path="/reset-password/:reset-token"
          element={<ResetPassword />}
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
