import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductImgSlider } from "../product-img-slider/product-img-slider";
import { ProductDetailInfo } from "../product-detail-info/product-detail-info";
import { ProductData } from "../../data/data.js";

export const ProductDetail = () => {
  const [page, setPage] = useState(["/", "Shop", "Living Room", "Product"]);
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [colorIndex]);
  return (
    <section className="">
      <div className="container">
        <div className=" ">
          <div className=" flex gap-[16px] items-center py-[16px]">
            {page.map((item, index) => (
              <Link
                key={index}
                to={item}
                className={`flex items-center font-medium text-[13px] leading-[167%] xl:text-[15px] xl:leading-[171%] ${
                  page.length === index + 1
                    ? "text-[#121212]"
                    : "text-[#605f5f]"
                }`}
              >
                {item === "/" ? "Home" : item}
                {page.length !== index + 1 ? " >" : ""}
              </Link>
            ))}
          </div>
          <div className=" xl:flex gap-[63px]">
            <div className=" pb-[16px]">
              {" "}
              <ProductImgSlider
                imgs={ProductData[0]?.choose_color}
                skidka={ProductData[0]?.skidka}
                type={ProductData[0]?.type}
                ImgIndex={colorIndex}
              />
              <div className=" mt-6 hidden gap-6 xl:flex w-[167px] h-[167px]">
                {ProductData[0].choose_color[colorIndex]?.imgs.map(
                  (item, index) =>
                    index !== 0 ? (
                      <img
                        src={item}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      ""
                    )
                )}
              </div>
            </div>
            <div className="">
              <ProductDetailInfo
                data={ProductData[0]}
                setColorIndex={setColorIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
