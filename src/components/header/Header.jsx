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
          fpsLimit: 60,
          fullScreen: {
            enable: false,
            zIndex: -1000,
          },
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: ["push", 'remove'],
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
              remove: {
                quantity: 4,
              },
              repulse: {
                distance: 50,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              opacity: 0,
              value: "#00ffc328",
            },
            links: {
              color: "#64ffda",
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
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
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
          <img src={profile} alt="Foto do Paulo Abrahão" loading="lazy"/>
        </div>

        <h2>Olá, eu sou</h2>
        <h3>Paulo Abrahão</h3>

        <h4 className="text-light">
          <Typewriter
            options={{
              strings: ["Desenvolvedor", "Freelancer", "Designer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h4>

        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll_down">
          Descer
        </a>
      </div>
    </header>
  );
};

export default Header;
