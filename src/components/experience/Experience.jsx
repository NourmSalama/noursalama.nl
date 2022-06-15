import React from 'react'
import './experience.css'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {RiVuejsLine} from 'react-icons/ri'
import {BsBootstrap} from 'react-icons/bs'
import {SiTailwindcss} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {SiPython} from 'react-icons/si'
import {SiLaravel} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {BsMicrosoft} from 'react-icons/bs'
import {SiTypescript} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skillset</h5>
      <h2>Frequently Used Techniques</h2>

      <div className="container experience__container">

        {/* Begin of frontend */}
        <div className="experience__frontend">
          <h3>Frequently Used Front-End Techniques</h3>
          <div className="experience__content">

            {/* HTML */}
            <article className="experience__details">
              <SiHtml5 />
              <div>
                <h4>Html</h4>
              </div>
              <small className="text-light"></small>
            </article>

            {/* CSS */}
            <article className="experience__details">
              <SiCss3 />
              <div>
                <h4>CSS</h4>
              </div>
              <small className="text-light"></small>
            </article>

            {/* Javascript */}
            <article className="experience__details">
              <SiJavascript />
              <div>
                <h4>Javascript</h4>
              </div>
              <small className="text-light"></small>
            </article>

            {/* VUE */}
            <article className="experience__details">
              <RiVuejsLine />
              <div>
                <h4>Vus.js</h4>
              </div>
              <small className="text-light"></small>
            </article>

            {/* Bootstrap */}
            <article className="experience__details">
              <BsBootstrap />
              <div>
                <h4>Bootstrap</h4>
              </div>
              <small className="text-light"></small>
            </article>

            {/* Tailwind css */}
            <article className="experience__details">
              <SiTailwindcss />
              <div>
                <h4>Tailwind Css</h4>
              </div>
              <small className="text-light"></small>
            </article>

          </div>
        </div>
        {/* END of frontend */}


        {/* Begin of backend */}
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">

            {/* PHP */}
            <article className="experience__details">
              <SiPhp />
              <div>
                <h4>PHP</h4>
              </div>
            </article>

            {/* Python */}
            <article className="experience__details">
              <SiPython />
              <div>
                <h4>Python</h4>
              </div>
            </article>

            {/* Laravel */}
            <article className="experience__details">
              <SiLaravel />
              <div>
                <h4>Laravel</h4>
              </div>
            </article>

            {/* SQL */}
            <article className="experience__details">
              <GrMysql />
              <div>
                <h4>MYSQL</h4>
              </div>
            </article>

            {/* C */}
            <article className="experience__details">
              <BsMicrosoft />
              <div>
                <h4>C ++</h4>
              </div>
              <small className="text-light"></small>
            </article>

            {/* TypeScript */}
            <article className="experience__details">
              <SiTypescript />
              <div>
                <h4>TypeScript</h4>
              </div>
            </article>

          </div>
        </div>
        {/* End of backend */}

      </div>
    </section>
  )
}

export default Experience