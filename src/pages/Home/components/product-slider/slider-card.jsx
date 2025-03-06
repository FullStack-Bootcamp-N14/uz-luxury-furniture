import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "./slider.css";
import { ProductCard } from "@/components/main/ProductCard";
import axios from "@/api/axios.js";
import { useQuery } from "@tanstack/react-query";

export const SliderCard = () => {
  const getByCategory = async (category) => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      console.log(data);

      return data.products;
    } catch (error) {
      console.log(error);
    }
  };
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => getByCategory("furniture"),
  });

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error.message}</div>}
      {data && (
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
          {data?.map((item) => (
            <SwiperSlide key={item.id} className="mb-[45px] w-[231px]">
              <ProductCard productData={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
