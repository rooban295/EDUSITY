import React from 'react'
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png'
export const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
          <h1>We Ensure Better eduction for a better world</h1>
          <p>Our cutting-edge curriculum is designed to empower studens with the knowledge,skills, and experiences needed to excel in the dynamic field of eduction</p>
          <button className="btn">Explore More <img src={dark_arrow} alt="" /> </button>
        </div>
    </div>
  )
}
