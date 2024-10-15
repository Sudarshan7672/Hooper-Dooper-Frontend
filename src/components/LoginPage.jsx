import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import googleicon from "../assets/googleicon.webp";
import HooperDooper_logo from "../assets/HooperDooper_Logo.webp";
import cycle from "../assets/cycle.webp";
import { Link } from "react-router-dom";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", {
        username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* main div */}
      <div className="w-full sm:w-[70vw] m-auto pt-[120px] mb-[150px] lg:pt-[150px] flex flex-col lg:flex-row justify-center">
        {/* first half div  */}
        <div className="w-full lg:w-[50%] m-auto flex flex-col justify-center">
          <div className="w-full mt-[20px] flex justify-center">
            <img src={HooperDooper_logo} loading="lazy" alt="HooperDooper Logo" />
          </div>
          <div className="w-full mt-[20px] flex justify-center">
            <p>BALANCE BIKE</p>
          </div>
          <div className="w-full mt-[50px] flex justify-center">
            <img
              src={cycle}
              className="w-[150px] sm:w-[300px] h-[100px] sm:h-[200px]"
              alt="Cycle"
              loading="lazy"
            />
          </div>
        </div>
        {/* second half div  */}
        <div className="w-full poppins-medium lg:w-[40%] m-auto">
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div className="w-full flex justify-center items-center">
                <p className="text-2xl font-bold">Login</p>
              </div>
              <div className="mt-[20px]">
                <p>Email Address</p>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                  className="w-full p-2 my-3 rounded-md border-2 mt-1"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  className="w-full p-2 rounded-md border-2 mt-1"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="w-full mt-[20px] flex justify-center">
                <button type="submit">
                  <div className="h-[40px] w-[100px] bg-black text-white rounded-2xl flex justify-center items-center">
                    <p>Log in</p>
                  </div>
                </button>
              </div>
              <Link to="/forgotpassword">
              <div className="flex justify-center mt-[5px]">
                <p className="text-sm">Forgot Password?</p>
              </div>
              </Link>
              <div className="w-full flex justify-center text-xl mt-[5px]">
                <p>OR</p>
              </div>
              <Link to="/continuewithgoogle">
              <div className="flex h-[48px]  mt-[5px] bg-blue-500 w-full rounded-lg justify-center items-center">
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
              </div>
              </Link>
            </form>
            <div className="flex-col justify-center items-center mt-[10px] w-full">
              <div className="w-full flex justify-center">
                <p className="text-md text-center">
                  Don&apos;t have an account?
                </p>
              </div>
              <Link to="/signup">
              <div className="w-full flex justify-center ">
                <div className="h-[40px] w-[100px] border-2 border-red-500 rounded-2xl flex mt-[10px] justify-center text-center items-center">
                  <p>Sign up</p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
