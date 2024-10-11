import CycleModel from "./cycleModel";

export default function Hero() {
  return (
    <div className="hero model lg:h-[100vh] pt-24">
      <p className="text-center flex flex-wrap flex-col justify-center items-center lg:text-[220px] lg:font-bold lg:text-white/50 lg:leading-1 ">
        HOOPER
      </p>
      <p className="text-center flex flex-wrap flex-col justify-center items-center lg:text-[220px] lg:font-bold lg:text-white/50 lg:leading-none ">
        DOOPER
      </p>
      <div className="lg:mt-[-650px] h-[100%] w-[100%]">
        <CycleModel />
      </div>
    </div>
  );
}
