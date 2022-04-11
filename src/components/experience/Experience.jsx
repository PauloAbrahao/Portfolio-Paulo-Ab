import React from "react";
import "./experience.scss";

import { IoMdCheckboxOutline } from "react-icons/io";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Minhas</h5>
      <h2>Skills</h2>

      <div className="container experience-container">
        <div className="flipper">
          <div className="experience_frontend">
            <h3>Desenvolvimento FrontEnd</h3>
            <div className="experience_content">
              <article className="experience_details">
                <IoMdCheckboxOutline className="experience_details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experiente</small>
                </div>
              </article>

              <article className="experience_details">
                <IoMdCheckboxOutline className="experience_details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>

              <article className="experience_details">
                <IoMdCheckboxOutline className="experience_details-icon" />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experiente</small>
                </div>
              </article>

              <article className="experience_details">
                <IoMdCheckboxOutline className="experience_details-icon" />
                <div>
                  <h4>React Js</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>

              <article className="experience_details">
                <IoMdCheckboxOutline className="experience_details-icon" />
                <div>
                  <h4>Wordpress</h4>
                  <small className="text-light">Experiente</small>
                </div>
              </article>
              
            </div>
          </div>

          <div className="experience_backend">
            <h3>Desenvolvimento BackEnd</h3>
            <div className="experience_content">
              <article className="experience_details">
                <IoMdCheckboxOutline className="experience_details-icon" />
                <div>
                  <h4>Node Js</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>

              <article className="experience_details">
                <IoMdCheckboxOutline className="experience_details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>

              <article className="experience_details">
                <IoMdCheckboxOutline className="experience_details-icon" />
                <div>
                  <h4>PHP</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
