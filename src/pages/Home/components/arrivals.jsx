import Navigate from "../../../assets/svg/navigate.svg";
import { ProductCard } from "./product-card";
import { SliderCard } from "./sliderCard";

export const Arrivals = () => {
  return (
    <>
      <div className="container">
        <div className="">
          <div className=" flex justify-between">
            <h2 className=" font-medium text-[34px] leading-[112%] text-[#000] w-[125px] xl:text-[40px] xl:leading-[110%]">
              New Arrivals
            </h2>
            <p className=" hidden items-end gap-[4px] font-medium text-[16px] leading-[145%] border-b-1 xl:flex">
              More Products{" "}
              <img src={Navigate} alt="" className="w-[20px] h-[20px] " />
            </p>
          </div>
          <div className="pt-[48px]">
            <SliderCard />
          </div>
          <div className="w-[119px] mt-[40px]">
            <p className=" flex items-end gap-[4px] font-medium text-[14px] leading-[171%] border-b-1 xl:hidden">
              More Products{" "}
              <img src={Navigate} alt="" className="w-[20px] h-[20px] " />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
