import React from "react";
import background from "@/assets/png/shop-hero.png";
import mobileBackground from "@/assets/png/shop-hero-mobile.png";

const Hero = ({ title, description }) => {
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
            <h1 className="font-second font-medium text-[36px] md:text-[54px] leading-[107%] tracking-[-0.02em] text-brand mt-4 md:mt-6">
              {title}
            </h1>
            <h3 className="font-second font-medium text-[16px] md:text-[20px] leading-[160%] text-brand mt-4 md:mt-6">
              {description}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
