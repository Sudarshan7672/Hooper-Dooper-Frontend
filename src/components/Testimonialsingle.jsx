import quotesign from '../assets/quotesign.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {PrevArrow, NextArrow} from "./SliderArrow";

export default function Testimonialsingle() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplay:true,
    pauseOnHover:true,
  };

  return (
    <Slider {...settings}>
      {Testimonialsarray.map((testimonial, index) => (
        <div key={index} className="w-full sm:w-[90vw] m-auto flex justify-center items-center">
        <div className="w-full sm:w-[90vw] m-auto mt-[30px] md:mt-[70px] lg:mt-[100px] flex justify-center items-center">
          {/* <div className="w-full sm:w-[20%] flex justify-center">
              <i className="fa-solid fa-arrow-left text-3xl"></i>
          </div> */}
          <div className="w-full sm:w-[60%] flex justify-center">
            <div className="w-full sm:w-[100%] rounded-lg flex-col flex-wrap justify-center bg-white items-center ">
              <p className="w-[90%] pb-4 sm:w-[80%] block ml-auto mr-auto lg:mt-[20px]">
                <img src={quotesign} className="block w-[30px] sm:w-[40px] text-center lg:h-[30px]" alt="" />
                {testimonial.review}”
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-[20px] mb-[20px] font-bold">
          <p>{testimonial.name}</p>
        </div>
      </div>
      
      ))}
    </Slider>
  );
}




const Testimonialsarray = [
    {
        id: 1,
        name: "Sudarshan Kakad",
        review: "Got on time, thanks to seller and courier partner. My lil son is so happy to have it, yet he is asking pappa where is the paddele!!! There is a issue with sit adjustment it got loosen frequently. Thinking to put some packings with the clamp. Very competitive prise compare to others but could be more lesser yet, considering material of construction.",
    },
    {
        id: 2,
        name: "Aditya Kakad",
        review: "Got on time, thanks to seller and courier partner. My lil son is so happy to have it, yet he is asking pappa where is the paddele!!! There is a issue with sit adjustment it got loosen frequently. Thinking to put some packings with the clamp. Very competitive prise compare to others but could be more lesser yet, considering material of construction.",
    },
    {
        id: 3,
        name: "Sudarshan Kakad",
        review: "Got on time, thanks to seller and courier partner. My lil son is so happy to have it, yet he is asking pappa where is the paddele!!! There is a issue with sit adjustment it got loosen frequently. Thinking to put some packings with the clamp. Very competitive prise compare to others but could be more lesser yet, considering material of construction.",
    },
    {
        id: 4,
        name: "Sudarshan Kakad",
        review: "Got on time, thanks to seller and courier partner. My lil son is so happy to have it, yet he is asking pappa where is the paddele!!! There is a issue with sit adjustment it got loosen frequently. Thinking to put some packings with the clamp. Very competitive prise compare to others but could be more lesser yet, considering material of construction.",
    },
    {
        id: 5,
        name: "Sudarshan Kakad",
        review: "Got on time, thanks to seller and courier partner. My lil son is so happy to have it, yet he is asking pappa where is the paddele!!! There is a issue with sit adjustment it got loosen frequently. Thinking to put some packings with the clamp. Very competitive prise compare to others but could be more lesser yet, considering material of construction.",
    },
    {
      id: 6,
      name: "Sudarshan Kakad",
      review: "Got on time, thanks to seller and courier partner. My lil son is so happy to have it, yet he is asking pappa where is the paddele!!! There is a issue with sit adjustment it got loosen frequently. Thinking to put some packings with the clamp. Very competitive prise compare to others but could be more lesser yet, considering material of construction.",
  },
  {
    id: 7,
    name: "Sudarshan Kakad",
    review: "Got on time, thanks to seller and courier partner. My lil son is so happy to have it, yet he is asking pappa where is the paddele!!! There is a issue with sit adjustment it got loosen frequently. Thinking to put some packings with the clamp. Very competitive prise compare to others but could be more lesser yet, considering material of construction.",
},
{
  id: 8,
  name: "Sudarshan Kakad",
  review: "Got on time, thanks to seller and courier partner. My lil son is so happy to have it, yet he is asking pappa where is the paddele!!! There is a issue with sit adjustment it got loosen frequently. Thinking to put some packings with the clamp. Very competitive prise compare to others but could be more lesser yet, considering material of construction.",
},
]