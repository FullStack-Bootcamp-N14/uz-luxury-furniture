import React, { useState } from "react";
import Reatng from "@/assets/svg/reating.svg";
import { ProductDetailTimer } from "../product-detail-timer/product-detail-timer";
import BreadcrumbsIcon from "@/assets/svg/breadcrumbs-icon.svg";
import ProductCouterPlus from "@/assets/svg/product-couter-plus.svg";
import ProductCouterMinus from "@/assets/svg/product-couter-minus.svg";
import LikeIcon from "@/assets/svg/product-like-icon.svg";

export const ProductDetailInfo = ({ data, setColorIndex }) => {
  const [chekIndex, setIndex] = useState(0);
  const [tableColor, setTableColor] = useState(data.choose_color[0].cllor);
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className=" border-b-1 border-[#E8ECEF] pb-[24px]">
        <div className="flex items-center gap-2.5">
          <img src={Reatng} alt="" className="w-[88px]" />
          <p className="font-normal text-[13px] leading-[167%] text-[#141718] ">
            {data?.reviews} Reviews
          </p>
        </div>
        <h3 className="mt-[16px] font-semibold text-[40px] leading-[110%] text-[#141718]">
          {data?.title}
        </h3>
        <p className=" mt-[16px] max-h-[130px] max-w-[305px] overflow-hidden font-normal text-[16px] leading-[167%] text-[#6C7275] xl:max-w-[508px] xl:leading-[162%]">
          {data?.description}
        </p>
        <div className="mt-[16px] flex gap-3 items-center">
          <p className="font-medium text-[28px] leading-[121%] text-[#121212] ">
            ${data?.price.toFixed(2)}
          </p>
          <p className="font-medium text-[20px] leading-[140%] text-[#6C7275] line-through ">
            {data?.old_price ? "$" + data?.old_price?.toFixed(2) : ""}
          </p>
        </div>
      </div>
      {data.skidka ? (
        <div className="py-[24px] border-b-1 border-[#E8ECEF] ">
          <p className="font-normal text-[16px] leading-[162%] text-[#343839] mb-[12px]">
            Offer expires in:
          </p>
          <ProductDetailTimer expires_in={data.expires_in} />
        </div>
      ) : null}
      <div className="py-[24px] border-b-1 border-[#E8ECEF]">
        <div>
          <p className="font-semibold text-[16px] leading-[162%] text-[#6C7275]">
            Measurements
          </p>
          <p className="mt-2 font-normal text-[20px] leading-[160%] text-[#000000]">
            {data?.measurements}
          </p>

          <p className="mt-6 font-semibold text-[16px] leading-[162%] text-[#6C7275] flex items-center gap-1">
            Choose Color
            <img src={BreadcrumbsIcon} alt="" className="w-[12px] h-[12px]" />
          </p>
          <p className="mt-2 font-normal text-[20px] leading-[160%] text-[#000000]">
            {tableColor}
          </p>
        </div>
        <div className=" flex gap-[8px] mt-[16px] xl:gap-[16px]">
          {data?.choose_color?.map((item, index) => (
            <div
              key={index}
              className={`w-[72px] h-[72px] overflow-hidden ${
                chekIndex === index ? "border-2" : ""
              }`}
              onClick={() => {
                setIndex(index), setTableColor(Object.values(item)[0]);
                setColorIndex(index);
              }}
            >
              <img
                src={item.imgs[0]}
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="pt-[24px]">
          <div className="flex items-center gap-2">
            <div className="py-[6px] px-[8px] flex items-center gap-[13px] bg-[#F5F5F5] rounded-[4px] xL:px-[16px] xl:py-[12px] xl:gap-[23px]">
              <button onClick={() => setCount(count === 0 ? count : count - 1)}>
                <img src={ProductCouterMinus} alt="" />
              </button>
              <p className=" font-semibold text-[12px] leading-[167%] text-[#121212] xl:text-[16px] xl:leading-[162%]">
                {count}
              </p>
              <button onClick={() => setCount(count + 1)}>
                <img src={ProductCouterPlus} alt="" />
              </button>
            </div>
            <button
              onClick={() => setLike(!like)}
              className={`grow py-[3px] border-2 border-[#141718] rounded-[4px] flex gap-2 items-center justify-center font-medium text-[14px] leading-[171%] text-[#141718]
                xl:text-[18px] xl:leading-[178%] xl:py-[7px]
            ${like ? "text-[#fff] border-[#FF5630] bg-[#FF5630]" : ""}
            `}
            >
              <img src={LikeIcon} alt="" />
              Wishlist
            </button>
          </div>
          <button className="py-[5px] w-full bg-[#141718] rounded-[4px] mt-[20px]  font-medium text-[14px] leading-[171%] text-[#fff] xl:text-[18px] xl:leading-[178%] xl:py-[10px]">
            Add to Cart
          </button>
        </div>
      </div>
      <div className=" flex flex-col gap-2 py-[24px]">
        <div className="flex gap-[58px] ">
          <p className="w-[80px] font-normal text-[13px] leading-[167%] text-[#6C7275]">
            SKU
          </p>
          <p className="font-normal text-[13px] leading-[167%] text-[#141718]">
            {data.SKU}
          </p>
        </div>
        <div className=" flex gap-[58px]">
          <p className="w-[80px] font-normal text-[13px] leading-[167%] text-[#6C7275]">
            CATEGORY
          </p>
          <p className="font-normal text-[13px] leading-[167%] text-[#141718]">
            {data?.category}
          </p>
        </div>
      </div>
    </>
  );
};
