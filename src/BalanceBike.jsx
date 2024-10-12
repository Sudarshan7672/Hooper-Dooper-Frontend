import React from "react";
import ReactPlayer from "react-player";
const BalanceBike = () => {
  return (
    <div className="lg:pt-24">
      <div className=" lg:mb-28  w-[70vw] h-[20vh] bg-[#464FFF] m-auto rounded-lg hidden items-center justify-around">
        <div className="flex flex-col lg:gap-4">
          <h1 className="text-white font-bold lg:text-4xl">200+</h1>
          <p className="text-white text-center">Deals</p>
        </div>
        <div className="flex flex-col lg:gap-4">
          <h1 className="text-white font-bold lg:text-4xl text-center">300+</h1>
          <p className="text-white">Products Sold</p>
        </div>
        <div className="flex flex-col lg:gap-4">
          <h1 className="text-white font-bold lg:text-4xl text-center">500+</h1>
          <p className="text-white">Happy Customers</p>
        </div>
      </div>
      <div className="w-[80vw] plus-jakarta-sans m-auto flex ">
        <div className=" flex flex-col gap-5">
          <div className="flex gap-3 items-center m">
            <div className="w-8 h-[2px] bg-yellow-300"></div>
            <p className="plus-jakarta-sans font-medium text-sm">OUR PRODUCT</p>
          </div>
          <h1 className="font-semibold text-3xl lg:text-4xl plus-jakarta-sans">
            BALANCE BIKE
          </h1>
          <div className="flex relative gap-8">
            <div className="w-3/4">
              <p>
                A balance bike is a two-wheeled pedal-less bike that teaches
                toddlers as young as 18-months to balance on two wheels. A
                child’s physical ability such as balance, steering, and
                coordination are acquired faster on the balance bike than on a
                bike equipped with training wheels and pedal. Learning to ride a
                bicycle is one of life’s milestones and the first step to
                gaining true independence.{" "}
              </p>
              <p>
                Balance Bike gives true independence along with a huge boost in
                confidence.
              </p>
              <button className="text-white font-bold bg-black w-[20%] py-2 rounded-lg flex items-center justify-center gap-2">
                <p>Know More</p>
                <i class="ri-arrow-right-line"></i>
              </button>
            </div>
            <ReactPlayer
              url="product-vid.mp4"
              playing
              loop
              muted
              controls={false}
              width="80%"
              height="80%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceBike;
