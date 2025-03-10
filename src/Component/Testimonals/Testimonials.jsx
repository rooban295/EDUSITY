import React,{useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


export const Testimonials = () => {

  const slider=useRef();
  let tx = 0;
  const handelForward=()=>{
    // console.log('button clicked');
    if(tx > -50){
      tx-=25;
      // console.log(tx);
    }
    slider.current.style.transform=`translateX(${tx}%)`;
    // console.log('end');
  }

  function handleBackward(){
    if(tx<0){
      tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={handelForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={handleBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>william Jackson</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Quidem blanditiis
                  corrupti voluptas expedita, repellendus
                   nobis odio dolor voluptate, 
                   dignissimos quasi sapiente minima 
                   doloremque recusandae. Fugit doloribus 
                   facere earum sit sed.</p>
            </div>
          </li>


          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Thison Rooban J</h3>
                <span>Edusity,USA</span>
                  </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Quidem blanditiis
                  corrupti voluptas expedita, repellendus
                   nobis odio dolor voluptate, 
                   dignissimos quasi sapiente minima 
                   doloremque recusandae. Fugit doloribus 
                   facere earum sit sed.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Kingsley Jacbo</h3>
                <span>Edusity,USA</span>
                  </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Quidem blanditiis
                  corrupti voluptas expedita, repellendus
                   nobis odio dolor voluptate, 
                   dignissimos quasi sapiente minima 
                   doloremque recusandae. Fugit doloribus 
                   facere earum sit sed.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Kishore Kumar</h3>
                <span>Edusity,USA</span>
                  </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Quidem blanditiis
                  corrupti voluptas expedita, repellendus
                   nobis odio dolor voluptate, 
                   dignissimos quasi sapiente minima 
                   doloremque recusandae. Fugit doloribus 
                   facere earum sit sed.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
