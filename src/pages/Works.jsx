import React, { useRef, useState } from "react";
import "animate.css";
import "../styles/styles.scss";
import EffectScroll from "../components/EffectScroll";
import Proyects from "../components/Proyects";
export const Works = () => {
  const proyects = [
    {
      id: 1,
      title: "Social Media App",
      description:
        "La red social se destacará por su diseño intuitivo, personalizable y amigable, brindando una experiencia en línea única y atractiva para los usuarios.",
      imgSrc: "./img/icon.png",
      gitUrl:"https://github.com/JuanpyMoscoloni/SocialApp",
      demoUrl:"https://social-application.web.app/",
      alt: "Social Media App",
    },
    {
      id: 2,
      title: "Portafolio",
      description:
        "Portafolio front end: Una web unica, intuitivas y visualmente atractivas para cautivar a los usuarios.",
      imgSrc: "./img/juanpyLogo.png",
      gitUrl: "https://github.com/JuanpyMoscoloni/portfolio",
      demoUrl: "https://juanpyportafolio.netlify.app/",
      alt: "portafolio",
    },
    {
    id: 3,
    title: "VRM Comunicaciones",
    description:
      "Pagina de venta de productos de comunicaciones.",
    imgSrc: "./img/vrmlogo.jpg",
    gitUrl: "https://github.com/JuanpyMoscoloni/vrmcomunicaciones-project/tree/dev",
    demoUrl: "https://vrmcomunicaciones.com.ar/",
    alt: "portafolio",
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

  return (
    <EffectScroll>
      <section
        id="works"
        className="containerBox z-20 flex flex-col h-full w-full pt-[11rem] max-lg:pt-[6rem] gap-4 items-center justify-center"
      >
        <h1 className="mb-16 text-center text-5xl font-light">Trabajos</h1>
        <div className="w-full h-fit flex max-lg:flex-col items-center gap-8 justify-center">
        {containerMap}
        </div>
      </section>
    </EffectScroll>
  );
};
