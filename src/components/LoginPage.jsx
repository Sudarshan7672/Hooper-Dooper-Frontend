import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import googleicon from "../assets/googleicon.webp";
import cycle from "../assets/cycle.webp";
import { Link } from "react-router-dom";
import HooperDooperLogo from "../assets/HooperDooperLogo.svg";
import { toast } from "react-toastify";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    disablePageScroll();
    axios
      .post(
        "https://api.hooperdooper.in/auth/v2/login",
        {
          username: email.split("@")[0],
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
        window.location.href = "/";
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
        console.log(err);
        setIsLoading(false);
        enablePageScroll();
      });
  };

  const googleAuthHandler = () => {
    window.open("https://api.hooperdooper.in/auth/google", "_self");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loader absolute z-30 bg-black/40 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%]">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* main div */}
      <div className="w-full sm:w-[70vw] m-auto pt-[120px] mb-[150px] lg:pt-[150px] flex flex-col lg:flex-row justify-center">
        {/* first half div  */}
        <div className="w-full lg:w-[50%] m-auto flex flex-col justify-center">
          <div className="w-full mt-[20px] flex justify-center">
            <img
              src={HooperDooperLogo}
              width="100px"
              height="100px"
              loading="lazy"
              alt="HooperDooper Logo"
            />
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
        <div className="w-full px-6 poppins-medium lg:w-[40%] m-auto">
          <div>
            <form action="" onSubmit={handleSubmit}>
              <div className="w-full flex justify-center items-center">
                <p className="text-2xl font-bold">Login</p>
              </div>
              <div className="mt-[20px]">
                <p>Email Address</p>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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

              <button
                onClick={googleAuthHandler}
                className="flex h-[48px] px-8  mt-[5px] bg-blue-500 w-full rounded-lg justify-center items-center"
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
