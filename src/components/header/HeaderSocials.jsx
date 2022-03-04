import React from 'react'

import { FiLinkedin } from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/paulo-abrah%C3%A3o/" target="_blank"> <FiLinkedin/> </a>
      <a href="https://github.com/PauloAbrahao" target="_blank"> <FiGithub /> </a>
      <a href="https://twitter.com/Paulo_abh" target="_blank"> <FiTwitter /> </a>
      <a href="https://www.instagram.com/paulo_abh/?hl=pt-br" target="_blank"> <FiInstagram /> </a>
    </div>
  )
}

export default HeaderSocials