export const InfoCard = ({ title, description, icon }) => {
  return (
    <div className="py-[32px] px-[16px] bg-[#F3F5F7] w-full xl:px-[32px] xl:py-[48px] ">
      <div>
        <img src={icon} alt="" />
      </div>
      <h4 className=" font-semibold text-[14px] leading-[167%] mt-[16px] xl:text-[20px] xl:leading-[140%] xl:font-medium">
        {title}
      </h4>
      <p className=" font-normal text-[14px] leading-[157%] mt-[4px] w-[90px] xl:w-[198px]">
        {description}
      </p>
    </div>
  );
};
