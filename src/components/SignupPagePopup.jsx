import React, { useState } from "react";
import axios from "axios";
import googleicon from "../assets/googleicon.png";
import HooperDooper_logo from "../assets/HooperDooper_logo.png";
import cycle from "../assets/cycle.png";
import Modal from "./Modal"; // Adjust the path as needed
// import LoginPagePopup from "./LoginPagePopup";
// import Link from "react-router-dom";

export default function SignupPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://88.222.214.14:5000/auth/v1/register", {
        fullName,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/login";
      })
      .catch((err) => {
        console.log(err);
        setError("Signup failed. Please try again.");
      });
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-2 py-1/2 rounded-sm"
      >
        Sign Up
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex justify-center items-center">
            <p className="text-2xl font-bold">Sign Up</p>
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="mt-[20px]">
            <label htmlFor="fullName" className="block">
              Name
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-md border-2 h-[35px]"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mt-[20px]">
            <label htmlFor="email" className="block">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border-2 h-[35px]"
              placeholder="Enter Your Email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border-2 h-[35px]"
              placeholder="Set Your Password"
            />
          </div>
          <div className="w-full mt-[20px] flex justify-center">
            <button
              type="submit"
              className="h-[30px] w-[100px] bg-black text-white rounded-2xl flex justify-center items-center"
            >
              <p>Sign Up</p>
            </button>
          </div>
          <div className="w-full flex justify-center mt-[5px]">
            <p>OR</p>
          </div>
          <div className="flex h-[40px] mt-[5px] bg-blue-500 w-full rounded-lg justify-center items-center cursor-pointer">
            <img
              src={googleicon}
              className="h-[22px] w-[22px]"
              alt="Google Icon"
            />
            <p className="text-white ml-[10px] font-sans">
              Continue With Google
            </p>
          </div>
        </form>
        <div className="flex-col justify-center items-center mt-[5px] w-full">
          <div className="w-full flex justify-center">
            <p className="text-md text-center">Already have an account?</p>
          </div>
          <div className="w-full flex justify-center ">
            <div className="h-[30px] w-[100px] border-2 border-red-500 rounded-2xl flex justify-center text-center items-center cursor-pointer">
              <p>Login</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
