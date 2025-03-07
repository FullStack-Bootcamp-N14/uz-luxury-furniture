import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import SliderImg from "@/assets/png/slider-img1.png";
import "./home-slider.css";

const data = [
  {
    id: 1,
    url: SliderImg,
  },
  {
    id: 2,
    url: SliderImg,
  },
  {
    id: 3,
    url: SliderImg,
  },
];

const HomeSlider = () => {
  return (
    <>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="home__slider"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                className="w-full h-[304px] sm:h-[55vh] xl:h-[70vh] object-cover"
                src={item.url}
                alt="img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeSlider;
