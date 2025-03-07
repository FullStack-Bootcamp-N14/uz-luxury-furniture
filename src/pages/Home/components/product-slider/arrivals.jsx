import Navigate from "@/assets/svg/navigate.svg";
import { SliderCard } from "./slider-card";
import Title from "@/components/ui/Title";
import { Link } from "react-router-dom";

export const Arrivals = () => {
  return (
    <section className="arrivals pb-12">
      <Title title="New Arrivals" info="">
        <Link
          to="/shop"
          className="flex items-center gap-x-2 border-b border-gray-800"
        >
          <span>More Products</span>
          <img src={Navigate} alt="arrow-left" className="w-[20px] h-[20px] " />
        </Link>
      </Title>
      <div className="container">
        <div className="">
          <SliderCard />
        </div>
      </div>
    </section>
  );
};
