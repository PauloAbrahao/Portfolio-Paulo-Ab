import React from "react";
import "./contact.scss";

import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const data = [
    {
      id: 1,
      type: "Email",
      social: "ab.cod@outlook.com",
      icon: <AiOutlineMail className="contact_option-icon"/>,
      link: `mailto:ab.cod@outlook.com`,
      message: "Fale comigo!"
    },
    {
      id: 2,
      type: "LinkedIn",
      social: "paulo-abrahão",
      icon: <FiLinkedin className="contact_option-icon"/>,
      link: "https://www.linkedin.com/in/paulo-abrah%C3%A3o/",
      message: "Conheça meu perfil"
    },
    {
      id: 3,
      type: "GitHub",
      social: "PauloAbrahao",
      icon: <FiGithub className="contact_option-icon"/>,
      link: "https://github.com/PauloAbrahao",
      message: "Conheça meus projetos"
    },
    {
      id: 4,
      type: "Twitter",
      social: "Paulo_abh",
      icon: <FiTwitter className="contact_option-icon" />,
      link: "https://twitter.com/Paulo_abh",
      message: "Siga-me no Twitter"
    },
  ];

  return (
    <section id="contact">
      <h5>Entre em</h5>
      <h2>Contato</h2>

      <div className="container contact_container">
        <div className="contact_options">
          {data.map(({ id, type, social, icon, link, message }) => {
            return (
              <article className="contact_option" key={id}>
                {icon}
                <h4>{type}</h4>
                <h5>{social}</h5>
                <a href={link} target="_blank">{message}</a>
              </article>
            );
          })}
        </div>

        <form action="">
          <input type="text" name='name' placeholder="Nome completo" required />
          <input type="email" name='email' placeholder="E-mail" required />
          <textarea name="message" rows="10"></textarea>
          <button type="submit" className='btn btn-primary sub-button'>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
