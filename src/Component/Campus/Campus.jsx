import React from 'react'
import './Campus.css'
import gallrey_1 from '../../assets/gallery-1.png'
import gallrey_2 from '../../assets/gallery-2.png'
import gallrey_3 from '../../assets/gallery-3.png'
import gallrey_4 from '../../assets/gallery-4.png'
import btnarrow from '../../assets/white-arrow.png'

export const Campus = () => {
  return (
    <div className='campus container'>
        <div className="gallery">
            <img src={gallrey_1} alt="" />
            <img src={gallrey_2} alt="" />
            <img src={gallrey_3} alt="" />
            <img src={gallrey_4} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={btnarrow} alt="" /></button>
    </div>
  )
}
