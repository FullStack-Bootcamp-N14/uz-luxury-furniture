import Navigate from "@/assets/svg/navigate.svg";
import { SliderCard } from "./slider-card";
import Title from "@/components/ui/Title";

export const Arrivals = () => {
  return (
    <section className="arrivals py-12">
      <Title title="New Arrivals" info="More Products">
        <img src={Navigate} alt="" className="w-[20px] h-[20px] " />
      </Title>
      <div className="container">
        <div className="pt-[48px]">
          <SliderCard />
        </div>
      </div>
    </section>
  );
};
