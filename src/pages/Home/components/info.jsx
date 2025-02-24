import { InfoCard } from "./infoCard";
import { InfoData } from "../data/data";

export const Info = () => {
  return (
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
  );
};
