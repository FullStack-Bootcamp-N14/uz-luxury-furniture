import Navigate from "@/assets/svg/navigate.svg";
import Title from "../../../../components/ui/Title";

export const ArticleTitle = () => {
  return (
    <section className="arrivals py-12">
      <Title title="Articles" info="More Articles">
        <img src={Navigate} alt="" className="w-[20px] h-[20px] " />
      </Title>
      <div className="container">
      </div>
    </section>
  );
};
