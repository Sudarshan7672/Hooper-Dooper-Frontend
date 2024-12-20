import React, { useEffect, useState } from "react";
import storyImage1 from "./assets/story-image-1.webp";
import storyImage2 from "./assets/story-image-2.webp";
import storyImage3 from "./assets/story-image-3.webp";
import storyImage4 from "./assets/story-image-4.webp";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
const Story = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    if (isAdded) {
      setTimeout(() => {
        setIsAdded(false);
      }, 3000);
    }
  }, [isAdded]);

  const addToCartHandler = (slug) => {
    setIsLoading(true);
    axios
      .post(
        "https://api.hooperdooper.in/cart/add",
        {
          product: slug,
          quantity: 1,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setIsLoading(false);
        setIsAdded(true);
        toast.success("Product added to cart");
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err?.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div className="pt-40 ">
      <div className="w-[80vw]  plus-jakarta-sans m-auto flex ">
        <div className=" flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-[2px] bg-yellow-300"></div>
            <p className="plus-jakarta-sans font-medium text-md">OUR STORY</p>
          </div>
          <h1 className="font-semibold text-3xl lg:text-4xl plus-jakarta-sans">
            Creating Joy Through Play
          </h1>
          <div className="flex mt-24 flex-col lg:flex-row space-y-8  lg:space-x-32">
            <img src={storyImage1} alt="Bicycle-Image-1" />
            <p className="text-xl lg:w-[64%] leading-10">
              To delight every kid through innovative yet simple toys We believe
              that childhood is all about happiness and will strive to make
              innovative yet simple products that will induce a smile, make them
              play, learn and be socialized. We will strive to bring innovation
              in every step to bring delightful experience to the little one.
            </p>
          </div>
          <div className="flex mt-24 flex-col-reverse  lg:flex-row  ">
            <div className="flex mt-8 lg:w-3/4 flex-col">
              <h5 className="text-2xl font-medium">
                Company Name is inspired from
              </h5>
              <ul className="text-xl space-y-2 mt-8 list-disc pl-6">
                <li>Super Duper means Marvelous</li>
                <li>Hoop: Popular Toy across a variety of culture</li>
              </ul>
              <p className="text-2xl mt-8 lg:pr-12 leading-10">
                <span className="font-medium">HooperDooper –</span> Marvelous
                yet simple toys which will bring delightful experience to the
                little one Two “0” in the letter shows “smile” on little one’s
                face
              </p>
            </div>

            <img src={storyImage3} alt="Bicycle-Image-1" />
          </div>
          <div className="flex mt-24 flex-col lg:flex-row  lg:space-x-32">
            <img src={storyImage3} alt="Bicycle-Image-1" />
            <div className="lg:w-[62%] mt-8">
              <h5 className="text-3xl mb-6 font-semibold">
                Vision: To delight every kid through innovative yet simple toys
              </h5>
              <p className="text-xl  leading-10">
                To delight every kid through innovative yet simple toys We
                believe that childhood is all about happiness and will strive to
                make innovative yet simple products that will induce a smile,
                make them play, learn and be socialized. We will strive to bring
                innovation in every step to bring delightful experience to the
                little one.
              </p>
            </div>
          </div>
          <div className="flex mt-24 flex-col-reverse lg:flex-row  ">
            <div className="flex mt-8  lg:w-3/4 flex-col">
              <h5 className="text-3xl font-semibold">Mission</h5>

              <p className="text-2xl mt-8 lg:pr-12 leading-10">
                We believe that childhood is all about happiness and will strive
                to make innovative yet simple products that will induce a smile,
                make them play, learn and be socialized. We will strive to bring
                innovation in every step to bring delightful experience to the
                little one.
              </p>
            </div>

            <img src={storyImage4} alt="Bicycle-Image-1" />
          </div>
        </div>
      </div>
      <div className="w-screen mt-16  h-screen relative overflow-hidden items-center justify-center flex">
        <video
          src="product-vid-2.mp4"
          className=" w-screen brightness-50"
          loop
          muted
          autoPlay
        ></video>
        <button
          onClick={() => {
            addToCartHandler("self-balancing-cycle-red");
          }}
          className="flex text-zinc-950 absolute bottom-[12vh] md:bottom-[8vh] lg:bottom-[4vh]  py-2 px-5 rounded-3xl border-white border-2 font-semibold capitalize text-xl left-[50%] -translate-x-[50%] flex-col justify-center bg-white/60 items-center"
        >
          {isLoading ? (
            <div className="flex-col gap-4  w-full h-full flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
                <div className="w-6 h-6 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
              </div>
            </div>
          ) : isAdded ? (
            "Added to cart"
          ) : (
            "Add to cart"
          )}
        </button>
      </div>
    </div>
  );
};

export default Story;
