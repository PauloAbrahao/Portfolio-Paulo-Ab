import React from "react";
import "./portfolio.scss";

import IMG1 from "../../assets/awax.png";
import IMG2 from "../../assets/dev-finance.png";
import IMG6 from "../../assets/starbucks.png";
import IMG7 from "../../assets/letmeask.png";
import IMG8 from "../../assets/apae.png";
import IMG9 from "../../assets/ewesteves.png";

const Portfolio = () => {
  
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Awax ",
      description: "HTML / CSS",
      github: "https://github.com/PauloAbrahao/Site-Awax",
      demo: "https://pauloabrahao.github.io/Site-Awax/",
    },
    {
      id: 3,
      image: IMG6,
      title: "StarBucks",
      description: "HTML / CSS",
      github: "https://github.com/PauloAbrahao/Projeto-Star-Bucks",
      demo: "https://pauloabrahao.github.io/Projeto-Star-Bucks/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Dev Finance",
      description: "HTML / CSS / Javascript",
      github: "https://github.com/PauloAbrahao/Dev.finance",
      demo: "https://pauloabrahao.github.io/Dev.finance/",
    },
    {
      id: 4,
      image: IMG7,
      title: "Letmeask",
      description: "ReactJs, TypeScript, Firebase",
      github: "https://github.com/PauloAbrahao/Letmeask",
      demo: "",
    },
    {
      id: 5,
      image: IMG8,
      title: "APAE Altinópolis",
      description: "Wordpress",
      github: "",
      demo: "https://apaealtinopolis.com.br",
    },
    {
      id: 6,
      image: IMG9,
      title: "ewesteves",
      description: "Wordpress",
      github: "",
      demo: "https://ewesteves.com.br/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>Meus</h5>
      <h2>Projetos</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small>{description}</small>
              <div className="portfolio_item-cta">
     
                {github ? (
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                ) : (
                  ''
                )}

                {demo ? (
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Site
                  </a>
                ) : (
                  ""
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
