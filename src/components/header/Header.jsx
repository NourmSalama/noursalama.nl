import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpeg'
import HeaderSocials from './HeaderSocials'
import { Typewriter } from 'react-simple-typewriter'




const Header = () => {
  return (
    <header>
      <div className="container header__container">
         <div className="write__wrapper">
          <Typewriter words={['Hello', 'Bonjour ', 'Hola', 'Ciao', 'Privet' , 'Nǐ hǎo', 'Kon’nichiwa', 'Merhaba' , 'Guten tag']} loop={5} typeSpeed={80} cursorcursorStyle='|'/>
        </div>
        <h1>Nour Salama</h1>
        <div className="write__wrapper">
          <Typewriter words={['Junior Software Developer', 'Student Software Engineering']}  loop={5} typeSpeed={80} cursorcursorStyle='|'/>
        </div>
      
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down </a>
      </div>
    </header>
  )
}

export default Header

