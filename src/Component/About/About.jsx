import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_img from '../../assets/play-icon.png'
export const About = () => {
  return (
    <div className='about'>

        <div className="about-right">
            <img src={about_img} alt="" />
            <img src={play_img} alt="" />
        </div>

        <div className="about-left">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tommorow's Leader today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Provident quaerat suscipit natus ipsum rem repellat aperiam 
                 aliquid fugit eum voluptate quisquam excepturi deleniti nobis, 
                 tempora voluptatem itaque. Eveniet cupiditate quo corrupti minima
                  accusamus natus placeat? Ipsa dolorum itaque asperiores assumenda 
                  distinctio qui quidem odio, neque ducimus. Voluptates, cumque eos.
                   Laboriosam.</p>
            <p>Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Illo, eaque? Maiores ipsa provident 
                laudantium repellat, adipisci ad tempora mollitia non tenetur quod? 
                Illum, libero. Officiis ipsam nesciunt, magni laborum omnis sit nobis 
                quaerat itaque, quidem, officia corporis optio temporibus inventore?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laborum nemo, aliquid autem consectetur, quaerat repellendus, 
                qui neque aliquam vel esse architecto facere ipsam sed? 
                Quibusdam est impedit doloribus quod saepe.</p>
        </div>   

    </div>
  )
}
