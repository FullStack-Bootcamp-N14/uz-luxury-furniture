import React from 'react'
import { ArticleTitle } from './components/Articletitle/ArticleTitle'
import { ArticleCard } from './components/ArticleCard/articleCard'
import { ArticleData } from './components/Datas/articledatas'

export const Article = () => {
  return (
    <>
      <section className=' w-[1440px] h-[657px]'>
        <ArticleTitle />
        <div className=' flex items-center justify-between pt-[40px] w-[1121px] h-[413px] gap-[25px] mr-[auto] ml-[auto]'>
          {ArticleData.map((item) => (
            <ArticleCard key={item.id} title={item.title} subtitle={item.subtitle} img={item.img} navigate={item.navigate} />
          ))}
        </div>
      </section>
    </>
  )
}
