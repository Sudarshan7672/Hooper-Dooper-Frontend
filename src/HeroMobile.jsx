import CycleModel from "./cycleModel";
import tick from "./assets/tick.png";
import cyclehome from "./assets/cycle.png";
import {Link} from 'react-router-dom'
// import productvideo from './assets/'

export default function HeroMobile() {
  return (
    <>
      <div>
        <div className="w-[100vw] block model pt-[180px]">
          <p className="text-center flex flex-wrap m-auto flex-col justify-center items-center text-[100px] mt-[-100px] font-bold text-white/50 leading-1 w-full ">
            HOOPER
          </p>
          <p className="text-center flex flex-wrap flex-col justify-center items-center text-[100px] font-bold text-white/50 leading-none ">
            DOOPER
          </p>
          <div className="mt-[-220px] scale-75">
            <img src={cyclehome} alt="" />
          </div>

          {/* Descriptions1 */}
          <div className="h-8 px-2.5 py-1.5 scale-50 absolute top-[215px] left-[-60px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Height Adjustable seat and handle height
            </div>
          </div>

          {/* Descriptions2 */}
          <div className="h-8 w-[260px] px-2.5 py-1.5 scale-50 absolute top-[190px] left-[210px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Light weight Mid steel frame
            </div>
          </div>

          {/* Descriptions3 */}
          <div className="h-8 px-2.5 py-1.5 scale-50 absolute top-[280px] left-[130px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Pedal Free Design
            </div>
          </div>
          {/* Descriptions4 */}
          <div className=" absolute h-8 px-2.5 py-1.5 scale-50 top-[350px] left-[30px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Puncture proof EVA tyre
            </div>
          </div>
        </div>

        <div className="flex flex-row w-[95vw] mt-[50px] m-auto">
          <div className="video flex-row flex-wrap w-[55%] h-[px] mt-[px]">
            <div className="-rotate-90 w-[100%] ml-[-90px] mt-[30px] inline-block opacity-100 text-black text-[21px] font-extrabold font-['Plus Jakarta Sans']">
              <p className="">Watch our video</p>
            </div>
            <div className="w-[70%] ml-[50px] mt-[-80px] rounded-xl overflow-hidden inline-block">
              <video src='/HeroVideo.mp4' autoPlay muted loop></video>
            </div>
          </div>

          <div className="flex-row flex-wrap justify-end items-end w-[45%] h-[px]">
            <div className="w-[100%] flex-col flex-wrap text-black font-semibold font-['Plus Jakarta Sans']  font-semibold items-center justify-center text-sm mr-[auto]">
              Marvelous yet simple toys which will bring delightful experience
              to the little one
            </div>
            <Link to="/FAQ">
            <div className="px-10 py-2.5 h-[30px] w-[40px] mt-[10px] bg-gray-300 rounded-[50px] border border-black backdrop-blur-[10px] justify-center items-center gap-2.5 inline-flex m-[auto]">
              <div className="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-[27px] tracking-wide">
                FAQ
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

<div className="lg:mt-[-550px] h-[100%] w-[100%]">
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
</div>;
