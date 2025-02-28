import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "./slider.css";
import { ProductData } from "@/pages/Home/data/data";
import { ProductCard } from "./product-card";

export const SliderCard = () => {
  return (
    <Swiper
      modules={[Scrollbar]}
      spaceBetween={16}
      scrollbar={{ draggable: true }}
      direction="horizontal"
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="product__card--slider"
    >
      {ProductData.map((item) => (
        <SwiperSlide key={item.id} className="mb-[45px] w-[231px]">
          <ProductCard
            img={item.img}
            title={item.title}
            price={item.price}
            old_price={item.old_price}
            skidka={item.skidka}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
