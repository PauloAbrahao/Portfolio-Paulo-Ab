import React from "react";
import "./experience.scss";

import { BsCheckCircleFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My experience</h2>

      <div className="container experience-container">
        <div className="flipper">
          <div className="experience_frontend">
            <h3>FrontEnd Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsCheckCircleFill className="experience_details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experiente</small>
                </div>
              </article>

              <article className="experience_details">
                <BsCheckCircleFill className="experience_details-icon" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>

              <article className="experience_details">
                <BsCheckCircleFill className="experience_details-icon" />
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experiente</small>
                </div>
              </article>

              <article className="experience_details">
                <BsCheckCircleFill className="experience_details-icon" />
                <div>
                  <h4>React Js</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience_backend">
            <h3>Backend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <BsCheckCircleFill className="experience_details-icon" />
                <div>
                  <h4>Node Js</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>

              <article className="experience_details">
                <BsCheckCircleFill className="experience_details-icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Básico</small>
                </div>
              </article>

              <article className="experience_details">
                <BsCheckCircleFill className="experience_details-icon" />
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
