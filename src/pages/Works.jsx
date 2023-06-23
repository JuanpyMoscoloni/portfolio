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
      gitUrl: "https://github.com/JuanpyMoscoloni/SocialApp",
      demoUrl: "https://social-application.web.app/login",
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
        className="containerBox flex flex-col justify-center items-center w-full h-screen z-20"
      >
        <h1 className="text-5xl mb-16 font-light text-center">Works</h1>
       {containerMap}
      </section>
    </EffectScroll>
  );
};
