const Title = ({ title, info, children }) => {
  return (
    <div className="container pb-10">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
        <h2 className="mb-4 md:mb-0 font-medium text-2xl lg:text-[34px] xl:text-[40px] leading-[112%] xl:leading-[110%] max-w-[80%] md:max-w-[300px] lg:max-w-[443px]">
          {title}
        </h2>
        <p className="md:max-w-[300px] lg:max-w-[424px] lg:text-lg">
          {info} {children}
        </p>
      </div>
    </div>
  );
};

export default Title;
