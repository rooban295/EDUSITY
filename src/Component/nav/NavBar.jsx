import React,{useState,useEffect,useRef} from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll';
import menu from '../../assets/menu-icon.png'

export const NavBar = () => {

  const[sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true):setSticky(false);
    })
  },[])

  const menuicon=useRef()
  let menu_icon=false;
  const handlemenu=()=>{
    menu_icon=!menu_icon;
    menu_icon?menuicon.current.style.right='0px':menuicon.current.style.right='-200px'
  }
  return (
   
    <div>
        <nav className={`container ${sticky?'dark-nav':''}`}>
            <img src={logo} alt="logo" className='logo'/>
            <ul ref={menuicon}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-250} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-120} duration={500}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-250} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-270} duration={500}>Testimonial</Link></li>
                <li><button className='btn'><Link to='contact' smooth={true} offset={0} duration={500}>Contact us</Link></button></li>
            </ul>
            <img src={menu} alt=""  className='menu' onClick={handlemenu} />
        </nav>
    </div>
  )
}
