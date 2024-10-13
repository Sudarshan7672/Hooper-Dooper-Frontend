import React, { useState } from "react";
import axios from "axios";
import HooperDooper_logo from "../assets/HooperDooper_Logo.png";
import cycle from "../assets/cycle.png";
import googleicon from "../assets/googleicon.png";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const googleAuthHandler = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/google", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(res.data);
      window.location.href = res.data;
    } catch (err) {
      console.error("err" + err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/auth/v1/login", {
        email,
        password,
      });
      console.log(res.data);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        toast.success("Login successful.");
        setTimeout(() => {
          window.location.href = "/";
          setLoading(false);
        }, 3000);
      }
    } catch (err) {
      console.error(err);
      toast.error("Login failed. Please check your credentials.");
    } finally {
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute w-screen h-screen bg-white/40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div class="flex-col gap-4 w-full flex items-center justify-center">
              <div class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="w-full sm:w-[70vw]  m-auto py-20 px-8 flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-[50%] m-auto flex flex-col justify-center">
          <div className="w-full mt-[20px] hidden  lg:flex justify-center">
            <img src={HooperDooper_logo} alt="Logo" />
          </div>
          <div className="w-full mt-[20px] flex justify-center">
            <p>BALANCE BIKE</p>
          </div>
          <div className="w-full mt-[50px] flex justify-center">
            <img
              src={cycle}
              className="w-[150px] sm:w-[300px] h-[100px] sm:h-[200px]"
              alt="Cycle"
            />
          </div>
        </div>
        <div className="w-full poppins-medium lg:w-[40%] m-auto">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex justify-center items-center">
              <p className="text-2xl font-bold">Login</p>
            </div>
            <div className="mt-[20px] poppins-medium mb-4">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full py-2 px-2 mt-1 rounded-md border-2 "
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full py-2 px-2  rounded-md border-2 mt-1"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="w-full mt-[20px] flex justify-center">
              <button type="submit" disabled={loading}>
                <div className="py-1 text-lg w-[100px] mb-1 bg-black text-white rounded-2xl flex justify-center items-center">
                  {loading ? "Loading..." : "Log in"}
                </div>
              </button>
            </div>
            <div className="flex justify-center mt-[5px]">
              <p className="text-sm">Forgot Password?</p>
            </div>
            <div className="w-full flex justify-center mt-[5px]">
              <p>OR</p>
            </div>
          </form>
          <button
            onClick={googleAuthHandler}
            className="flex h-[48px] mt-[5px] my-4 bg-blue-500 w-full rounded-lg justify-center items-center"
          >
            <div className="p-1 bg-white rounded-xl">
              <img
                src={googleicon}
                className="h-[22px] w-[22px]"
                alt="Google Icon"
              />
            </div>
            <p className="text-white ml-[10px] font-sans">
              Continue With Google
            </p>
          </button>
          <div className="flex-col justify-center items-center mt-[5px] w-full">
            <div className="w-full flex justify-center mb-2">
              <p className="text-md text-center">Don&apos;t have an account?</p>
            </div>
            <Link to="../signup" className="w-full flex justify-center">
              <button
                type="button"
                className="h-[30px] w-[100px] border-2 border-zinc-700 rounded-2xl flex justify-center text-center items-center"
              >
                <p>Sign up</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
