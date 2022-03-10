import React from "react";
import "./slideContact.scss";

// import Swiper core and required modules
import { EffectCards, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const SlideContact = () => {
  const data = [
    {
      id: 1,
      type: "Email",
      social: "dev.pauloabh@gmail.com",
      icon: <AiOutlineMail className="contact_option-icon" />,
      link: `mailto:dev.pauloabh@gmail.com`,
      message: "Fale comigo!",
    },
    {
      id: 2,
      type: "LinkedIn",
      social: "paulo-abrahão",
      icon: <FiLinkedin className="contact_option-icon" />,
      link: "https://www.linkedin.com/in/paulo-abrah%C3%A3o/",
      message: "Conheça meu perfil",
    },
    {
      id: 3,
      type: "GitHub",
      social: "PauloAbrahao",
      icon: <FiGithub className="contact_option-icon" />,
      link: "https://github.com/PauloAbrahao",
      message: "Conheça meus projetos",
    },
    {
      id: 4,
      type: "Twitter",
      social: "Paulo_abh",
      icon: <FiTwitter className="contact_option-icon" />,
      link: "https://twitter.com/Paulo_abh",
      message: "Siga-me no Twitter",
    },
  ];

  return (
    <>
      <Swiper
        className="contact_options"
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCards]}
      >
        {data.map(({ id, type, social, icon, link, message }) => {
          return (
            <SwiperSlide className="contact_option" key={id}>
              {icon}
              <h4>{type}</h4>
              <h5>{social}</h5>
              <a href={link} target="_blank">
                {message}
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SlideContact;
