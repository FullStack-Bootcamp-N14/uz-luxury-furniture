import React from "react";
import letterIcon from "@/assets/svg/letter-icon.svg";

export const Contact = () => {
  return (
    <section className="bg-[#F2F4F6] pt-[101px] pb-[93px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className=" font-medium font-(family-name:--second-family) text-[40px] leading-[110%] text-center tracking-[-0.01em]">
            Join Our Newsletter
          </h2>
          <p className="font-normal font-(family-name:--font-family) text-[18px] text-center mt-[8px]">
            Sign up for deals, new products and promotions
          </p>
          <form>
            <div className="flex justify-between border-b-[1px] w-[488px] mt-[32px] py-[12px]">
              <div className=" flex gap-[8px] w-[100%]">
                <img
                  src={letterIcon}
                  alt="icon"
                  className="w-[24px] h-[24px]"
                />
                <input
                  type="text"
                  placeholder="Email address"
                  className=" w-[90%] outline-0"
                />
              </div>
              <button className="cursor-pointer font-(family-name:--font-family)">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
