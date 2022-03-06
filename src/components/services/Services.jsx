import React from "react";
import "./services.scss";

import { BsPatchCheckFill } from "react-icons/bs";
import Canvas from "../3D-Canvas/Canvas.jsx";

const Services = () => {
  return (
    <section id="services">
      <h5>Meus</h5>
      <h2>Serviços</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>SERVIÇOS</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>Desenvolvimento de WebSites, WebApps, Ecommerces.</p>
            </li>{" "}
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>Criação do protótipo do site a partir de conceitos de UX e UI.</p>
            </li>{" "}
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>Sites desenvolvidos a partir do Wordpress ou por código.</p>
            </li>
            <li>
              <BsPatchCheckFill className="service_list-icon" />
              <p>Criação de bots para as mais diversas automações.</p>
            </li>
          </ul>
        </article>

        <Canvas />
      </div>
    </section>
  );
};

export default Services;
