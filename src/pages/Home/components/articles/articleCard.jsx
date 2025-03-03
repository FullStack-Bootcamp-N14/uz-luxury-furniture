export const ArticleCard = ({ title, img, subtitle, navigate }) => {
  return (
    <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
      <div>
        <img src={img} alt="Img" className="w-full h-[283px] sm:h-auto" />
      </div>
      <div className=" pt-[24px]">
        <div>
          <h3>{title}</h3>
        </div>
        <div className="flex items-center">
          <p>{subtitle}</p>
          <div>
            <img src={navigate} alt="Img" />
          </div>
        </div>
      </div>
    </div>
  );
};
