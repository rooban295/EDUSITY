import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './Component/nav/NavBar'
import { Hero } from './Component/Hero/Hero'
import { Programs } from './Component/Programs/Programs'
import { Title } from './Component/Title/Title'
import { About } from './Component/About/About'
import { Campus } from './Component/Campus/Campus'
import { Testimonials } from './Component/Testimonals/Testimonials'
import { Contact } from './Component/Contactus/Contact'
import { Footer } from './Component/Footer/Footer'

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Title subTitle='Our Program' title='What we are Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What student says'/>
      <div className="container">
      <Testimonials/>
      <Title subTitle='Contact us' title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App
