import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./product-img-slider.css";
export const ProductImgSlider = ({ imgs, skidka, type ,ImgIndex}) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className=" relative w-[311px] h-[414px]  xl:w-[547px] xl:h-[728px]"
      >
        {imgs[ImgIndex]?.imgs.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center h-[300px] relative"
          >
            <img
              src={item}
              alt="Product"
              className="w-full h-full object-cover"
            />
            <span className=" px-[18px] py-[3px] absolute top-[20px] left-[24px] bg-[#fff] rounded-[4px]">
              <p className=" font-semibold text-[16px] leading-[162%] text-center text-[#121212]">
                {type}
              </p>
            </span>
            <span className=" px-[15px] py-[7px] absolute top-[60px] left-[24px] bg-[#38CB89] rounded-[4px]">
              <p className=" font-bold text-[18px] leading-[100%] text-center text-[#FEFEFE]">
                -{skidka}%
              </p>
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
