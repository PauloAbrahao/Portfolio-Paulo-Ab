import React from "react";
import "./portfolio.scss";

import IMG1 from "../../assets/awax.png";
import IMG2 from "../../assets/dev-finance.png";
import IMG3 from "../../assets/login-page.png";
import IMG4 from "../../assets/moveit.png";
import IMG5 from "../../assets/pre-order.png";
import IMG6 from "../../assets/starbucks.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus</h5>
      <h2>Projetos</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Demo
            </a>
          </div>
        </article>
        {/* <div id="home-magicwall" class="fake-magicwall">
                <ul>
                    <li>
                        <div class="magic-wall_item lazyload">
                            <img src="" alt="image" />
                            <div class="hover-content"></div>
                            <a href="#" class="colorbox"></a>
                        </div>
                    </li>
            
                    <li>
                        <div class="magic-wall_item lazyload">
                            <img src="" alt="image" />
                            <div class="hover-content"></div>
                            <a href="#" class="colorbox"></a>
                        </div>
                    </li>
          
                    <li>
                        <div class="magic-wall_item lazyload">
                            <img src="" alt="image" />
                            <div class="hover-content"></div>
                            <a href="#" class="colorbox"></a>
                        </div>
                    </li>
                  
                    <li>
                        <div class="magic-wall_item lazyload">
                            <img src="" alt="image" />
                            <div class="hover-content"></div>
                            <a href="#" class="colorbox"></a>
                        </div>
                    </li>
                  
                    <li>
                        <div class="magic-wall_item lazyload">
                            <img src="" alt="image" />
                            <div class="hover-content"></div>
                            <a href="#" class="colorbox"></a>
                        </div>
                    </li>
                    
                    <li>
                        <div class="magic-wall_item lazyload">
                            <img src="" alt="image" />
                            <div class="hover-content"></div>
                            <a href="#" class="colorbox"></a>
                        </div>
                    </li>
                
                    <li>
                        <div class="magic-wall_item lazyload">
                            <img src="" alt="image" />
                            <div class="hover-content"></div>
                            <a href="#" class="colorbox"></a>
                        </div>
                    </li>
                    <li>
                        <div class="magic-wall_item lazyload">
                            <img src="" alt="image" />
                            <div class="hover-content"></div>
                            <a href="#" class="colorbox"></a>
                        </div>
                    </li>
                    <li>
                        <div class="magic-wall_item lazyload">
                            <img src="" alt="image" />
                            <div class="hover-content"></div>
                            <a href="#" class="colorbox"></a>
                        </div>
                    </li>
                    <li>
                        <div class="magic-wall_item lazyload">
                            <img src="" alt="image" />
                            <div class="hover-content"></div>
                            <a href="#" class="colorbox"></a>
                        </div>
                    </li>
                    
                </ul>
            </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
