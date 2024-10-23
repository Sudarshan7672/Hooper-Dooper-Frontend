import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { resetToken } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    disablePageScroll();
    axios
      .post(
        `https://api.hooperdooper.in/auth/reset-password`,
        {
          resetToken: resetToken,
          password: password,
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
          "Password reset successful. Redirecting to login page in 3 seconds"
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (password === confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  }, [password, confirmPassword]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-md shadow-lg space-y-6"
      >
        <input
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          required
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {!passwordMatch && (
          <p className="text-red-500 text-sm">Passwords do not match</p>
        )}
        <button
          disabled={isLoading || !passwordMatch}
          type="submit"
          className="w-full py-2 bg-blue-600 disabled:bg-zinc-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
