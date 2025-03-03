import React from "react";
import { ArticleTitle } from "./ArticleTitle";
import { ArticleCard } from "./articleCard";
import { ArticleData } from "../../data/articledatas.js";

export const Article = () => {
  return (
    <>
      <section className="pb-4 lg:pb-20">
        <div className="container">
          <ArticleTitle
            title={"Articles"}
            info={"More Articles"}
          ></ArticleTitle>
          <div className="flex flex-wrap lg:flex-nowrap pt-[40px] lg:gap-x-6">
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
