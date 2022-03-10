import React from "react";
import "./footer.scss";

import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        PauloAbh
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#services">Serviços</a>
        </li>
        <li>
          <a href="#portfolio">Portfólio</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/paulo-abrah%C3%A3o/" target="_blank">
          <FiLinkedin />
        </a>
        <a href="https://github.com/PauloAbrahao" target="_blank">
          <FiGithub />
        </a>
        <a href="https://twitter.com/Paulo_abh" target="_blank">
          <FiTwitter />
        </a>
      </div>

      <div className="footer_copy">
        <small>&copy; PauloAbh. Todos direitos reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
