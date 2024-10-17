import React, { useEffect, useState } from "react";
import HooperDooper_logo from "./assets/HooperDooper_Logo.webp";
import Hamburger from "hamburger-react";
// import shoppingCart from "./assets/shopping-cart.svg";
import profileIcon from "./assets/profileIcon.svg";
import { Link } from "react-router-dom";
import HooperDooperLogo from "./assets/HooperDooperLogo.svg"

const Navbar = () => {
  useEffect(() => {
    setIsLoading(true);
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedin(true);
    }
    setIsLoading(false);
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="flex absolute z-10  w-full flex-row justify-between py-4 px-8 ">
      <div className="flex flex-row gap-2">
        <div className="flex lg:hidden md:hidden ">
          <Hamburger toggled={isOpen} toggle={handleClick} />
        </div>
        <a href="/" className="logo">
          <img src={HooperDooperLogo} height="100px"width="100px" alt="HooperDooper_logo" />
        </a>
      </div>
      <div
        className=" flex-row items-center justify-center roboto-medium space-x-[3vw] flex"
        onClick={closeMenu}
      >
        <Link className="hidden lg:flex md:flex hover:text-white" to="">
          Home
        </Link>
        <Link className="hidden lg:flex md:flex hover:text-white" to="products">
          Our Products
        </Link>
        <Link className="hidden lg:flex md:flex hover:text-white" to="our-story">
          Our Story
        </Link>
        <div className=" flex gap-6 items-center">
          <Link>
            {/* <img src={shoppingCart} className="hover:color-white" alt="shopping-cart" /> */}
            <i className="fa-solid fa-cart-shopping hover:text-white"></i>
          </Link>
          <div className="divider bg-zinc-800 h-10 w-[1.5px]"></div>
          {isLoggedin ? (
            <Link to="profile">
              <img src={profileIcon} alt="profile-icon" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="py-1 px-4 bg-zinc-950 text-zinc-50 poppins-semibold rounded-md"
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
