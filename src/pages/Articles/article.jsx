import React from 'react'
import { ArticleTitle } from './components/Articletitle/ArticleTitle'
import { ArticleCard } from './components/ArticleCard/articleCard'
import { ArticleData } from './components/Datas/articledatas'
import "./article.css"

export const Article = () => {
  return (
    <>
      <section className='py-[80px]'>
        <div className='container'>
          <ArticleTitle title={"Articles"} info={"More Articles"} >
          </ArticleTitle>
          <div className='flex flex-wrap items-center justify-between pt-[40px] gap-[25px]'>
            {ArticleData.map((item) => (
              < ArticleCard key={item.id} title={item.title} subtitle={item.subtitle} img={item.img} navigate={item.navigate} />
            ))}
          </div>
        </div>
      </section >
    </>
  )
}
