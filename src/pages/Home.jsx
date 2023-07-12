import React from "react";
import { GitHub, Linkedin } from "../utils";
import "../styles/styles.scss";

export const Home = () => {
  return (
    <>
      <section id="home" className="mx-auto h-screen w-full">
        <div className="flex h-screen w-full flex-col justify-center gap-2 p-4">
          <h1 className="z-10 text-center text-7xl font-light max-lg:text-6xl">
            Moscoloni Juan P.
          </h1>
          <h3 className="z-10 text-center text-lg font-extralight">
            Front End Developer
          </h3>
          <div className="z-10 flex justify-center gap-2">
            <a href="https://github.com/JuanpyMoscoloni" target="_blank">
              <GitHub width={40} height={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-pablo-moscoloni-53a8b9245/"
              target="_blank"
            >
              <Linkedin width={40} height={40} />
            </a>
          </div>
          <div className="z-10 flex justify-center">
            <a
              href="./CV-Moscoloni-Juan-Pablo.pdf"
              target="_blank"
              className="w-fit rounded-lg border border-black p-2 px-8 transition-all hover:bg-black hover:text-white"
            >
              Abrir CV
            </a>
          </div>
        </div>
        <a
          href="#works"
          className="float-animation absolute bottom-[3rem] mx-auto mb-3 flex w-full select-none justify-center"
        >
          <img src="./img/flecha.png" className="w-15 h-10 bg-transparent" />
        </a>
      </section>
    </>
  );
};
