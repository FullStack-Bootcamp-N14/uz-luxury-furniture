import Navigate from "@/assets/svg/navigate.svg";

export const ArticleTitle = ({ title, info }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="font-medium text-[40px] leading-[110%] spacing-[-0.01em]">
          {title}
        </h2>
      </div>
      <div className="flex items-center border-b">
        <p className="font-medium text-[16px] leading-[175%] spacing-[-0.03em]">
          {info}
        </p>
        <img src={Navigate} alt="" />
      </div>
    </div>
  );
};
