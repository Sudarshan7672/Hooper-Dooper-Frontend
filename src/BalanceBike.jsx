import React from "react";
import ReactPlayer from "react-player";
const BalanceBike = () => {
  return (
    <div className="pt-40 pb-20">
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
      <div className="w-[80vw]  plus-jakarta-sans m-auto flex ">
        <div className=" flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <div className="w-8 h-[2px] bg-yellow-300"></div>
            <p className="plus-jakarta-sans font-medium text-md">OUR PRODUCT</p>
          </div>
          <h1 className="font-semibold text-3xl lg:text-4xl plus-jakarta-sans">
            BALANCE BIKE
          </h1>
          <div className="flex flex-col-reverse lg:flex-row relative gap-8 lg:mt-12">
            <div className="lg:w-3/4 lg:pr-28 ">
              <h5 className="text-3xl font-semibold mb-5 ">Description</h5>
              <p className="text-xl  leading-9">
                A balance bike is a two-wheeled pedal-less bike that teaches
                toddlers as young as 18-months to balance on two wheels. A
                child’s physical ability such as balance, steering, and
                coordination are acquired faster on the balance bike than on a
                bike equipped with training wheels and pedal. Learning to ride a
                bicycle is one of life’s milestones and the first step to
                gaining true independence. Balance Bike gives true independence
                along with a huge boost in confidence.
              </p>
              <ol className=" list-disc ml-4 mt-8 text-xl space-y-3">
                <li>Puncture proof EVA tyre</li>
                <li>Height Adjustable seat and handle height</li>
                <li>Pedal free design </li>
                <li>Light weight Mild steel frame</li>
              </ol>
            </div>
            <div className="mt-6 lg:w-1/3 overflow-hidden rounded-lg">
              <ReactPlayer
                url="product-vid.mp4"
                playing
                loop
                muted
                controls={false}
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="flex mt-6 flex-col gap-12 lg:gap-36">
            <div className="flex flex-col ">
              <h6 className="font-semibold text-3xl">
                Final Packaged Box Details
              </h6>
              <ol className=" list-disc ml-5 mt-8 text-xl space-y-3">
                <li>Box Dimensions 65 x 19 x 34 cm</li>
                <li>Box Weight 3.9 kg</li>
              </ol>
            </div>
            <div className="flex flex-col lg:w-2/3">
              <h6 className="font-semibold text-3xl">Warranty</h6>
              <p className="text-2xl  font-medium text-zinc-700 leading-8 mt-8">
                1 Year manufacturer warranty is non-transferable and valid for 1
                year from the original date of purchase.
              </p>
              <ol className=" list-decimal ml-5 mt-8 text-xl space-y-3">
                <li>Front frame with wheel attached to it</li>
                <li>
                  Central frame with wheel, two grey bush and seat attached to
                  it
                </li>
                <li>Handle with grip attached to it</li>
                <li>Allen key, clamp and assembly manual</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceBike;
