import yellowlinehorizontal from "../assets/yellowlinehorizontal.webp";
import rightarrow from "../assets/rightarrow.webp";
import cycle from "../assets/cycle.webp";
import redellipse from "../assets/redellipse.webp";
import cyclevector from "../assets/cyclevector.webp";
import {Link} from "react-router-dom";

export default function OurProductHomepage() {
  return (
    <>
      <div className="w-[90vw] m-auto flex flex-col lg:flex-row items-center lg:mt-[100px] mt-[50px]">
        {/* Left section - Text and button */}
        <div className="theory w-full lg:w-[50%] text-center lg:text-left">
          <div className="Ourproduct flex justify-center lg:justify-start items-center mb-4">
            <img
              src={yellowlinehorizontal}
              className="h-1 w-[30px] lg:w-[40px] mt-1"
              alt="yellow line horizontal"
            />
            <p className="text-lg lg:text-xl ml-3 lg:ml-5">OUR PRODUCT</p>
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mt-2 lg:mt-4">
              BALANCE BIKE
            </h1>
          </div>
          <div className="flex lg:w-[70%] mt-4 lg:mt-6 border-l-4 border-yellow-500 mx-auto lg:mx-0">
            <p className="ml-4 lg:ml-5 text-base lg:text-lg">
              A balance bike is a two-wheeled pedal-less bike that teaches
              toddlers as young as 18-months to balance on two wheels. A child’s
              physical ability such as balance, steering, and coordination are
              acquired faster on the balance bike than on a bike equipped with
              training wheels and pedal. Learning to ride a bicycle is one of
              life’s milestones and the first step to gaining true independence.
            </p>
          </div>
          <div className="w-[90%] mx-auto lg:w-[90%] lg:mx-0 mt-6">
            <p className="text-base lg:text-lg">
              Balance Bike gives true independence along with a huge boost in
              confidence.
            </p>
          </div>
          <Link to="/products">
          <div className="mt-6 lg:mt-8">
            <button className="h-[40px] rounded-md bg-black w-[150px] mx-auto lg:mx-0 flex items-center justify-center">
              <p className="text-white">Know More</p>
              <img
                src={rightarrow}
                className="w-[20px] h-[20px] ml-2"
                alt="right arrow"
              />
            </button>
          </div>
          </Link>
        </div>

        {/* Right section - Image and product info */}
        <div className="w-full lg:w-[30%] mt-10 lg:mt-0 m-auto overflow-hidden border border-gray-600 rounded-lg">
          <div>
            <img src={cycle} className="mt-[5px] scale-90" loading="lazy" alt="cycle" />
          </div>
          <div className="w-[90%] m-auto">
            <div>
              <p className="font-bold text-2xl lg:text-4xl">Balance Bike</p>
            </div>
            <div className="border-2 border-red-500 rounded-2xl mt-3 w-[70px] h-[30px] flex items-center justify-center">
              <img
                src={redellipse}
                className="inline-block w-[8px] h-[8px] mr-2"
                alt="red ellipse"
                
              />
              <p className="font-bold text-red-600">Red</p>
            </div>
            <div className="mt-4 flex justify-center lg:justify-start">
              <p className="inline-block font-bold text-xl lg:text-3xl">
                Rs. 2,499/-
              </p>
              <p className="border-2 hidden border-red-500 rounded-lg w-[80px] h-[30px] ml-3 flex items-center justify-center text-red-500 font-bold text-sm">
                35% Off
              </p>
            </div>
            <hr className="mt-4" />
            <div className="mt-4">
              <img src={cyclevector} className="mx-auto" loading="lazy" alt="cycle vector" />
            </div>
            <div>
              <button className="rounded-3xl bg-green-600 w-[180px] h-[40px] text-white text-lg lg:text-2xl font-bold mt-4 mb-4 mx-auto lg:mx-0">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
