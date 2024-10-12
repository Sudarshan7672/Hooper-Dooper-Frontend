import React, { useState } from "react";
import HooperDooper_logo from "./assets/HooperDooper_logo.png";
import Hamburger from "hamburger-react";
import shoppingCart from "./assets/shopping-cart.svg";
import profileIcon from "./assets/profileIcon.svg";
import { Link } from "react-router-dom";
import LoginPagePopup from "./components/LoginPagePopup"; 
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
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
          <img src={HooperDooper_logo} alt="HooperDooper_logo" />
        </a>
      </div>
      <div
        className=" flex-row items-center justify-center roboto-medium space-x-[3vw] flex flex"
        onClick={closeMenu}
      >
        <Link className="hidden lg:flex md:flex" to="">
          Home
        </Link>
        <Link className="hidden lg:flex md:flex" to="products">
          Our Products
        </Link>
        <Link className="hidden lg:flex md:flex" to="our-story">
          Our Story
        </Link>
        <div className=" flex gap-6 items-center">
          <Link to="cart">
            <img src={shoppingCart} alt="shopping-cart" />
          </Link>
          <div className="divider bg-zinc-800 h-10 w-[1.5px]"></div>
          <LoginPagePopup />
          <Link to="profile">
            <img src={profileIcon} alt="profile-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
