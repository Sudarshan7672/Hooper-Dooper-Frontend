import yellowlinehorizontal from "../assets/yellowlinehorizontal.webp";
import rightarrow from "../assets/rightarrow.webp";
import cyclehome from "../assets/cyclehome.webp";
import cyclehomevector from "../assets/cyclehomevector.webp";
import { Link } from "react-router-dom";

export default function OurStoryHomePage() {
  return (
    <>
      <div className="w-[90vw] m-auto flex flex-col lg:flex-row items-center lg:mt-[100px] mt-[50px]">
        
        {/* Left Section - Image */}
        <div className="w-full lg:w-[30%] m-auto border border-gray-600 rounded-lg relative">
          <img
            src={cyclehomevector}
            className="absolute top-[-20px] right-[10px] w-[60px] h-[50px]"
            alt="cycle vector"
          />
          <img src={cyclehome} alt="cycle home" className="w-full" />
        </div>

        {/* Right Section - Text */}
        <div className="theory w-full lg:w-[50%] text-center lg:text-left lg:ml-auto mt-6 lg:mt-0">
          <div className="Ourproduct flex justify-center lg:justify-start items-center mb-4">
            <img
              src={yellowlinehorizontal}
              className="h-1 w-[30px] lg:w-[40px] mt-1"
              alt="yellow line"
            />
            <p className="text-lg lg:text-xl ml-3 lg:ml-5">OUR STORY</p>
          </div>
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold mt-2 lg:mt-4">
              Creating Joy Through Play
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row lg:w-[70%] mt-4 lg:mt-6 border-l-4 border-yellow-500 mx-auto lg:mx-0">
            <p className="ml-4 lg:ml-5 text-base lg:text-lg">
              To delight every kid through innovative yet simple toys. We
              believe that childhood is all about happiness and will strive to
              make innovative yet simple products that will induce a smile, make
              them play, learn, and socialize. We will strive to bring
              innovation in every step to bring delightful experiences to the
              little one.
            </p>
          </div>
          <div className="w-[90%] mx-auto lg:w-[90%] lg:mx-0 mt-6">
            <p className="text-base lg:text-lg">
              <b>HooperDooper</b> – Marvelous yet simple toys which will bring
              delightful experiences to the little one.
            </p>
          </div>
          <Link to="/our-story">
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
      </div>
    </>
  );
}
