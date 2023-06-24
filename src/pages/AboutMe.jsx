import React from "react";
import EffectScroll from "../components/EffectScroll";
import "../styles/styles.scss";
import { GitHub, Linkedin } from "../utils";
import AboutMePhone from "../components/AboutMePhone";

export const AboutMe = () => {
  return (
    <>
      <EffectScroll>
        <section
          id="about-me"
          className="containerBox z-20 flex h-screen w-full flex-col items-center justify-center"
        >
          <div class="container">
            <h1 className="mb-16 text-center text-5xl font-light">About Me</h1>
            <div class="mt-12 flex w-full gap-10 max-sm:hidden">
              <img
                src="./img/juanpyFoto.png"
                alt=""
                className="w-[50%] rounded-xl"
              />
              <div class="flex h-fit w-[50%] flex-col gap-5">
                <p className="text-2xl">
                  20 años y mi objetivo es ser parte del equipo de desarrollo
                  front-end de una empresa. Disfruto trabajar en equipo y
                  colaborar para alcanzar metas. Estoy dispuesto a aprender y
                  utilizar diferentes tecnologías.
                </p>
                <div className="flex gap-2">
                  <a href="https://github.com/JuanpyMoscoloni" target="_blank">
                    <GitHub width={60} height={60} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/juan-pablo-moscoloni-53a8b9245/"
                    target="_blank"
                  >
                    <Linkedin width={60} height={60} />
                  </a>
                </div>
              </div>
            </div>
            <AboutMePhone />
          </div>
        </section>
      </EffectScroll>
    </>
  );
};
