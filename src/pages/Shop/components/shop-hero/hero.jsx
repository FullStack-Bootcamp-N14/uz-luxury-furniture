import React from "react";
import background from "@/assets/png/shop-hero.png";
import mobileBackground from "@/assets/png/shop-hero-mobile.png";

const Hero = () => {
  const isMobile = window.innerWidth <= 375;
  const backgroundImage = isMobile ? mobileBackground : background;

  return (
    <section>
      <div className="container">
        <div
          className="flex justify-center items-center w-full h-[300px] md:h-[392px] bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="text-center max-w-[375px] md:max-w-[413px]">
            <div className="mb-2">
              <span className="text-[#605f5f] font-medium text-sm">
                Home {"> "}
              </span>
              <span className="text-[#121212] font-medium text-sm">Shop</span>
            </div>

            <h1 className="font-second font-medium text-[36px] md:text-[54px] leading-[107%] tracking-[-0.02em] text-brand mt-4 md:mt-6">
              Shop Page
            </h1>

            <h3 className="font-second font-medium text-[16px] md:text-[20px] leading-[160%] text-brand mt-4 md:mt-6">
              Let’s design the place you always imagined.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
