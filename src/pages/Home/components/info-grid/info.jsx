import { InfoCard } from "./info-card";
import { InfoData } from "@/pages/home/data/data";

export const Info = () => {
  return (
    <section className="info pb-12">
      <div className="container">
        <div className=" grid grid-cols-[1fr_1fr] gap-x-2 gap-y-6 xl:flex xl:gap-6">
          {InfoData.map((item, index) => (
            <InfoCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
