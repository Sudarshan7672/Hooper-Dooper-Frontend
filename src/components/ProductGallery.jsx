import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
// import cyclehome from "../assets/ProductGalleryImage/cyclehome.webp";
import img1 from "../assets/ProductGalleryImage/img1.jpg";
import img2 from "../assets/ProductGalleryImage/img2.jpg";
import img3 from "../assets/ProductGalleryImage/img3.jpg";
import img4 from "../assets/ProductGalleryImage/img4.jpg";
import img5 from "../assets/ProductGalleryImage/img5.jpg";
import img6 from "../assets/ProductGalleryImage/img6.jpg";
import img7 from "../assets/ProductGalleryImage/img7.jpg";
import img8 from "../assets/ProductGalleryImage/img8.jpg";
import yellowlinehorizontal from "../assets/yellowlinehorizontal.webp";

export default function ProductGallery() {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      effect: "coverflow", // Enable Coverflow effect
      coverflowEffect: {
        rotate: 50, // Rotate slides for the effect
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true, // Enable shadows on slides
      },
      autoplay: {
        delay: 4000, // Increased delay for slower autoplay
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="w-full lg:w-[80vw] mb-12 m-auto mt-[20px] lg:mt-[50px]">
      <div className="Ourproduct ml-[10vw] flex justify-start items-center">
        <img
          src={yellowlinehorizontal}
          className="h-1 w-[20px] lg:w-[40px] mt-[10px] lg:mt-[15px]"
          alt=""
        />
        <p className="text-base lg:text-xl ml-4 lg:ml-[20px]">PRODUCT</p>
      </div>
      <div>
        <h1 className="text-2xl ml-[10vw] lg:text-3xl font-bold mt-[10px] lg:mt-[20px] font-sans">
          PRODUCT GALLERY
        </h1>
      </div>
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide card">
            <img src={img1} loading="lazy" alt="Image 1" />
          </div>
          <div className="swiper-slide card">
            <img src={img2} loading="lazy" alt="Image 2" />
          </div>
          <div className="swiper-slide card">
            <img src={img3} loading="lazy" alt="Image 3" />
          </div>
          <div className="swiper-slide card">
            <img src={img4} loading="lazy" alt="Image 4" />
          </div>
          <div className="swiper-slide card">
            <img src={img5} loading="lazy" alt="Image 5" />
          </div>
          <div className="swiper-slide card">
            <img src={img6} loading="lazy" alt="Image 6" />
          </div>
          <div className="swiper-slide card">
            <img src={img7} loading="lazy" alt="Image 7" />
          </div>
          <div className="swiper-slide card">
            <img src={img8} loading="lazy" alt="Image 8" />
          </div>
        </div>
        {/* Pagination */}
        <div className="swiper-pagination"></div>
        {/* Navigation buttons */}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        {/* Scrollbar */}
        {/* <div className="swiper-scrollbar"></div> */}
      </div>
    </div>
  );
}
