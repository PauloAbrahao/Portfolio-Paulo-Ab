import React from "react";
import "./header.scss";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

import Typewriter from "typewriter-effect";

import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div className="me">
          <img src={profile} alt="Foto do Paulo Abrahão" />
        </div>

        <h5>Olá, eu sou</h5>
        <h1>Paulo Abrahão</h1>

        <Typewriter
          options={{
            strings: ["Desenvolvedor", "Freelancer", "Designer"],
            autoStart: true,
            loop: true,
          }}
        />

        {/* <h5 className="text-light"></h5> */}

        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
