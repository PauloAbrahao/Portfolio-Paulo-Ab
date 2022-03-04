import React from "react";
import "./about.scss";

import { FaAward } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { RiFoldersLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me-image">
          <img src="" alt="" />
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experiência</h5>
              <small>+2 anos</small>
            </article>

            <article className="about_card">
              <BsPeopleFill className="about_icon" />
              <h5>Clientes</h5>
              <small>3+ years working</small>
            </article>

            <article className="about_card">
              <RiFoldersLine className="about_icon" />
              <h5>Projetos</h5>
              <small>3+ years working</small>
            </article>

            <p>
              Olá, seja bem-vindo(a)!👋🏻 Meu nome é Paulo Abrahão, tenho 20 anos
              e sou estudante de Sistemas de Informação na UEMG - Passos.
              Atualmente, em 2022, me encontro no 2° ano da faculdade. Durante o
              ano de 2020 iniciei meus estudos em programação, buscando aprender
              Desenvolvimento Web. Hoje, após dois anos de estudo nessa área sou
              capaz de produzir sites com layouts responsivos, além de ter
              conhecimento em APIs e nos mais diversos Frameworks e Libraries.
              Além do Front-End, também me interesso por Back-end e mobile.
              Buscando aprender mais, fiz vários cursos e participei de muitos
              eventos online, como: B7 Web, RocketSeat, CodeCademy, Origamid,
              Curso em Vídeo, Next Level Week, Maratona Discover, 3° Imersão
              Dados da Alura e muitos outros.
            </p>

            <a href="#contact">Vamos conversar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
