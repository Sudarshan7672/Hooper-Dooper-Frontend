import tick from "./assets/tick.webp";
import cyclehome from "./assets/cycle.webp";
import { Link } from "react-router-dom";
// import productvideo from './assets/'

export default function HeroMobile() {
  return (
    <>
      <div>
        <div className="w-[100vw] block model pt-[180px] lg:pt-[150px] lg:pb-[60px]">
          <p className="text-center flex flex-wrap m-auto flex-col justify-center items-center text-[100px] mt-[-100px] font-bold text-white/50 leading-1 w-full md:text-[150px] lg:text-[250px] ">
            HOOPER
          </p>
          <p className="text-center flex flex-wrap flex-col justify-center items-center text-[100px] font-bold text-white/50 leading-none md:text-[150px] lg:text-[250px]">
            DOOPER
          </p>
          <div className="mt-[-300px] pb-[30px] md:mt-[-510px] md:scale-75 lg:mt-[-950px] ">
            <img src={cyclehome} className="lg:scale-75" alt="" />
          </div>

          {/* Descriptions1 */}
          <div className="h-8 px-2.5 py-1.5 scale-50 absolute top-[125px] left-[-80px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex md:scale-75 md:top-[170px] md:left-[0px] lg:scale-100 lg:top-[220px] lg:left-[250px]">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Height Adjustable seat and handle height
            </div>
          </div>

          {/* Descriptions2 */}
          <div className="h-8 w-[260px] px-2.5 py-1.5 scale-50 absolute top-[150px] left-[215px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex md:scale-75 md:top-[200px] md:left-[470px] lg:scale-100 lg:top-[240px] lg:left-[920px]">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Light weight Mid steel frame
            </div>
          </div>

          {/* Descriptions3 */}
          <div className="h-8 px-2.5 py-1.5 scale-50 absolute top-[250px] left-[120px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex md:scale-75 md:top-[340px] md:left-[300px] lg:scale-100 lg:top-[450px] lg:left-[700px]">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Pedal Free Design
            </div>
          </div>
          {/* Descriptions4 */}
          <div className=" absolute h-8 px-2.5 py-1.5 scale-50 top-[330px] left-[50px] bg-white rounded-[15px] justify-center items-center gap-2.5 inline-flex md:scale-75 md:top-[450px] md:left-[160px] lg:scale-100 lg:top-[620px] lg:left-[550px]">
            <div className="w-[18px] h-[18px] bg-[#002aff] rounded-[9px] flex-col justify-center items-center inline-flex">
              <img src={tick} alt="" />
            </div>
            <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">
              Puncture proof EVA tyre
            </div>
          </div>
        </div>

        <div className="flex flex-row w-[95vw] mt-[50px] m-auto lg:mt-[-180px]">
          <div className="video flex-row flex-wrap w-[55%] lg:h-[200px] h-[px] mt-[px]">
            <Link to="/ourvideo">
              <div className="-rotate-90 lg:w-[30%] ml-[-120px] md:ml-[-110px] lg:mt-[0px] lg:ml-[40px] lg:mr-[280px] lg:h-[%]  mt-[30px] inline-block opacity-100 text-black text-[21px] font-extrabold font-['Plus Jakarta Sans']">
                <p className="mr-[100px] lg:mr-0">Watch our video</p>
              </div>
              <div className="w-[70%] lg:w-[20%] lg:h-[200px] lg:ml-[200px] ml-[50px] mt-[-80px] rounded-xl overflow-hidden inline-block">
                <video src="/HeroVideo.mp4" autoPlay muted loop></video>
              </div>
            </Link>
          </div>

          <div className="flex-row flex-wrap justify-end items-end w-[45%] h-[px]">
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
