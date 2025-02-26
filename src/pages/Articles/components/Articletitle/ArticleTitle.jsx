import "./articletitle.css"

export const ArticleTitle = ({title,info,children}) => {
  return (
    <div className="article_title">
      <div className="container">
        <div className="flex justify-between items-center ">
          <h2 className=" font-medium text-[34px] leading-[112%] text-[#000] w-[125px] xl:text-[40px] xl:leading-[110%] title_text">
            {title}
          </h2>
          <p className=" items-end gap-[4px] font-medium text-[16px] leading-[145%] border-b-1 flex">
            {info} {children}
          </p>
        </div>
      </div>
    </div>
  );
};
