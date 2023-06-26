import React from "react";
import "../styles/styles.scss";

const AboutMePhone = () => {
  return (
    <section
      id="about-me-iphone"
      className="containerBox z-20 flex min-h-screen flex-col items-center justify-center lg:hidden"
    >
      <h1 className="mb-16 text-center text-5xl font-light">Sobre mi</h1>
      <div class="flex h-full w-full flex-col items-center justify-center gap-3">
        <img
          src="./img/juanpyFoto.webp"
          className="w-[65%] rounded-xl"
          alt=""
        />
        <h2 className="font-semibold text-xl">Moscoloni Juan Pablo</h2>
        <p className="text-lg text-center w-[25rem] p-4">
          Mi objetivo es ser parte del equipo de desarrollo front-end de una
          empresa. Disfruto trabajar en equipo y colaborar para alcanzar metas.
          Estoy dispuesto a aprender y utilizar diferentes tecnologías.
        </p>
      </div>
    </section>
  );
};

export default AboutMePhone;
