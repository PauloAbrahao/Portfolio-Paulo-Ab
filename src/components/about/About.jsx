import React from "react";
import "./about.scss";

import { FaAward } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { RiFoldersLine } from "react-icons/ri";

import FadeInSection from '../scroll/FadeInSection'

const About = () => {
  return (
    <section id="about">
      <h5>Saiba mais</h5>
      <h2>Sobre mim</h2>

      <div className="container about_container">
        <FadeInSection>
          <div className="about_me">
            <p>
              👨‍💻 Olá, seja bem-vindo(a)!👋🏻 <br />
              Meu nome é Paulo Abrahão, tenho 20 anos e sou estudante de
              Sistemas de Informação na UEMG - Passos. Atualmente, em 2022, me
              encontro no 3° ano da faculdade. <br />
              Durante o ano de 2020 iniciei meus estudos em programação, buscando aprender Desenvolvimento Web. <br />
              Hoje, após dois anos de bastante estudo e prática nessa área sou capaz de construir sites com layouts responsivos, além de ter conhecimento em APIs e no framework ReactJs (no qual esse site foi construído). Apesar de gostar mais de front-end também me interesso por mobile e back-end. <br /> 
              Inclusive tenho muita experiência em desenvolver sites com wordpress. <br />
              Veja meu <a href="#portfolio">portfólio</a> .
              
            </p>
          </div>
        </FadeInSection>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experiência</h5>
              <small>+2 anos</small>
            </article>

            <article className="about_card">
              <IoIosSchool className="about_icon" />
              <h5>Cursos</h5>
              <small>+10 cursos realizados</small>
            </article>

            <article className="about_card">
              <RiFoldersLine className="about_icon" />
              <h5>Projetos</h5>
              <small>10+ projetos desenvolvidos</small>
            </article>
          </div>

          <a href="#contact" className="btn btn-primary">
            Vamos conversar
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
