import React from "react";
import "./nav.scss";

import { IoIosHome } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { ImStatsBars2 } from "react-icons/im";
import { GiHammerNails } from "react-icons/gi";
import { SiGooglemessages } from "react-icons/si";
import { RiFoldersLine } from "react-icons/ri";

const Nav = () => {
  const [activeNav, setActiveNav] = React.useState("#");

  return (
    <nav >
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")} 
      >
        <IoIosHome />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setActiveNav("#about")} 
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "#experience" ? "active" : ""}
        onClick={() => setActiveNav("#experience")}
      >
        <ImStatsBars2 />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setActiveNav("#services")}
      >
        <GiHammerNails />
      </a>

      <a
        href="#portfolio"
        className={activeNav === "#portfolio" ? "active" : ""}
        onClick={() => setActiveNav("#portfolio")}
      >
        <RiFoldersLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setActiveNav("#contact")}
      >
        <SiGooglemessages />
      </a>
    </nav>
  );
};

export default Nav;
