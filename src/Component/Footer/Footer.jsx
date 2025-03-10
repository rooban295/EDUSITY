import React from 'react'
import './Footer.css'
export const Footer = () => {
    const copyrightYear=new Date().getFullYear();
  return (
    <div className='footer'>
        <p>{copyrightYear} Edusity. All right reserved</p>
        <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
         </ul>
    </div>
  )
}
