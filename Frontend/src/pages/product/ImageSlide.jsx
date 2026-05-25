import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";

import "swiper/css/thumbs";

import "swiper/css/free-mode";
import { useState } from "react";
import { useEffect } from "react";

const ImageSlide = ({ images, alt }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const [viewPort,setViewPort] = useState(window.innerWidth);
//   const [thumbSlideGap,setThumbSlideGap] = useState(-110)


// useEffect(()=>{

// if(viewPort < 1280){
   
// setThumbSlideGap(-140);
// }

// if(viewPort < 1024){
   
// setThumbSlideGap(-650);
// }

// },[viewPort,thumbSlideGap])




  return (
    <div className="w-full  lg:max-w-80 xl:max-w-md space-y-3">
      <Swiper
        slidesPerView={1}
        modules={[Thumbs, FreeMode]}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="relative z-10 rounded-xl overflow-hidden"
      >
        {images.map((icon, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className=" w-full h-96 aspect-square ">
                <img src={icon} alt="" className=" w-full h-96 object-cover" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper overflow-hidden cursor-pointer "
      >
        {images.map((icon, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className=" h-20 w-20 rounded-sm aspect-square">
                <img
                  src={icon}
                  alt=""
                  className="rounded-sm object-cover h-20 w-20"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlide;
