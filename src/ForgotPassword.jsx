import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { BASE_URL } from "./config/constants";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    disablePageScroll();
    axios
      .post(
        `${BASE_URL}/auth/forgot-password`,
        {
          email: email,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        enablePageScroll();
        setIsLoading(false);
        toast.success(
          "Password reset link sent to your email. Redirecting to login page in 3 seconds"
        );
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message || "Something went wrong");
        console.log(err);
        setIsLoading(false);
        enablePageScroll();
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-lg space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">Forgot Password</h1>
        <p className="text-gray-600">
          Enter your email address and we will send you a link to reset your
          password
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            disabled={isLoading}
            type="submit"
            className="w-full py-2 bg-blue-600 disabled:bg-zinc-700 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
