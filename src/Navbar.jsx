import React, { useEffect, useState } from "react";
import HooperDooper_logo from "./assets/HooperDooper_Logo.webp";
import Hamburger from "hamburger-react";
// import shoppingCart from "./assets/shopping-cart.svg";
import profileIcon from "./assets/profileIcon.svg";
import { Link } from "react-router-dom";
import HooperDooperLogo from "./assets/HooperDooperLogo.svg";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "./config/constants";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`${BASE_URL}/isAuthenticated`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res?.data);
        if (res?.data?.authenticated) {
          setIsLoggedin(true);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="flex absolute z-10  w-full flex-row justify-between py-4 px-8 ">
      <div className="flex flex-row z-40 gap-2">
        <div className="flex lg:hidden md:hidden ">
          <Hamburger toggled={isOpen} toggle={handleClick} />
          {isOpen && (
            <div className="lg:hidden absolute mt-[-30px] h-[100vh] left-0 w-full bg-gray-900 bg-transparent/90 p-4 space-y-4 text-center text-white rounded-b-md shadow-lg z-40">
              <Link
                onClick={() => setOpen(false)}
                to="/"
                className="block mt-[50px] hover:bg-gray-600 text-3xl rounded"
              >
                Home
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to="/products"
                className="block py-2 hover:bg-gray-600 text-3xl rounded"
              >
                Our Products
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to="/our-story"
                className="block py-2 hover:bg-gray-600 text-3xl rounded"
              >
                Our Story
              </Link>
              <Link
                onClick={() => setOpen(false)}
                to="/help"
                className="block py-2 hover:bg-gray-600 text-3xl rounded"
              >
                Help
              </Link>
            </div>
          )}
        </div>
        <a href="/" className="logo">
          <img
            src={HooperDooperLogo}
            height="100px"
            width="100px"
            alt="HooperDooper_logo"
          />
        </a>
      </div>
      <div
        className=" flex-row items-center justify-center roboto-medium space-x-[3vw] flex"
        onClick={closeMenu}
      >
        <Link
          className="hidden lg:flex md:flex hover:text-zinc-100 transition-all duration-300 ease-in-out"
          to=""
        >
          Home
        </Link>
        <Link
          className="hidden lg:flex md:flex hover:text-zinc-100 transition-all duration-300 ease-in-out"
          to="products"
        >
          Our Products
        </Link>
        <Link
          className="hidden lg:flex md:flex hover:text-zinc-100 transition-all duration-300 ease-in-out"
          to="our-story"
        >
          Our Story
        </Link>
        <Link
          className="hidden lg:flex md:flex hover:text-zinc-100 transition-all duration-300 ease-in-out"
          to="/help"
        >
          Help
        </Link>
        <div className=" flex gap-6 items-center">
          <Link to="/user/cart">
            {/* <img src={shoppingCart} className="hover:color-white" alt="shopping-cart" /> */}
            <i className="fa-solid fa-cart-shopping hover:text-zinc-100 transition-all duration-300 ease-in-out"></i>
          </Link>
          <div className="divider bg-zinc-800 h-10 w-[1.5px]"></div>
          {isLoggedin ? (
            <Link to="profile">
              <img src={profileIcon} alt="profile-icon" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="py-1 px-4 bg-zinc-950 text-zinc-50 poppins-semibold rounded-md hover:scale-110"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
