import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import "swiper/css";

import "swiper/css/thumbs";

import "swiper/css/free-mode";
import { useState } from "react";
import { useEffect } from "react";
import ImageStateBlock from "../../components/StatesShowing.jsx/ImageStateBlock";

const ImageSlide = ({ images, alt }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full  lg:max-w-80 xl:max-w-md space-y-3">
      <Swiper
        slidesPerView={1}
        modules={[Thumbs, FreeMode]}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        className="relative z-10 rounded-xl overflow-hidden"
      >
        {images.map((src, index) => {
          return (
            <SwiperSlide key={index} className="">
              <ImageStateBlock
                src={src}
                alt={alt}
                parentProperties={"w-full h-96 aspect-square "}
                childProperties={"w-full h-96 object-cover"}
              />
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
        {images.map((src, index) => {
          return (
            <SwiperSlide key={index} className="">
              <div className=" h-20 w-20 rounded-sm aspect-square">
                <img
                  src={src}
                  alt={alt}
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
