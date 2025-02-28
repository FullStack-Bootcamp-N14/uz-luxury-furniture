import Reating from "@/assets/svg/reating.svg";

export const ProductCard = ({
  img,
  title,
  reating,
  price,
  old_price,
  skidka,
}) => {
  return (
    <div>
      <div className="relative">
        <img
          src={img}
          alt=""
          className="w-full object-cover  h-[308px] xl:h-[349px]"
        />
        <span className=" absolute py-[4px] px-[14px] top-[16px] left-[16px] bg-[#fff] rounded-[4px]  ">
          <p className="font-bold text-[16px] leading-[100%] text-[#000] text-center">
            NEW
          </p>
        </span>
        {skidka ? (
          <span className=" absolute py-[4px] px-[14px] top-[48px] left-[16px] bg-[#38CB89] rounded-[4px]">
            <p className="font-bold text-[16px] leading-[100%] text-[#fff] text-center">
              {skidka}
            </p>
          </span>
        ) : (
          ""
        )}
      </div>
      <div className="pt-[11px]">
        <div>
          <img src={Reating} alt="" />
        </div>
        <h3 className=" font-semibold text-[16px] leading-[162%] text-[#000] mt-1">
          {title}
        </h3>
        <div className=" mt-1 flex gap-[12px]">
          {" "}
          <p className="font-semibold text-[14px] leading-[162%] text-[#000]">
            $ {price}
          </p>
          <p className="font-semibold text-[14px] leading-[162%] text-[#666464] line-through">
            {old_price}
          </p>
        </div>
      </div>
    </div>
  );
};
