import React from 'react'
import './about.css'
import ME from '../../assets/nour-laptop.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      {/* Foto */}
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        {/* Over mij */}
        <div className="about__content">

          {/* Cards sectie */}
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3 Of Learning</small>
            </article>
          
            {/* 2 card */}
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Companies</h5>
              <small>2+ Internships</small>
            </article>
    
            {/* 3 card */}
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>

          <p>
          Welcome to my portfolio website. I am Nour Salama 19 years old and a future technologist. 
          Currently I am a Junior Software-Developer and Student Software-Engineering at the Hogeschool of Breda.<br/>
          Why Software Engineering ?
          To make an impact on the world with the technical solutions. Like automation, research, accurate data etc. 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About