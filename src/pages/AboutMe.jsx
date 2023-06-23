import React from "react";
import EffectScroll from "../components/EffectScroll";
import "../styles/styles.scss";
import { Git, Linkedin } from "../utils";

export const AboutMe = () => {
  return (
    <>
      <EffectScroll>
        <section
          id="about-me"
          className="containerBox h-screen w-full flex flex-col justify-center items-center z-20"
        >
          <div class="container">
            <h1 className="text-5xl font-light text-center mb-16">About Me</h1>
            <div class="w-full mt-12 flex gap-10 max-sm:hidden">
              <img
                src="./img/juanpyFoto.png"
                alt=""
                className="w-[50%] rounded-xl"
              />
              <div class="w-[50%] h-fit flex flex-col gap-5">
                <p className="text-2xl">
                  20 años y mi objetivo es ser parte del equipo de desarrollo
                  front-end de una empresa. Disfruto trabajar en equipo y
                  colaborar para alcanzar metas. Estoy dispuesto a aprender y
                  utilizar diferentes tecnologías.
                </p>
                <div className="flex gap-2">
                  <a href="https://github.com/JuanpyMoscoloni" target="_blank">
                    <Git width={60} height={60} />
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
            <div class="cta md:hidden sm:hidden">
              <img src="./img/juanpyFoto.png" alt="" />
              <div class="text">
                <h2 className="text-center">Moscoloni Juan Pablo</h2>
                <p>Front End Engineer</p>
                <p>
                  20 años y mi objetivo es ser parte del equipo de desarrollo
                  front-end de una empresa. Disfruto trabajar en equipo y
                  colaborar para alcanzar metas. Estoy dispuesto a aprender y
                  utilizar diferentes tecnologías.
                </p>
              </div>
            </div>
          </div>
        </section>
      </EffectScroll>
    </>
  );
};
