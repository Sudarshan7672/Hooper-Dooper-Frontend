import { Link } from "react-router-dom";
import AddressPage from "./AddressPage";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

export default function Profile() {
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(null);
  const logooutHandler = () => {
    axios
      .get("https://api.hooperdooper.in/auth/v1/logout", {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response?.data);
        window.location.href = "/login";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    disablePageScroll();
    axios
      .get("https://api.hooperdooper.in/profile", {
        withCredentials: true,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setResult(response.data);

        console.log(response.data);
        setIsLoading(false);
        enablePageScroll();
      })
      .catch((error) => {
        if (error.response.status === 401) {
          window.location.href = "/login";
        }
        setIsLoading(false);
        error.response.data.message && setError(error.response.data.message);
        enablePageScroll();
        // console.log(error);
      });
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
  }, [isError]);
  return (
    <>
      {isLoading && (
        <div className="absolute w-full h-full bg-white/60 z-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="relative pt-40 pb-24">
        <img
          src="https://pagedone.io/asset/uploads/1705473908.webp"
          alt="cover-image"
          className="w-full absolute top-0 left-0 z-0 h-60 object-cover"
        />
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
            <img
              src="/Profileimg.jpg"
              alt="user-avatar-image"
              className="border-4 w-[150px] h-[150px] border-solid border-white rounded-full object-cover"
            />
          </div>
          <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
            <div className="block">
              <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">
                {result?.data?.fullName}
                {result?.data?.isVerified ? (
                  <span
                    title="Verified Email"
                    className="text-green-500 text-xl"
                  >
                    ✔
                  </span>
                ) : (
                  <span
                    title="Not Verified Email"
                    className="text-red-500 text-xl"
                  >
                    ❌
                  </span>
                )}
              </h3>
              <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center">
                Engineer at BB Agency Industry{" "}
                <br className="hidden sm:block" />
                New York, United States
              </p>
            </div>
            <button
              onClick={logooutHandler}
              className="py-3.5 px-5 flex rounded-full bg-indigo-600 items-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700"
            >
              <span className="px-2 font-semibold text-base leading-7 text-white">
                Logout
              </span>
            </button>
          </div>
          <div className="flex max-sm:flex-wrap max-sm:justify-center items-center gap-3">
            <a className="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">
              My Orders
            </a>
            <a className="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">
              My Cart
            </a>
            <a className="rounded-full py-3 px-6 bg-stone-100 text-gray-700 font-semibold text-sm leading-6 transition-all duration-500 hover:bg-stone-200 hover:text-gray-900">
              Edit profile
            </a>
            <AddressPage />
          </div>
        </div>
      </section>
    </>
  );
}
