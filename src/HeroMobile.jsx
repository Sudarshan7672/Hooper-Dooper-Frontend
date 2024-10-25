import tick from "./assets/tick.webp";
import cyclehome from "./assets/cycle.webp";
import { Link } from "react-router-dom";
// import productvideo from './assets/'

export default function HeroMobile() {
  return (
    <>
      <div>
        <div className="w-[100vw] lg:h-[100vh] block model pt-[180px] lg:pt-[10px] lg:pb-[10px]">
          <p className="hidden text-center flex flex-wrap m-auto flex-col justify-center items-center text-[100px] mt-[-100px] font-bold text-white/50 leading-1 w-full md:text-[150px] lg:text-[250px] ">
            HOOPER
          </p>
          <p className="hidden text-center flex flex-wrap flex-col justify-center items-center text-[100px] font-bold text-white/50 leading-none md:text-[150px] lg:text-[250px]">
            DOOPER
          </p>
          <div className="mt-[-150px] pb-[30px] md:mt-[-210px] md:scale-75 lg:mt-[-370px] ">
            <img src={cyclehome} className="lg:scale-75" alt="" />
          </div>

          {/* Descriptions1 */}
          <div className="h-8 px-2.5 py-1.5 scale-50 absolute top-[125px] left-[-70px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex md:scale-75 md:top-[190px] md:left-[0px] lg:scale-100 lg:top-[120px] lg:left-[250px]">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Height Adjustable seat and handle height
            </div>
          </div>

          {/* Descriptions2 */}
          <div className="h-8 w-[260px] px-2.5 py-1.5 scale-50 absolute top-[120px] left-[200px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex md:scale-75 md:top-[200px] md:left-[450px] lg:scale-100 lg:top-[180px] lg:left-[950px]">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Light weight Mid steel frame
            </div>
          </div>

          {/* Descriptions3 */}
          <div className="h-8 px-2.5 py-1.5 scale-50 absolute top-[245px] left-[120px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex md:scale-75 md:top-[360px] md:left-[300px] lg:scale-100 lg:top-[380px] lg:left-[680px]">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Pedal Free Design
            </div>
          </div>
          {/* Descriptions4 */}
          <div className=" absolute h-8 px-2.5 py-1.5 scale-50 top-[320px] left-[60px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex md:scale-75 md:top-[480px] md:left-[160px] lg:scale-100 lg:top-[550px] lg:left-[550px]">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Puncture proof EVA tyre
            </div>
          </div>
        </div>

        <div className="flex flex-row w-[95vw] mt-[50px] m-auto lg:mt-[-220px]">
          <div className="video flex-row flex-wrap w-[55%] lg:h-[200px] h-[px] mt-[px]">
            <Link to="/ourvideo">
              <div className="hidden -rotate-90 lg:w-[30%] ml-[-120px] md:ml-[-110px] lg:mt-[0px] lg:ml-[40px] lg:mr-[280px] lg:h-[%]  mt-[30px] inline-block opacity-100 text-black text-[21px] font-extrabold font-['Plus Jakarta Sans']">
                <p className="mr-[100px] lg:mr-0">Watch our video</p>
              </div>
              <div className="w-[70%] lg:w-[20%] lg:h-[200px] lg:ml-[150px] ml-[30px] mt-[0px] rounded-xl overflow-hidden inline-block">
                <video src="/HeroVideo.mp4" autoPlay muted loop></video>
              </div>
            </Link>
          </div>

          <div className="flex-row flex-wrap justify-end items-end w-[45%] h-[px] lg:mt-[80px]">
            <div className="w-[100%] flex-col flex-wrap text-black font-semibold font-['Plus Jakarta Sans']  font-semibold items-center justify-center text-sm mr-[auto] lg:text-2xl md:text-xl">
              Marvelous yet simple toys which will bring delightful experience
              to the little one
            </div>
            <Link to="/FAQ">
              <div className="px-10 py-2.5 lg:bg-white/20 rounded-[50px] border lg:border-white border-blue-500 lg:backdrop-blur-[10px] justify-center items-center gap-2.5 inline-flex lg:ml-[500px] mt-[20px] lg:mt-[0px]">
                <div className="lg:text-white text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-[27px] tracking-wide">
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
