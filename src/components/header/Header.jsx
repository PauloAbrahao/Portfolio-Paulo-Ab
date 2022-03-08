import React from "react";
import "./header.scss";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

import Particles from "react-tsparticles";

import Typewriter from "typewriter-effect";

import profile from "../../assets/profile.png";

const Header = () => {
  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {};

  return (
    <header>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          fullScreen: {
            enable: false,
            zIndex: -1000,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 100,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 90,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              opacity: 0,
              value: "#ffffff",
            },
            links: {
              color: "#4db5ff",
              distance: 120,
              enable: true,
              opacity: 0.18,
              width: 1.2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />

      <div className="container header_container">
        <div className="me">
          <img src={profile} alt="Foto do Paulo Abrahão" />
        </div>

        <h2>Olá, eu sou</h2>
        <h3>Paulo Abrahão</h3>

        <Typewriter 
          options={{
            strings: ["Desenvolvedor", "Freelancer", "Designer"],
            autoStart: true,
            loop: true,
          }}
        />

        {/* <h5 className="text-light"></h5> */}

        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
