import React from "react";
import "./portfolio.scss";

import IMG1 from "../../assets/dogs.png";
import IMG2 from "../../assets/dev-finance.png";
import IMG6 from "../../assets/starbucks.png";
import IMG7 from "../../assets/letmeask.png";
import IMG8 from "../../assets/apae.png";
import IMG9 from "../../assets/ewesteves.png";
import IMG3 from "../../assets/magic-match.png";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

import FadeInSection from "../scroll/FadeInSection";

const Portfolio = () => {
  const [showMore, setShowMore] = React.useState(false);
  const [TextShow, setTextShow] = React.useState("Ver mais");

  const data = [
    {
      id: 1,
      image: IMG8,
      title: "APAE Altinópolis",
      description: "Wordpress",
      github: "",
      demo: "https://apaealtinopolis.com.br",
    },
    {
      id: 2,
      image: IMG9,
      title: "ewesteves",
      description: "Wordpress",
      github: "",
      demo: "https://ewesteves.com.br/",
    },
    {
      id: 3,
      image: IMG1,
      title: "Dogs App - Origamid",
      description: "ReactJs / CSS",
      github:
        "https://github.com/PauloAbrahao/Dogs-Site-para-cachorros-Origamid",
      demo: "",
    },
    {
      id: 4,
      image: IMG6,
      title: "StarBucks - B7 Web",
      description: "HTML / CSS",
      github: "https://github.com/PauloAbrahao/Projeto-Star-Bucks",
      demo: "https://pauloabrahao.github.io/Projeto-Star-Bucks/",
    },
    {
      id: 5,
      image: IMG2,
      title: "Dev Finance - Rocketseat",
      description: "HTML / CSS / Javascript",
      github: "https://github.com/PauloAbrahao/Dev.finance",
      demo: "https://pauloabrahao.github.io/Dev.finance/",
    },
    {
      id: 6,
      image: IMG7,
      title: "Letmeask - Rocketseat",
      description: "ReactJs / TypeScript / Firebase",
      github: "https://github.com/PauloAbrahao/Letmeask",
      demo: "",
    },
    {
      id: 7,
      image: IMG3,
      title: "Memory Game - Net Ninja",
      description: "ReactJs / CSS",
      github: "https://github.com/PauloAbrahao/Memory-game",
      demo: "",
    },
  ];

  const numberList = showMore ? data.length : 6;

  const handleClick = () => {
    setShowMore(!showMore);
    setTextShow(showMore ? "Ver mais" : "Ver menos");
  };

  return (
    <section id="portfolio">
      <h5>Meus</h5>
      <h2>Projetos</h2>

      <FadeInSection>
        <div className="container portfolio_container">
          {data
            .slice(0, numberList)
            .map(({ id, image, title, description, github, demo }) => {
              return (
                <article className="portfolio_item" key={id}>
                  <div className="portfolio_item-image">
                    <img src={image} alt={title} loading="lazy" />
                  </div>
                  <div className="portfolio_item-text">
                    <h3>{title}</h3>
                    <small>{description}</small>
                    <div className="portfolio_item-cta">
                      {github ? (
                        <a href={github} className="btn" target="_blank">
                          Github
                        </a>
                      ) : (
                        ""
                      )}

                      {demo ? (
                        <a href={demo} className="btn btn_site" target="_blank">
                          Site
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
        </div>

        <div className="show-more">
          <a className="btn show" onClick={handleClick}>
            {TextShow}
            {showMore ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </a>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Portfolio;
