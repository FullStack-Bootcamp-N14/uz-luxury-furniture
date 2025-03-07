import { ArticleCard } from "./articleCard";
import { ArticleData } from "../../data/articledatas.js";
import Title from "@/components/ui/Title";
import Navigate from "@/assets/svg/navigate.svg";
import { Link } from "react-router-dom";

export const Article = () => {
  return (
    <>
      <section className="pb-4 lg:pb-20">
        <Title title="New Arrivals" info="">
          <Link
            to="/articles"
            className="flex items-center gap-x-2 border-b border-gray-800"
          >
            <span>More Articles</span>
            <img
              src={Navigate}
              alt="arrow-left"
              className="w-[20px] h-[20px] "
            />
          </Link>
        </Title>
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap lg:gap-x-6">
            {ArticleData.map((item) => (
              <ArticleCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                img={item.img}
                navigate={item.navigate}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
