import React from 'react'
import './footer.css'
import {FaReact} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Nour</a>

      <div className="footer__copyright">
        <h2>
          Made by Nour in React <FaReact />
        </h2>
      </div>
    </footer>
  )
}

export default Footer