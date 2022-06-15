import React from 'react'
import './portfolio.css'
import movie from '../../assets/movies.jpeg'
import barber from '../../assets/barber.jpeg'
import food from '../../assets/food.jpeg'

const Portfolio = () => {
  return (
    <section id="portfolio">

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
          <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={movie} alt="project" />
          </div>
          <h3>Movie API</h3>
          <div className="portfolio__cta">
            <a href="https://github.com/NourmSalama/MovieAPI" className='btn'>Github</a>
            <a href="https://github.com/NourmSalama/MovieAPI" className='btn btn-primary'>Not avaible</a>
          </div>
          </article>  

          <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={barber} alt="project" />
          </div>
          <h3>Kapsalon Cleopatra</h3>
          <div className="portfolio__cta">
            <a href="https://github.com/NourmSalama/kapsalon_cleopatra" className='btn'>Github</a>
            <a href="https://github.com/NourmSalama/kapsalon_cleopatra" className='btn btn-primary' >Live Demo</a>
          </div>
          </article>     

          <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={food} alt="project" />
          </div>
          <h3>La roma</h3>
          <div className="portfolio__cta">
            <a href="https://github.com" className='btn'>Github</a>
            <a href="https://github.com" className='btn btn-primary'>Live Demo</a>
          </div>
          </article>  
      </div>

    </section>
  )
}

export default Portfolio