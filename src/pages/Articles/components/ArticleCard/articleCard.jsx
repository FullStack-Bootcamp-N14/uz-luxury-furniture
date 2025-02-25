import React from 'react'

export const ArticleCard = ({ title, img, subtitle,navigate }) => {
  return (
    <div>
      <div>
        <div className=' w-[357px] h-[325px] overflow-hidden'>
          <img src={img} alt="Img" />
        </div>
        <div className=' pt-[24px]'>
          <div className=' w-[352px] h-[28px]'>
            <h3>{title}</h3>
          </div>
          <div className="flex items-center">
            <p>{subtitle}</p>
            <div className='pt-[2px]'>
              <img src={navigate} alt="Img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
