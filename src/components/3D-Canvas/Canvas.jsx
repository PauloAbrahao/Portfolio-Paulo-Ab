import React from "react";
import "./Canvas.scss";

const Canvas = () => {
  return (
    <div className="skills-charts">
      <div id="myCanvasContainer">
        <canvas width="600" height="500" id="myCanvas">
          <ul id="tags">
            <li>
              <a href="#">UX</a>
            </li>
            <li>
              <a href="#">UI</a>
            </li>
            <li>
              <a href="#">WORDPRESS</a>
            </li>
            <li>
              <a href="#">DESENVOLVIMENTO</a>
            </li>
            <li>
              <a href="#">PROTOTIPAÇÃO</a>
            </li>
            <li>
              <a href="#">DESIGN</a>
            </li>
            <li>
              <a href="#">WEBSITES</a>
            </li>
            <li>
              <a href="#">ECOMMERCES</a>
            </li>
            <li>
              <a href="#">CRIAÇÃO</a>
            </li>
            <li>
              <a href="#">FRONTEND</a>
            </li>
            <li>
              <a href="#">BACKEND</a>
            </li>
            <li>
              <a href="#">REACT JS</a>
            </li>
            <li>
              <a href="#">JAVASCRIPT</a>
            </li>
            <li>
              <a href="#">BOTS</a>
            </li>
            <li>
              <a href="#">AUTOMAÇÃO</a>
            </li>
          </ul>
        </canvas>
      </div>
    </div>
  );
};

export default Canvas;
