import React from "react";
import { GitHub, Linkedin } from "../utils";
import "../styles/styles.scss";

export const Home = () => {
  return (
    <>
      <div id="home" className="mx-auto h-screen">
        <div className="flex flex-col gap-2 p-4 justify-center w-full h-screen">
          <h1 className="text-7xl font-light text-center">Moscoloni Juan P.</h1>
          <h3 className="text-center font-extralight text-lg">Front End Developer</h3>
          <div className="flex justify-center gap-2">
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
        <div className="flex absolute bottom-[3rem] w-full justify-center mb-3 float-animation">
          <img
            src="./img/flecha.png"
            className="w-15 h-10 bg-transparent"
          />
        </div>
      </div>
    </>
  );
};
