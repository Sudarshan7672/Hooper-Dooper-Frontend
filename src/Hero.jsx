import CycleModel from "./cycleModel";
import tick from './assets/tick.webp'
import {Link} from 'react-router-dom'

export default function Hero() {
  return (
    <div className="hero model lg:h-[100vh] pt-24">
      <p className="text-center flex flex-wrap flex-col justify-center items-center lg:text-[220px] lg:mt-[-100px] lg:font-bold lg:text-white/50 lg:leading-1 ">
        HOOPER
      </p>
      <p className="text-center flex flex-wrap flex-col justify-center items-center lg:text-[220px] lg:font-bold lg:text-white/50 lg:leading-none ">
        DOOPER
      </p>
      <div className="lg:mt-[-550px] h-[100%] w-[100%]">

        {/* 3d model */}
        <CycleModel />

        {/* Descriptions1 */}
        <div className="h-8 px-2.5 py-1.5 lg:absolute lg:top-[180px] lg:left-[280px]  bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
          <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
            <img src={tick} alt="" />
          </div>
          <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
            Height Adjustable seat and handle height
          </div>
        </div>

        {/* Descriptions2 */}
        <div className="h-8 px-2.5 py-1.5 lg:absolute lg:top-[100px] lg:left-[800px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
          <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
            <img src={tick} alt="" />
          </div>
          <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
            Light weight Mid steel frame
          </div>
        </div>
        
        {/* Descriptions3 */}
        <div className="h-8 px-2.5 py-1.5 lg:absolute lg:top-[350px] lg:left-[700px] lg:scale-90 bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
          <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
            <img src={tick} alt="" />
          </div>
          <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
            Pedal Free Design
          </div>
        </div>
        {/* Descriptions4 */}
        <div className=" absolute h-8 px-2.5 py-1.5 lg:absolute lg:top-[430px] lg:left-[1000px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
          <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
            <img src={tick} alt="" />
          </div>
          <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
            Puncture proof EVA tyre
          </div>
        </div>
      </div>

      {/* Cycle end */}
      {/* New video section */}
      <div className="flex flex-row lg:mt-[-50px]">
        <div className="video flex-row  lg:w-[50%] lg:h-[100px] lg:mt-[-50px]">
          <div className="lg:-rotate-90 lg:opacity-80 text-white text-[17px] lg:font-extrabold lg:font-['Plus Jakarta Sans'] lg:leading-none lg:tracking-wide  inline-block lg:w-[20%]">
            <p className="mt-[10px]">Watch our video</p>
          </div>
          <Link to="/ourvideo">
          <div className="lg:w-[100px] lg:h-[150px] lg:mb-[-70px] lg:rounded-xl lg:ml-[-50px] overflow-hidden inline-block">
            <video src="/HeroVideo.mp4" loading="lazy" autoPlay muted loop></video>
          </div>
          </Link>
        </div>

        <div className="flex-row justify-end items-end lg:w-[50%] lg:h-[100px]">
          <div className="w-[451px] text-white text-lg font-semibold font-['Plus Jakarta Sans'] leading-[27px] items-end justify-end lg:ml-[auto]">
            Marvelous yet simple toys which will bring delightful experience to
            the little one
          </div>
          <Link to="/FAQ">
          <div className="px-10 py-2.5 bg-white/20 rounded-[50px] border border-white backdrop-blur-[10px] justify-center items-center gap-2.5 inline-flex lg:ml-[600px]">
            <div className="text-white text-lg font-semibold font-['Plus Jakarta Sans'] leading-[27px] tracking-wide">
              FAQ
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
