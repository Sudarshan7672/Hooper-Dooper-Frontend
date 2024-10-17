import quotesign from '../assets/quotesign.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import {PrevArrow, NextArrow} from "./SliderArrow";

export default function Testimonialsingle() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
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
        name: "Sharang",
        review: "Does exactly what it is supposed to do! Teaches my 2.5 year old to balance without the worry to pedal or break. Size has to be small so that the child can rest his/her feet on the ground. It takes a couple of days for the child to get hang of it. Best fun is if you've a gentle slope available for the child's to play. Prompt delivery, good communication, easy assembly & decent quality product.",
    },
    {
        id: 2,
        name: "Ashifa Sarkar Vasi",
        review: "My daughter is 3 years old and has never ridden a tricycle or any other vehicle. She and we were keen she learn to ride a bike so I did a lot of research on the balance bike concept. I was sold on learning to balance first and then pedal later without training wheels. And I looked at foreign and domestic versions before I settled on this.",
    },
    {
        id: 3,
        name: "Hitesh Choudhary",
        review: "Very good product. Unique design and affordable too. My daughter likes it very much. Thanks for introducing this unique concept in biking.",
    },

]