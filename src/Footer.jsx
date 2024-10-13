import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/HooperDooper_Logo.png";
import callICon from "./assets/call-icon.svg";
import mailIcon from "./assets/mail-icon.svg";
import amazonPay from "./assets/AmazonPay.png";
import googlePay from "./assets/GooglePay.png";
import masterCard from "./assets/MasterCard.png";
import visa from "./assets/Visa.png";
import paytm from "./assets/Paytm.png";
import paypal from "./assets/Paypal.png";
import applePay from "./assets/ApplePay.png";
import Bhim from "./assets/Bhim.png";

const Footer = () => {
  return (
    <div className="text-zinc-50 w-full py-12 plus-jakarta-sans lg:px-28 px-4 items-center justify-around bg-[#1E1E2F] flex flex-col lg:flex-row">
      <div className="lg:w-1/3">
        <img src={logo} alt="" className="w-44 mb-4" />
        <p className="text-xl font-semibold">HooperDooper Toys Pvt Ltd</p>
        <p className="lg:w-3/4 my-3">
          SERENE COUNTY, VADGAON BUDRUK, PUNE, Maharashtra, India, 411041
        </p>
        <div className="flex flex-col ">
          <div className="flex flex-row gap-1">
            <img src={callICon} alt="callICon" />
            <p>+91 1234567890</p>
          </div>
          <div className="flex flex-row gap-1">
            <img src={mailIcon} alt="mailICon" />
            <p>care.hooperdooper@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="lg:w-[1px] w-[90vw] mx-auto h-[2px] my-4 lg:h-56 bg-white"></div>
      <div className="flex flex-row lg:w-[50%] gap-8 md:gap-40 justify-between">
        <div className="quickLinks flex  flex-col">
          <h1 className="text-2xl font-semibold mb-4">Quick Links</h1>
          <div className="flex flex-col gap-2">
            <Link to="">Home</Link>
            <Link to="products">Our Products</Link>
            <Link to="our-story">Our Story</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/FAQ">FAQ</Link>
          </div>
        </div>
        <div className="">
          <div className="securePayments ">
            <h5 className="text-xl font-medium">Secure Payments</h5>
            <div className="grid grid-cols-4 gap-3 mt-4">
              <img src={amazonPay} alt="amazonPay" />
              <img src={googlePay} alt="googlePay" />
              <img src={masterCard} alt="masterCard" />
              <img src={visa} alt="visa" />
              <img src={paytm} alt="paytm" />
              <img src={paypal} alt="paypal" />
              <img src={applePay} alt="applePay" />
              <img src={Bhim} alt="Bhim" />
            </div>
            <div className="followus mt-8"></div>
            <p className="text-xl font-medium">Follow us</p>
            <div className="flex flex-row gap-4 mt-4">
              <Link to="">
                <i className="fab fa-facebook-f "></i>
              </Link>
              <Link to="">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
