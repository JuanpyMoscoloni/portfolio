import React from "react";
import { GitHub, Linkedin } from "../utils";
import "../styles/styles.scss";

export const Home = () => {
  return (
    <>
      <section id="home" className="mx-auto h-screen w-full">
        <div className="flex h-screen w-full flex-col justify-center gap-2 p-4">
          <h1 className="text-center z-10 text-7xl font-light max-lg:text-6xl">
            Moscoloni Juan P.
          </h1>
          <h3 className="text-center z-10 text-lg font-extralight">
            Front End Developer
          </h3>
          <div className="flex z-10 justify-center gap-2">
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
        </div>
        <a
          href="#works"
          className="float-animation absolute bottom-[3rem] mb-3 flex w-full justify-center"
        >
          <img src="./img/flecha.png" className="w-15 h-10 bg-transparent" />
        </a>
      </section>
    </>
  );
};
