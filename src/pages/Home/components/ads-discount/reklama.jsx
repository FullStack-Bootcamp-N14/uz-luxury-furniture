import img from "@/assets/image/home-reklama.png";
import { LeftIcon } from "@/assets/svg/leftIcon";

const ReklamaHome = () => {
  return (
    <div className="w-full flex justify-center mb-10 sm:mb-20">
      <div className="flex flex-col items-center md:flex-row bg-[#f3f5f7]">
        <div className="w-full md:w-[50%] overflow-hidden">
          <img className="w-full h-auto" src={img} alt="reclama rasmi" />
        </div>
        <div className="flex flex-col gap-[16px] mt-[32px] md:mt-0 md:w-[50%] mx-[32px] md:pr-[162px] md:pl-[72px] md:mx-0">
          <h3 className="font-bold text-base md:text-lg leading-[100%] uppercase text-[#377dff]">
            SALE UP TO 35% OFF
          </h3>
          <h2 className="font-medium text-[28px] md:text-[34px] leading-[112%] tracking-[-0.02em] text-[#141718]">
            HUNDREDS of <br />
            New lower prices!
          </h2>
          <p className="font-normal text-base md:text-xl leading-[162%] md:leading-[160%] text-[#141718]">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <button className="flex gap-[4px] items-center border-b border-[#141718] w-[91px] h-auto mt-[16px] mb-[58px]">
            <span className="font-medium text-sm leading-[171%] text-[#141718]">
              Shop Now
            </span>
            <LeftIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReklamaHome;
