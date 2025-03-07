import item1 from "@/assets/png/ServiceGridItem1.png";
import item2 from "@/assets/png/ServiceGridItem2.png";
import item3 from "@/assets/png/ServiceGridItem3.png";
import ArrowRight from "@/assets/svg/ArrowRight";
import Title from "@/components/ui/Title";

const ServiceGrid = () => {
  return (
    <section className="mt-[40px] mb-[48px] md:mb-[32px]">
      <Title title="Simply Unique Simply Better." info="">
        <p className="text-gray-500 font-medium">
          <span className="text-gray-800">3legant</span> is a gift & decorations
          store based in HCMC, Vietnam. Est since 2019.
        </p>
      </Title>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr] gap-4 sm:gap-6">
          <div className="relative lg:col-span-1">
            <img src={item1} alt="Living Room" className="w-full" />
            <div className="absolute top-[48px] left-[48px]">
              <h3 className="text-[34px] font-medium">Living Room</h3>
              <div className="w-[99px] cursor-pointer">
                <p className="flex gap-[4px]">
                  Shop Now <ArrowRight />
                </p>
                <div className="w-full h-[2px] bg-black"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-[24px] lg:col-span-1">
            <div className="relative">
              <img src={item2} alt="Bedroom" className="w-full" />
              <div className="absolute bottom-[40px] left-[32px]">
                <h3 className="text-[34px] font-medium">Bedroom</h3>
                <div className="w-[99px] cursor-pointer">
                  <p className="flex gap-[4px]">
                    Shop Now <ArrowRight />
                  </p>
                  <div className="w-full h-[2px] bg-black"></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src={item3} alt="Kitchen" className="w-full" />
              <div className="absolute bottom-[40px] left-[32px]">
                <h3 className="text-[34px] font-medium">Kitchen</h3>
                <div className="w-[99px] cursor-pointer">
                  <p className="flex gap-[4px]">
                    Shop Now <ArrowRight />
                  </p>
                  <div className="w-full h-[2px] bg-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
