import React from "react";
import EffectScroll from "../components/EffectScroll";
import "../styles/styles.scss";
import { GitHub, Linkedin } from "../utils";
import AboutMePhone from "./AboutMePhone";

export const AboutMe = () => {
  return (
    <>
      <EffectScroll>
        <section
          id="about-me"
          className="containerBox z-20 flex min-h-screen flex-col items-center justify-center max-lg:hidden"
        >
            <h1 className="mb-16 text-center text-5xl font-light">Sobre mi</h1>
            <div class="mt-12 flex w-full gap-10 justify-center">
              <img
                src="./img/juanpyFoto.webp"
                alt=""
                className="w-[30%] rounded-xl"
              />
              <div class="flex w-[50%] flex-col gap-5">
                <h1 className="text-2xl font font-semibold">Moscoloni Juan Pablo</h1>
                <p className="text-xl font-extralight">
                  Mi objetivo es ser parte del equipo de desarrollo
                  front-end de una empresa. Disfruto trabajar en equipo y
                  colaborar para alcanzar metas. Estoy dispuesto a aprender y
                  utilizar diferentes tecnologías.
                </p>
                <div className="flex gap-2">
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
            </div>
        </section>
        <AboutMePhone />
      </EffectScroll>
    </>
  );
};
