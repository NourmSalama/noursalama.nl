import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLinktree} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='Header__socials'>
        <a href="https://www.linkedin.com/in/noursalama/"><BsLinkedin/></a>
        <a href="https://github.com/NourmSalama"><FaGithub/></a>
        <a href="https://linktr.ee/noursalama"><SiLinktree/></a>
    </div>
  )
}

export default HeaderSocials 