import React, { useState } from "react";
import axios from "axios";
import googleicon from "../assets/googleicon.webp";
import cycle from "../assets/cycle.webp";
import Modal from "./Modal"; // Adjust the path as needed
import { Link } from "react-router-dom";

export default function LoginPagePopup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        // window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        setError("Login failed. Please check your credentials.");
      });
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-2 py-1/2 rounded-sm"
      >
        Login
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <form onSubmit={handleSubmit}>
          <div className="w-full flex justify-center items-center">
            <p className="text-2xl font-bold">Login</p>
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="mt-[20px]">
            <label htmlFor="username" className="block">
              Email Address
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border-2 h-[35px]"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="w-full mt-[20px] flex justify-center">
            <div className="50% m-auto">
              <button
                type="submit"
                className="h-[30px] w-[100px] bg-black text-white rounded-xl flex justify-center items-center"
              >
                <p>Log in</p>
              </button>
            </div>
            <div className="flex h-[40px] mt-[5px] bg-blue-500 w-[60%] m-auto rounded-lg justify-center items-center cursor-pointer">
              <img
                src={googleicon}
                className="h-[22px] w-[22px]"
                alt="Google Icon"
              />
              <p className="text-white ml-[10px] font-sans">
                Continue With Google
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-[5px]">
            <p className="text-sm">Forgot Password?</p>
          </div>
          <div className="w-full flex justify-center mt-[5px]">
            <p>OR</p>
          </div>
        </form>
        <div className="flex-col justify-center items-center mt-[5px] w-full">
          <div className="w-full flex justify-center">
            <p className="text-md text-center">Don&apos;t have an account?</p>
          </div>
          <div className="w-full flex justify-center ">
            <Link to="/signup">
              <div className="h-[30px] w-[100px] border-2 border-red-500 rounded-2xl flex justify-center text-center items-center cursor-pointer">
                <p>Sign up</p>
              </div>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
}
