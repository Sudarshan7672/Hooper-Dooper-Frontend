import React from "react";
import storyImage1 from "./assets/story-image-1.png";
import storyImage2 from "./assets/story-image-2.png";
import storyImage3 from "./assets/story-image-3.png";
import storyImage4 from "./assets/story-image-4.png";
import { Link } from "react-router-dom";
const Story = () => {
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

            <img src={storyImage2} alt="Bicycle-Image-1" />
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
        <Link
          to="../products"
          className="flex text-zinc-950 absolute bottom-[12vh] md:bottom-[8vh] lg:bottom-[4vh]  py-2 px-5 rounded-3xl border-white border-2 font-semibold capitalize text-xl left-[50%] -translate-x-[50%] flex-col justify-center bg-white/60 items-center"
        >
          buy now
        </Link>
      </div>
    </div>
  );
};

export default Story;