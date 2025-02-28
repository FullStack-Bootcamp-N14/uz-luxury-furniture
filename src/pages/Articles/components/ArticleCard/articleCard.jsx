import React from 'react'

export const ArticleCard = ({ title, img, subtitle,navigate }) => {
  return (
    <div>
      <div>
        <div>
          <img src={img} alt="Img" />
        </div>
        <div className=' pt-[24px]'>
          <div>
            <h3>{title}</h3>
          </div>
          <div className="flex items-center">
            <p>{subtitle}</p>
            <div >
              <img src={navigate} alt="Img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
