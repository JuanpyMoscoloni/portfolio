import React, { useRef, useState } from "react";
import "animate.css";
import "../styles/styles.scss";
import EffectScroll from "../components/EffectScroll";
import Proyects from "../components/Proyects";
import ProyectsPhone from "../components/ProyectsPhone";
export const Works = () => {
  const proyects = [
    {
      id: 1,
      title: "Social Media App",
      description:
        "La red social se destacará por su diseño intuitivo, personalizable y amigable, brindando una experiencia en línea única y atractiva para los usuarios.",
      imgSrc: "./img/icon.png",
      alt:"Social Media App",
    },
  ];
  
  const containerMap = proyects.map((proyecto) => (
    <Proyects
      key={proyecto.id}
      id={proyecto.id}
      title={proyecto.title}
      description={proyecto.description}
      imgSrc={proyecto.imgSrc}
      gitUrl={proyecto.gitUrl}
      demoUrl={proyecto.demoUrl}
    />
  ));

  const containerMapPhone = proyects.map((proyecto) => (
    <ProyectsPhone
      key={proyecto.id}
      id={proyecto.id}
      title={proyecto.title}
      description={proyecto.description}
      imgSrc={proyecto.imgSrc}
      gitUrl={proyecto.gitUrl}
      demoUrl={proyecto.demoUrl}
    />
  ));

  return (
    <EffectScroll>
      <section
      id="works" 
      className="containerBox z-20 flex min-h-screen flex-col items-center justify-center"
        >
        <h1 className="text-5xl mb-16 font-light text-center">Works</h1>
      {containerMapPhone}
      {containerMap}
      </section>
    </EffectScroll>
  );
};
