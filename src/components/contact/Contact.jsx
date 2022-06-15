import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact_options'>
            <MdOutlineEmail className='contact__option-icon' />
             <h4>Email</h4>
            <h5>n.salama.ict@hotmail.com</h5>
            <a href="mailto:n.salama.ict@hotmail.com">Send A Email</a>
          </article>

          <article className='contact_options'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Nour Salama</h5>
            <a href="https://m.me/n.salama.ict/">Send a message</a>
          </article>

          <article className='contact_options'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+31638501535</h5>
            <a href="https://api.whatsapp.com/send?phone=+31638501535">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea type="submit" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact